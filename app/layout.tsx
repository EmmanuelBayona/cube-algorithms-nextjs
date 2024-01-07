import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

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
		<html lang="en" className='dark'>
			<body className={inter.className}>
				{children}
				<Analytics />
			</body>
		</html>
	)
}
