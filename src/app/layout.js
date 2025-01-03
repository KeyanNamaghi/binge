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
  description: 'Better Hinge',
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
