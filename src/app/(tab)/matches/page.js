'use client'
import { debounce } from '@/lib/debounce'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BINGE_ID, MATCHES_STORAGE_KEY } from '@/lib/constants'
import { decodeProfile } from '@/data/profile'

const ChatPanel = ({ name, message, icon, id }) => {
  return (
    <Link href={`matches/${id}/${name}`}>
      <div className='flex h-fit w-full items-center justify-center border-t py-4'>
        <Image height={50} width={50} alt={name} src={`/${icon}`} className='rounded-box aspect-square rounded-full object-cover' />
        <div className='flex flex-auto flex-col overflow-auto pl-4'>
          <h2 className='font-bold'>{name}</h2>
          {!!message ? <p className='truncate text-xs'>{message}</p> : <p className='truncate text-xs text-gray-500'>Start the chat with {name}</p>}
        </div>
      </div>
    </Link>
  )
}

export default function Matches() {
  const [scroll, setScroll] = useState(0)
  const [data, setData] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(MATCHES_STORAGE_KEY)) || []
    let bingeId = localStorage.getItem(BINGE_ID) || ''
    if (!bingeId) {
      bingeId = crypto.randomUUID()
      localStorage.setItem(BINGE_ID, bingeId)
    }

    const data = [`M1i17300-21w150-7000ww-XW3ARU-uTifvS-${bingeId}`, ...saved]
      .map(decodeProfile)
      .reverse()
      .map((profile) => {
        const saved = JSON.parse(localStorage.getItem(`BINGE_${profile.id}`)) || []
        const lastMessage = saved.pop()?.content

        return { ...profile, message: lastMessage }
      })
    setData(data)
  }, [])

  return (
    <div className='absolute flex h-full w-full flex-col items-center justify-center rounded-lg'>
      <div className={`flex w-full items-center justify-between p-4 py-2 ${scroll > 16 ? 'mt-4 border-b' : 'mt-4'}   transition-all`}>
        <div className={`m-0 flex w-full justify-between ${scroll > 16 ? '-translate-x-10 scale-75' : ''}   transition-all`}>
          <h1 className='text-center text-2xl font-bold text-slate-900'>Matches</h1>
        </div>
      </div>

      <div className='no-scrollbar flex h-full w-full flex-col overflow-scroll p-2 px-4' onScroll={debounce((e) => setScroll(e.target.scrollTop))}>
        {data.map(({ id, details, images, message }) => (
          <ChatPanel key={id} name={details.name} icon={images[0].image} id={id} message={message} />
        ))}
      </div>
    </div>
  )
}
