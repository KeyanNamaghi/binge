import { BioPanel } from '@/components/BioPanel'
import { IconArrowBackOutline } from '@/components/Icons'
import { ImageCard } from '@/components/ImageCard'
import { PromptCard } from '@/components/PromptCard'
import { decodeProfile } from '@/data/profile'
import Link from 'next/link'

export default function Home({ params }) {
  const data = decodeProfile(params.id)

  return (
    <div className='no-scrollbar absolute flex h-full w-full flex-col items-center gap-6 overflow-scroll px-3 pb-8' id='home-page'>
      <div className='mt-8 w-full px-4 '>
        <Link href='/standouts'>
          <div className='flex w-full items-center'>
            <IconArrowBackOutline />
            <h1 className='ml-2 font-bold'>{data?.details?.name}</h1>
          </div>
        </Link>
      </div>
      {data && (
        <>
          <ImageCard {...data.images[0]} />
          <PromptCard {...data.prompts[0]} />
          <BioPanel {...data.details} />
          <PromptCard {...data.prompts[1]} />
          <ImageCard {...data.images[1]} />
          <PromptCard {...data.prompts[2]} />
          <ImageCard {...data.images[2]} />
        </>
      )}
    </div>
  )
}
