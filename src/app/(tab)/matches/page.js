'use client'
import Image from 'next/image'
import { useState } from 'react'

function debounce(func, timeout = 20) {
  let timer
  return (...args) => {
    if (!timer) {
      func.apply(this, args)
    }
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = undefined
    }, timeout)
  }
}

const ChatPanel = ({ name, message, icon }) => {
  return (
    <div className='flex h-fit w-full items-center justify-center border-t py-4'>
      <Image height={50} width={50} alt={name} src={`/profile/${icon + 1}.png`} className='rounded-box rounded-full' />
      <div className='flex flex-auto flex-col overflow-auto pl-4'>
        <h2 className='font-bold'>{name}</h2>
        <p className='truncate text-xs'>{message}</p>
      </div>
    </div>
  )
}

const heys = [
  ['Hey', 'Seraphina'],
  ['Hola', 'Juan'],
  ['Salut', 'Bérénice'],
  ['Ciao', 'Francesca'],
  ['Hallo', 'Finn'],
  ['Oi', 'Bruno'],
  ['Hoi', 'Eva'],
  ['Hej', 'Max'],
  ['Privet', 'Anastasia'],
  ['Hej', 'Isabella'],
  ['Hei', 'Nikolaj'],
  ['Hei', 'Leilani'],
  ['Cześć', 'Wojciech'],
  ['Buna', 'Andreea'],
  ['Merhaba', 'Aylin'],
  ['Helló', 'Zsófia'],
]

export default function Matches() {
  const [scroll, setScroll] = useState(0)

  return (
    <div className='absolute flex h-full w-full flex-col items-center justify-center rounded-lg'>
      <div
        className={`flex w-full items-center justify-between p-4 py-2 ${
          scroll > 16 ? 'mt-4 border-b' : 'mt-4'
        }   transition-all`}>
        <div
          className={`m-0 flex w-full justify-between ${
            scroll > 16 ? '-translate-x-10 scale-75' : ''
          }   transition-all`}>
          <h1 className='text-center text-2xl font-bold text-slate-900'>Matches</h1>
        </div>
      </div>

      <div
        className='flex h-full w-full flex-col overflow-scroll p-2 px-4'
        onScroll={debounce((e) => setScroll(e.target.scrollTop))}>
        {heys.map(([message, person], index) => (
          <ChatPanel key={person} name={person} message={message} icon={index} />
        ))}
      </div>
    </div>
  )
}
