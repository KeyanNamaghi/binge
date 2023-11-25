import { BioPanel } from '@/components/BioPanel'
import { ImageCard } from '@/components/ImageCard'
import { PromptCard } from '@/components/PromptCard'
import { decodeProfile } from '@/data/profile'

export default function Home({ params }) {
  const data = decodeProfile(params.id)

  return (
    <>
      <div className='w-full px-4'>
        <h1 className='mt-8 text-2xl font-bold text-slate-900'>{data?.details?.name}</h1>
        <span className='text-xs text-neutral-900'>&ldquo;Active&rdquo; now</span>
      </div>
      {data && (
        <>
          <ImageCard {...data.images[0]} hasSave />
          <PromptCard {...data.prompts[0]} hasSave />
          <BioPanel {...data.details} hasSave />
          <PromptCard {...data.prompts[1]} hasSave />
          <ImageCard {...data.images[1]} hasSave />
          <PromptCard {...data.prompts[2]} hasSave />
          <ImageCard {...data.images[2]} hasSave />
        </>
      )}
    </>
  )
}
