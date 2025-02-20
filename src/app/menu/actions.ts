'use server';

import { neon } from '@neondatabase/serverless';
import { env } from '~/env';

export async function getMenuImage(menuId: string) {
	const sql = neon(env.DATABASE_URL);

	const result = await sql`SELECT * FROM menu WHERE menu_id = ${menuId}`;

	if (result[0]) {
		return result[0].image_url;
	}
}
