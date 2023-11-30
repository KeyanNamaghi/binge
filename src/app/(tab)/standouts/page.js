'use client'
import { decodeProfile, buildProfile } from '@/data/profile'
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

  const standouts = profiles.map(({ details, images, id }) => {
    return {
      image: images[0].image,
      name: details.name,
      tag: images[0].caption,
      id,
    }
  })

  const carousel = standouts.map(({ name, image, tag, id }, index) => {
    return (
      <Link key={id} href={`/standouts/${id}`} prefetch className='carousel-item flex h-full flex-col justify-between rounded-lg bg-white shadow-lg'>
        <div className='m-4 flex flex-col gap-4 text-left text-xs font-bold'>
          <span className='h-4'>{tag}</span>
          <Image height={256} width={256} alt={image} src={`/${image}`} className='rounded-box h-64 rounded-lg' />
        </div>
        <div className={`m-4 flex items-center gap-4`}>
          <Image height={50} width={50} alt={name} src={`/profile/${index + 6}.png`} className='rounded-box rounded-full' />
          <h2>{name}</h2>
        </div>
      </Link>
    )
  })

  return (
    <div className='flex h-full w-full flex-col items-center justify-center rounded-lg'>
      <div className='mb-8 mt-4 flex w-full items-center justify-between px-4 pt-4'>
        <h1 className='text-center text-2xl font-bold text-slate-900'>Standouts</h1>
        <button className='rounded-full bg-primary px-4 py-2 font-bold hover:bg-primaryDark hover:text-white'>Roses (∞)</button>
      </div>
      <p className='mb-8 px-4 text-xs text-slate-900'>Outstanding content from those most of your type. Refreshed daily. Sorry that the roses are pointless.</p>
      <div className='no-scrollbar carousel carousel-center bg-neutral rounded-box mx-4 h-full w-full max-w-md space-x-4 p-4'>{carousel}</div>
    </div>
  )
}
