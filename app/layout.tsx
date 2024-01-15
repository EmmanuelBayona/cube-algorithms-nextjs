import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

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
	return (
		<ClerkProvider
			appearance={{
				baseTheme: dark,
			}}
		>
			<html lang="en" className='dark'>
				<body className={inter.className}>
					{children}
					<Analytics />
				</body>
			</html>
		</ClerkProvider>
	)
}