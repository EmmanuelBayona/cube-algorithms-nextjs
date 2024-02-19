import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { ClerkProvider, auth } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { Toaster } from 'sonner';
import { SyncActiveOrganization } from './SyncActiveOrganization'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Cube algorithms',
	description: 'Rubkis cube algorithms',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {

	const { sessionClaims } = auth()

	return (
		<ClerkProvider
			appearance={{
				baseTheme: dark,
			}}
		>
			<SyncActiveOrganization  membership={sessionClaims?.membership}/>
			<html lang="en" className='dark bg-background'>
				<body className={inter.className}>
					{children}
					<Toaster richColors />
					<Analytics />
				</body>
			</html>
		</ClerkProvider>
	)
}
