import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import ContentContainer from './components/content/ContentContainer'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EVC Analytics',
  description: 'Analytics for EV Company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
          <ClientOnly>
            <div className='flex w-full lg:h-full'>
              <Navbar/>
              {children}
            </div>
          </ClientOnly>
      </body>
    </html>
  )
}
