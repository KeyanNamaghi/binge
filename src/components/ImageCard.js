import Image from 'next/image'

export const ImageCard = ({ image, caption, heading }) => {
  const hasText = caption || heading
  return (
    <div key={image} className='flex w-full flex-col justify-between rounded-lg bg-white shadow-lg'>
      {heading && <span className='p-4 font-bold'>{heading}</span>}
      {caption && <span className='p-4 text-xs font-bold'>{caption}</span>}
      <Image height={256} width={256} alt={image} src={`/${image}`} className={`rounded-box aspect-square w-full object-cover ${hasText ? 'rounded-b-lg' : 'rounded-lg'} `} priority />
    </div>
  )
}
