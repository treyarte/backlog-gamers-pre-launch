import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Backlog Gamers',
  description: 'Level up your gaming journey with BacklogGamers.com! Get news, reviews, community, and more. Sign up for early access now! 🎮 #BacklogGamers #ComingSoon',
  robots: 'index, follow',  
  other: {googlebot: 'index, follow'},    
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_APP_GA_MEASUREMENT_ID}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_APP_GA_MEASUREMENT_ID}');
        `}
      </Script>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
