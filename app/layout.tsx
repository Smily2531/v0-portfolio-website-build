import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Smily Nakka | Full Stack Developer',
  description: 'BTech CSE student at Aditya College of Engineering & Technology. Full Stack Developer skilled in MERN Stack, Java, React, and more. Passionate about competitive programming and problem-solving.',
  keywords: ['Full Stack Developer', 'MERN Stack', 'React', 'Java', 'Web Developer', 'Smily Nakka'],
  authors: [{ name: 'Smily Nakka' }],
  openGraph: {
    title: 'Smily Nakka | Full Stack Developer',
    description: 'Full Stack Developer & BTech CSE Student',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
