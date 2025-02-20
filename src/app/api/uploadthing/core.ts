import { auth } from '@clerk/nextjs/server';
import { neon } from '@neondatabase/serverless';
import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { env } from '~/env';

const f = createUploadthing();

export const ourFileRouter = {
	imageUploader: f({
		image: {
			/**
			 * For full list of options and defaults, see the File Route API reference
			 * @see https://docs.uploadthing.com/file-routes#route-config
			 */
			maxFileSize: '32MB',
			maxFileCount: 1,
		},
	})
		.middleware(async ({ req }) => {
			const user = await auth();

			if (!user) throw new Error('Unauthorized');

			return { userId: user.userId };
		})
		.onUploadComplete(async ({ metadata, file }) => {
			'use server';
			const menuId = file.name.split('-')[0];

			const sql = neon(env.DATABASE_URL);

			const result =
				await sql`SELECT * FROM menu WHERE menu_id = ${menuId}`;

			if (!result[0]) {
				await sql`INSERT INTO menu (menu_id, image_url) VALUES (${menuId}, ${file.ufsUrl})`;
			} else {
				await sql`UPDATE menu SET image_url = ${file.ufsUrl} WHERE menu_id = ${menuId}`;
			}

			return { url: file.ufsUrl };
		}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
