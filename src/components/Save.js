'use client'
import { LikesYouIcon } from '@/components/Icons'
import { MATCHES_STORAGE_KEY } from '@/lib/constants'
import { useProfile } from '@/lib/useProfile'

export const Save = () => {
  const { data, regenerateData } = useProfile()

  const onClick = () => {
    const matches = localStorage.getItem(MATCHES_STORAGE_KEY)
    const newMatches = JSON.parse(matches) || {}
    newMatches[data.id] = data
    localStorage.setItem(MATCHES_STORAGE_KEY, JSON.stringify(newMatches))

    regenerateData()
    // This is just so much easier than using a ref
    document?.getElementById('home-page')?.scrollTo(0, 0)
  }

  return (
    <div className='absolute bottom-3 right-3'>
      <button onClick={onClick} className='rounded-full bg-white fill-primary p-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
        <LikesYouIcon background='white' />
      </button>
    </div>
  )
}
