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
      <body className={`${font.className} flex flex-col items-center justify-between min-h-screen`}>
        <main className='grid grid-cols-1	w-full h-[100dvh] md:h-full items-center justify-between overflow-hidden bg-white md:w-[22vw] md:min-w-[380px] md:min-h-[85vh] md:m-auto md:rounded-2xl border-0 md:border-8 border-slate-900'>
          {children}
        </main>
      </body>
    </html>
  )
}
