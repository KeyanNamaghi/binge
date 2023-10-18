import Image from 'next/image'

export default function Home() {
  const profiles = [
    { image: 'comfy', name: 'Katriina', profile: 'fill-pastel-pink', tag: 'Felt cute, might delete later' },
    { image: 'lazy', name: 'Pyry', profile: 'fill-pastel-yellow', tag: 'Dating me will look like' },
    { image: 'pose', name: 'Anna-Kaisa', profile: 'fill-pastel-green', tag: 'Me during fashion week' },
    { image: 'say-cheese', name: 'Viljami', profile: 'fill-pastel-brown', tag: '' },
    { image: 'workout', name: 'Oona', profile: 'fill-pastel-purple', tag: 'My quarter-life crisis looks like' },
  ]
  const carousel = profiles.map(({ name, image, profile, tag }, index) => {
    return (
      <div key={image} className='carousel-item flex h-full flex-col justify-between rounded-lg bg-white shadow-lg'>
        <div className='m-4 flex flex-col gap-4 text-left text-xs font-bold'>
          <span className='h-4'>{tag}</span>
          <Image height={256} width={256} alt={image} src={`/${image}.jpeg`} className='rounded-box h-64 rounded-lg' />
        </div>
        <div className={`m-4 flex items-center gap-4 ${profile}`}>
          <Image
            height={50}
            width={50}
            alt={name}
            src={`/profile/${index + 6}.png`}
            className='rounded-box rounded-full'
          />
          <h2>{name}</h2>
        </div>
      </div>
    )
  })

  return (
    <div className='flex h-full w-full flex-col items-center justify-center rounded-lg'>
      <div className='mb-8 mt-4 flex w-full items-center justify-between px-4 pt-4'>
        <h1 className='text-center text-2xl font-bold text-slate-900'>Standouts</h1>
        <button className='rounded-full bg-primary px-4 py-2 font-bold hover:bg-primaryDark hover:text-white'>
          Roses (∞)
        </button>
      </div>
      <p className='mb-8 px-4 text-xs text-slate-900'>
        Outstanding content from those most of your type. Refreshed daily. Okay, not really. But it&apos;s a nice
        thought.
      </p>
      <div className='carousel carousel-center bg-neutral rounded-box mx-4 h-full w-full max-w-md space-x-4 p-4'>
        {carousel}
      </div>
    </div>
  )
}
