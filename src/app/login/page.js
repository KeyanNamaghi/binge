'use client'
import { usernameCookie } from '@/lib/constants'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <form
      className='relative flex h-[100dvh] w-[100vw] flex-col overflow-hidden bg-white text-left md:h-full md:w-full md:rounded-lg'
      onSubmit={(event) => {
        event.preventDefault()
        document.cookie = `${usernameCookie}=${event.target.first_name.value}`
        router.push('/home')
      }}>
      <div className=' mx-8 mt-32'>
        <label htmlFor='first_name' className='mb-6 block text-xl font-bold text-black'>
          What&apos;s your name?
        </label>
        <input type='text' id='first_name' className='mb-6 block w-full border-b-2 border-neutral-500 px-1 py-2 text-base' placeholder='First name (required)' required />
        <input type='text' id='last_name' className='mb-6 block w-full border-b-2 border-neutral-500 px-1 py-2 text-base' placeholder='Last name' disabled />
        <p className='w-full text-xs text-neutral-500'>Last name is unwanted, why give that personal detail to us?</p>
      </div>
      <button className='btn mx-4 mt-4 text-base text-white'>Create Account</button>
    </form>
  )
}
