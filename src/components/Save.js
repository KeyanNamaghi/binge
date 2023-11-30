'use client'
import { LikesYouIcon } from '@/components/Icons'
import { buildProfile } from '@/data/profile'
import { MATCHES_STORAGE_KEY } from '@/lib/constants'
import { useRouter, useParams, usePathname } from 'next/navigation'

export const Save = () => {
  const { id } = useParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const onClick = () => {
    const matches = localStorage.getItem(MATCHES_STORAGE_KEY)
    const newMatches = JSON.parse(matches) || []
    newMatches.push(id)
    localStorage.setItem(MATCHES_STORAGE_KEY, JSON.stringify(newMatches))

    alert('You are a match!\n\nYou can now message each other, or not')
    if (pathname.includes('/standouts')) return replace(`/standouts`, { scroll: true })
    if (pathname.includes('/likes-you')) return replace(`/likes-you`, { scroll: true })
    replace(`/home/${buildProfile()}`, { scroll: true })
  }

  return (
    <>
      {/* <div className='fixed top-0 z-10'>test</div> */}
      <div className='absolute bottom-3 right-3'>
        <button onClick={onClick} className='rounded-full bg-white fill-primary p-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
          <LikesYouIcon background='white' />
        </button>
      </div>
    </>
  )
}
