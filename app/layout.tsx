import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Flag from './_components/Flag'
import { LayoutProps } from '@/.next/types/app/layout'
import Link from 'next/link'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'China Palace: 中国宫殿',
  description: 'Developed by deketh.',
}
                

export default function RootLayout(props: LayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <meta name="theme-color" content="#241F21"/>
      <head>
        <link rel="shortcut icon" href="/img/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png"/>
      </head>
      <body
        className={`${inter.className} flex flex-col bg-fixed bg-flower-pattern bg-cover items-center`}
      >
        <div className='top-0 fixed flex justify-center w-full z-20'>
          {/* <Link href='/'> */}
            <Flag />
          {/* </Link> */}
        </div>

        <div className='h-full w-full max-w-xl'>
          {children}
        </div>
      </body>
    </html>
  )
}
