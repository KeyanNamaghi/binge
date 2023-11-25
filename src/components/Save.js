'use client'
import { LikesYouIcon } from '@/components/Icons'
import { buildProfile } from '@/data/profile'
import { MATCHES_STORAGE_KEY } from '@/lib/constants'
import { useRouter, useParams } from 'next/navigation'

export const Save = () => {
  const { id } = useParams()
  const { replace } = useRouter()

  const onClick = () => {
    const matches = localStorage.getItem(MATCHES_STORAGE_KEY)
    const newMatches = JSON.parse(matches) || []
    newMatches.push(id)
    localStorage.setItem(MATCHES_STORAGE_KEY, JSON.stringify(newMatches))
    // regenerateData()
    // This is just so much easier than using a ref
    replace(`/home/${buildProfile()}`, { scroll: true })
    // document?.getElementById('home-page')?.scrollTo(0, 0)
  }

  return (
    <div className='absolute bottom-3 right-3'>
      <button onClick={onClick} className='rounded-full bg-white fill-primary p-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
        <LikesYouIcon background='white' />
      </button>
    </div>
  )
}
