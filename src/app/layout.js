import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Creator Studio',
  description: 'Storytelling Creator Studio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/> 
        {children}
        <Footer/>
      </body>
    </html>
  )
}
