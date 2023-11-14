'use client'
import { debounce } from '@/lib/debounce'
import { matches } from '@/data/matches'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const ChatPanel = ({ name, message, icon, id }) => {
  return (
    <Link href={`matches/${id}`}>
      <div className='flex h-fit w-full items-center justify-center border-t py-4'>
        <Image height={50} width={50} alt={name} src={`/profile/${icon + 1}.png`} className='rounded-box rounded-full' />
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

  return (
    <div className='absolute flex h-full w-full flex-col items-center justify-center rounded-lg'>
      <div className={`flex w-full items-center justify-between p-4 py-2 ${scroll > 16 ? 'mt-4 border-b' : 'mt-4'}   transition-all`}>
        <div className={`m-0 flex w-full justify-between ${scroll > 16 ? '-translate-x-10 scale-75' : ''}   transition-all`}>
          <h1 className='text-center text-2xl font-bold text-slate-900'>Matches</h1>
        </div>
      </div>

      <div className='flex h-full w-full flex-col overflow-scroll p-2 px-4' onScroll={debounce((e) => setScroll(e.target.scrollTop))}>
        {matches.map(({ lastMessage, name, id }, index) => (
          <ChatPanel key={id} name={name} message={lastMessage} icon={index} id={id} />
        ))}
      </div>
    </div>
  )
}
