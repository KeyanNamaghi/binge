import { ImageCard } from '@/components/ImageCard'
import { getPictures } from '@/data/pictures'
import { buildProfile, createName, decodeProfile } from '@/data/profile'
import Image from 'next/image'

export default async function Home() {
  const [{ image }] = getPictures(1)
  const name = createName()

  return (
    <div className='no-scrollbar absolute flex h-full w-full flex-col items-center overflow-scroll px-3 py-4'>
      <div className='mb-8 mt-4 flex w-full items-center justify-between'>
        <h1 className='ml-2 text-center text-2xl font-bold text-slate-900'>Likes You</h1>
        <button className='rounded-full bg-primary px-4 py-2 font-bold hover:bg-primaryDark hover:text-white'>Boost</button>
      </div>

      <ImageCard image={image} heading={name} />

      <div className='flex w-full flex-col px-4 pb-4 pt-8'>
        <p className='text-base font-bold'>Up next</p>
        <p className='text-xs text-slate-900'>Subscribe to see the goofballs who like you</p>
      </div>
      <div className='grid w-full grid-cols-2 gap-2'>
        <div className='flex w-full flex-col justify-between rounded-lg bg-white shadow-lg '>
          <span className='p-4 font-bold'>Malcom</span>
          <Image priority height={256} width={256} alt={image} src={`/say-cheese.jpeg`} className='rounded-box w-full rounded-b-lg blur-md' />
        </div>
        <div className='flex w-full flex-col justify-between rounded-lg bg-white shadow-lg '>
          <span className='p-4 font-bold'>Francis</span>
          <Image priority height={256} width={256} alt={image} src={`/lazy.jpeg`} className='rounded-box w-full rounded-b-lg blur-md' />
        </div>
      </div>
    </div>
  )
}
