import type { Metadata } from 'next'
import './globals.css'

import { Mulish } from 'next/font/google'

const mulish = Mulish({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
})

const metaTitle: string = 'Win a Prize! Company Name Prize Draw'
const metaDesc: string = 'Enter to win a prize and company merch!'

interface Props {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: metaTitle,
    description: metaDesc,
    openGraph: {
        title: metaTitle,
        description: metaDesc,
    },
}

export default function RootLayout({ children }: Readonly<Props>) {
    return (
        <html lang="en" className={mulish.className}>
            <body>{children}</body>
        </html>
    )
}
