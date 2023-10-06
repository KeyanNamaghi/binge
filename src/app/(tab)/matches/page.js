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
    <div className='flex items-center justify-center w-full h-fit py-4 border-t'>
      <Image height={50} width={50} alt={name} src={`/profile/${icon + 1}.png`} className='rounded-box rounded-full' />
      <div className='flex flex-col flex-auto pl-4 overflow-auto'>
        <h2 className='font-bold'>{name}</h2>
        <p className='text-xs truncate'>{message}</p>
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
  // useEffect(() => {}, [])
  const [scroll, setScroll] = useState(0)

  return (
    <div className='absolute flex flex-col items-center justify-center w-full h-full rounded-lg'>
      <div
        className={`flex items-center justify-between w-full p-4 py-2 ${
          scroll > 16 ? 'border-b mt-4' : 'mt-4'
        }   transition-all`}>
        <div
          className={`flex justify-between w-full m-0 ${
            scroll > 16 ? 'scale-75 -translate-x-10' : ''
          }   transition-all`}>
          <h1 className='text-2xl font-bold text-center text-slate-900'>Matches</h1>
        </div>
      </div>

      <div
        className='flex flex-col p-2 h-full w-full overflow-scroll px-4'
        onScroll={debounce((e) => setScroll(e.target.scrollTop))}>
        {heys.map(([message, person], index) => (
          <ChatPanel key={person} name={person} message={message} icon={index} />
        ))}
      </div>
    </div>
  )
}
