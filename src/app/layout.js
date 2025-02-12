import './globals.css'
import localFont from 'next/font/local'

const font = localFont({
  src: [
    {
      path: '/ModernEraRegular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/ModernEraBold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

export const metadata = {
  title: 'Binge',
  description: 'Binge is a raccoon based version of Hinge, but with more raccoons. Made by Keyan Namaghi.',
  keywords: ['binge', 'hinge', 'raccoon', 'racoon', 'keyan', 'namaghi', 'ai', 'chat', 'groq', 'parody'],
  alternates: {
    canonical: 'https://binge.keyan.dev',
  },
  generator: 'Next.js',
  applicationName: 'Binge',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Keyan Namaghi' }],
  creator: 'Keyan Namaghi',
  publisher: 'Keyan Namaghi',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/vercel.svg',
    shortcut: '/vercel.svg',
    apple: '/vercel.svg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/vercel.svg',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${font.className} flex min-h-screen flex-col items-center justify-between`}>
        <main className='grid h-[100dvh]	w-full grid-cols-1 items-center justify-between overflow-hidden border-0 border-slate-900 bg-white md:m-auto md:h-[90dvh] md:min-h-[85vh] md:w-[22vw] md:min-w-[380px] md:rounded-2xl md:border-8'>
          {children}
        </main>
      </body>
    </html>
  )
}
