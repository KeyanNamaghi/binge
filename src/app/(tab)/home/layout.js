'use client'
import { ProfileProvider } from '@/lib/useProfile'

export default function Layout({ children }) {
  return (
    <ProfileProvider>
      <div className='no-scrollbar absolute flex h-full w-full flex-col items-center gap-6 overflow-scroll px-3 pb-8' id='home-page'>
        {children}
      </div>
    </ProfileProvider>
  )
}
