import { IconArrowBackOutline } from '@/components/Icons'

export default function Home() {
  return (
    <div className='absolute flex h-full w-full flex-col items-center rounded-lg'>
      <div className='flex h-full w-full flex-col'>
        <div className='mt-4 flex w-full items-center border-b p-4'>
          <div className='flex w-full items-center'>
            <IconArrowBackOutline />
            <h1 className='ml-2 h-6 font-bold'></h1>
          </div>
        </div>
      </div>
      <div className='flex flex-auto flex-col-reverse overflow-auto px-2'></div>
      <div className='flex w-full p-2'>
        <input className='w-full rounded-full border border-neutral-300 px-4 py-1' placeholder='Send a message' disabled />
      </div>
    </div>
  )
}
