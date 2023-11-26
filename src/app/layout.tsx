import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const font = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: ' Next Hotels',
  description: 'Next hotel booking app',
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main className="mx-auto max-w-[1440px] overflow-hidden bg-white">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
