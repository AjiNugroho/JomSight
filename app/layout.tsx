
import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import ContentContainer from './components/content/ContentLayout'
import TopNav from './components/navbar/TopNav'
import StickyLeft from './components/navbar/Stickyleft'
import NewNavbar from './components/navbar/NewNavbar'
import ContentLayout from './components/content/ContentLayout'

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
            <ContentLayout>
              {children}
            </ContentLayout>
          </ClientOnly>
      </body>
    </html>
  )
}
