import { IconArrowBackOutline } from '@/components/Icons'
import { ImageCard } from '@/components/ImageCard'
import Link from 'next/link'

export default function Preferences() {
  return (
    <div className='no-scrollbar absolute flex h-full w-full flex-col items-center gap-6 overflow-scroll px-3 pb-8'>
      <div className='mt-8 w-full px-4 '>
        <Link href='/settings'>
          <div className='flex w-full items-center'>
            <IconArrowBackOutline />
            <h1 className='ml-2 font-bold'>Preferences</h1>
          </div>
        </Link>
      </div>
      <ImageCard image={'confused.webp'} caption='Binge is perfect, why would you want to change anything?' />
    </div>
  )
}
