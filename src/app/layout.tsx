import '~/styles/globals.css';
import '@uploadthing/react/styles.css';

import { type Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { extractRouterConfig } from 'uploadthing/server';
import { ourFileRouter } from '~/app/api/uploadthing/core';

import { ClerkProvider } from '@clerk/nextjs';

const poppins = Poppins({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Chocolate Station',
	description: 'Chocolate Station Cafe/Restaurant',
	icons: [{ rel: 'icon', url: '/favicon.svg' }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<NextSSRPlugin
					routerConfig={extractRouterConfig(ourFileRouter)}
				/>
				<body className={poppins.className}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
