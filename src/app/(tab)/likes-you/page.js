'use client'
import { ImageCard } from '@/components/ImageCard'
import { buildProfile, decodeProfile } from '@/data/profile'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const profiles = new Array(6).fill(0).map(buildProfile).map(decodeProfile)

    // Yes this is a terrible way to do this, but it's stupid anyway so ¯\_(ツ)_/¯
    const uniqueProfiles = profiles.filter((profile, index) => profiles.findIndex((p) => p.images[0].image === profile.images[0].image) === index)
    setProfiles(uniqueProfiles)
  }, [])

  return (
    <div className='no-scrollbar absolute flex h-full w-full flex-col items-center overflow-scroll px-3 py-4'>
      <div className='mb-8 mt-4 flex w-full items-center justify-between'>
        <h1 className='ml-2 text-center text-2xl font-bold text-slate-900'>Likes You</h1>
        <button className='rounded-full bg-primary px-4 py-2 font-bold hover:bg-primaryDark hover:text-white'>Boost</button>
      </div>

      {profiles.length > 0 && (
        <>
          <Link href={`/likes-you/${profiles[0].id}`} prefetch className='w-full'>
            <ImageCard image={profiles[0].images[0].image} heading={profiles[0].details.name} />
          </Link>

          <div className='flex w-full flex-col px-4 pb-4 pt-8'>
            <p className='text-base font-bold'>Up next</p>
            <p className='text-xs text-slate-900'>Subscribe to see the goofballs who like you</p>
          </div>
          <div className='grid w-full grid-cols-2 gap-2'>
            {profiles.slice(1).map(({ details, images, id }) => (
              <div key={id} className='flex w-full flex-col justify-between rounded-lg bg-white shadow-lg '>
                <span className='p-4 font-bold'>{details.name}</span>
                <Image height={256} width={256} alt={images[0]} src={`/${images[0].image}`} className='rounded-box w-full rounded-b-lg blur-md' />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
