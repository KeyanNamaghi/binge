import { Save } from '@/components/Save'
import Image from 'next/image'

export const ImageCard = ({ image, caption, heading, hasSave }) => {
  const hasText = caption || heading
  const src = image ? `/${image}` : ''
  return (
    <div className='relative flex w-full flex-col justify-between rounded-lg bg-white shadow-lg'>
      {heading && <span className='p-4 font-bold'>{heading}</span>}
      {caption && <span className='p-4 text-xs font-bold'>{caption}</span>}
      <Image height={256} width={256} alt={image || 'cutie'} src={src} className={`rounded-box aspect-square w-full object-cover ${hasText ? 'rounded-b-lg' : 'rounded-lg'} `} priority />
      {hasSave && <Save />}
    </div>
  )
}
