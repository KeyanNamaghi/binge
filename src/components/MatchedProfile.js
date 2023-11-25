import { BioPanel } from '@/components/BioPanel'
import { ImageCard } from '@/components/ImageCard'
import { PromptCard } from '@/components/PromptCard'
import { decodeProfile } from '@/data/profile'

export default function MatchedProfile({ id }) {
  const data = decodeProfile(id)
  const { prompts, details, images } = data ?? {}
  const [prompt1, prompt2, prompt3] = prompts ?? []
  const [image1, image2, image3] = images ?? []

  return (
    <div className='scroll-snap-align relative flex flex-auto flex-col-reverse overflow-y-auto whitespace-normal'>
      <div className='no-scrollbar absolute flex h-full w-full flex-col items-center gap-6 overflow-scroll px-3 pb-4'>
        <ImageCard {...image1} />
        <PromptCard {...prompt1} />
        <BioPanel {...details} />
        <PromptCard {...prompt2} />
        <ImageCard {...image2} />
        <PromptCard {...prompt3} />
        <ImageCard {...image3} />
      </div>
    </div>
  )
}
