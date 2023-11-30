'use client'
import Link from 'next/link'
import Image from 'next/image'
import { GearIcon, MicrophoneIcon, PencilIcon, QuestionIcon, SlidersIcon } from '@/components/Icons'
import { MATCHES_STORAGE_KEY } from '@/lib/constants'

export default function Home() {
  return (
    <div className='absolute flex h-full w-full flex-col items-center justify-center overflow-scroll rounded-lg px-4 pt-4 '>
      <a href='https://www.keyan.dev/me' target='_blank' className='my-6 flex w-full items-center gap-4'>
        <Image src='/me.png' alt='My profile' className='h-12 w-12 rounded-full' height={32} width={32} priority />
        <div className='flex flex-col'>
          <h1 className='text-xl font-bold text-slate-900'>Keyan</h1>
          <p className='text-xs'>Binge creator</p>
        </div>
      </a>
      <div className='rounded-xl bg-primaryLight p-6 text-center text-sm'>
        <div className='m-auto mb-4 w-fit rounded-full bg-primary p-2'>
          <MicrophoneIcon />
        </div>
        <h2 className='mb-2 font-bold'>Embarrass yourself through voice</h2>
        <p>Add a Voice Prompt and let everyone hear what makes you truly deranged.</p>
        <button className='btn mt-6 w-full text-sm text-white'>Please don&apos;t</button>
      </div>

      <div className='flex h-full w-full flex-col pt-4 text-sm'>
        <a href='https://github.com/KeyanNamaghi/binge' target='_blank' className='flex h-fit w-full items-center justify-between border-t border-neutral-300 py-4'>
          <span>Github</span>
          <PencilIcon />
        </a>
        <Link href='/settings/preferences' className='flex h-fit w-full items-center justify-between border-t border-neutral-300 py-4'>
          <span>Preferences</span>
          <SlidersIcon />
        </Link>
        <button
          onClick={() => {
            localStorage.removeItem(MATCHES_STORAGE_KEY)
            alert("Sorry I know this is annoying but I don't have time to make a proper reset button 😅")
          }}
          className='flex h-fit w-full items-center justify-between border-t border-neutral-300 py-4'>
          <span>Reset</span>
          <GearIcon />
        </button>
        {/* <div className='flex items-center w-full h-fit py-4 border-t border-neutral-300 justify-between'>
          <span>What Works</span>
          <LightbulbIcon />
        </div> */}
        <Link href='/settings/help' className='flex h-fit w-full items-center justify-between border-t border-neutral-300 py-4'>
          <span>Help</span>
          <QuestionIcon />
        </Link>
        <div className='flex h-fit w-full items-center justify-between border-t border-neutral-300 py-4'>
          <Link href='/login'>
            <span>Log Out</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
