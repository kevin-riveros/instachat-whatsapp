import { Poppins } from 'next/font/google'
import './globals.css'
import { cn } from "@/lib/utils"

const fontSans = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300",  "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-lime-50 font-sans antialiased",
          fontSans.variable
        )}>{children}</body>
    </html>
  )
}
