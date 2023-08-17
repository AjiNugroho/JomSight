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
        <div className='flex items-start bg-[#050530] min-h-screen w-full relative'>
          <div className='z-0 hidden'>
            <div className='w-[450px] h-[450px] rounded-full bg-gradient-to-b from-[#fe6c4c] to-[#fa39ad] absolute bottom-0 left-0'></div>
            <div className='w-[450px] h-[450px] rounded-full bg-gradient-to-b from-[#d7fe4c] to-[#fe6c4c] absolute bottom-1/2 right-40 '></div>
            <div className='w-[100px] h-[100px] rounded-full bg-gradient-to-b from-[#9beeee] to-[#d7fe4c] absolute top-20 right-1/2'></div>
            <div className='w-[100px] h-[100px] rounded-full bg-gradient-to-b from-[#fe6c4c] to-[#f846b1] absolute bottom-1/4 left-1/3'></div>
            <div className='w-[50px] h-[50px] rounded-full bg-gradient-to-b from-[#abfe4c] to-[#236daa] absolute top-10 left-10'></div>
          </div>
          
          <ClientOnly>
            <div className='flex w-full min-h-screen'>
              <Navbar/>
              {children}
            </div>
            
            
          </ClientOnly>
          
        </div>
      </body>
    </html>
  )
}
