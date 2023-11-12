'use client'
import Link from 'next/link'
import { usernameCookie } from '@/lib/constants'

export default function Home() {
  return (
    <div className='relative flex h-[100dvh] w-[100vw] flex-col overflow-hidden bg-white text-left md:h-full md:w-full md:rounded-lg'>
      <div className=' mx-8 mt-32'>
        <label htmlFor='first_name' className='mb-6 block text-xl font-bold text-black'>
          What&apos;s your name?
        </label>
        <input
          type='text'
          id='first_name'
          className='mb-6 block w-full border-b-2 border-neutral-500 px-1 py-2 text-base'
          placeholder='First name (required)'
          onChange={(e) => {
            document.cookie = `${usernameCookie}=${e.target.value}`
          }}
          required
        />
        <input
          type='text'
          id='last_name'
          className='mb-6 block w-full border-b-2 border-neutral-500 px-1 py-2 text-base'
          placeholder='Last name'
          disabled
        />
        <p className='w-full text-xs text-neutral-500'>Last name is unwanted, why give that personal detail to us?</p>
      </div>
      <Link className='btn mx-4 mt-4 text-base text-white' href='/standouts'>
        Create Account
      </Link>
    </div>
  )
}
