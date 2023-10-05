import Image from 'next/image'
import { SettingsIcon } from '@/components/Icons'

export default function Home() {
  const profiles = [
    { image: 'comfy', name: 'Katriina', profile: 'fill-pastel-pink', tag: 'Felt cute, might delete later' },
    { image: 'lazy', name: 'Pyry', profile: 'fill-pastel-yellow', tag: 'Dating me will look like' },
    { image: 'pose', name: 'Anna-Kaisa', profile: 'fill-pastel-green', tag: 'Me during fashion week' },
    { image: 'say-cheese', name: 'Viljami', profile: 'fill-pastel-brown', tag: '' },
    { image: 'workout', name: 'Oona', profile: 'fill-pastel-purple', tag: 'My quarter-life crisis looks like' },
  ]
  const carousel = profiles.map(({ name, image, profile, tag }) => {
    return (
      <div key={image} className='carousel-item bg-white shadow-lg rounded-lg h-full flex flex-col justify-between'>
        <div className='flex flex-col m-4 text-xs text-left font-bold gap-4'>
          <span className='h-4'>{tag}</span>
          <Image height={256} width={256} alt={image} src={`/${image}.jpeg`} className='rounded-box rounded-lg h-64' />
        </div>
        <div className={`flex m-4 gap-4 items-center ${profile}`}>
          <SettingsIcon height={50} />
          <h2>{name}</h2>
        </div>
      </div>
    )
  })

  return (
    <div className='flex flex-col items-center justify-center w-full h-full rounded-lg p-4'>
      <div className='flex items-center justify-between w-full mt-4 mb-8'>
        <h1 className='text-2xl font-bold text-center text-slate-900'>Standouts</h1>
        <button className='py-2 px-4 rounded-full bg-hingeLightPurple hover:bg-hingePurple hover:text-white font-bold'>
          Roses (∞)
        </button>
      </div>
      <p className='text-slate-900 text-xs mb-8'>
        Outstanding content from those most of your type. Refreshed daily. Okay, not really. But it&apos;s a nice
        thought.
      </p>
      <div className='carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box h-full w-full'>
        {carousel}
      </div>
    </div>
  )
}
