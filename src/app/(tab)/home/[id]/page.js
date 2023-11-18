'use client'
import { useEffect, useState } from 'react'
import { BioPanel } from '@/components/BioPanel'
import { ImageCard } from '@/components/ImageCard'
import { PromptCard } from '@/components/PromptCard'

export default function Home({ params }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    const matches = JSON.parse(localStorage.getItem('BINGE_MATCHES'))
    const match = matches[params.id]
    if (match) {
      setData(match)
    }
  }, [params.id])

  if (!data)
    return (
      <div className='no-scrollbar absolute flex h-full w-full flex-col items-center gap-6 overflow-scroll px-3 py-8'>
        <div className='w-full px-4'>
          <h1 className='text-2xl font-bold text-slate-900'>Loading</h1>
          <span className='text-xs text-neutral-900'>&ldquo;Active&rdquo; now</span>
        </div>
      </div>
    )

  const { prompts, details, images } = data
  const [prompt1, prompt2, prompt3] = prompts
  const [image1, image2, image3] = images

  return (
    <div className='no-scrollbar absolute flex h-full w-full flex-col items-center gap-6 overflow-scroll px-3 py-8'>
      <div className='w-full px-4'>
        <h1 className='text-2xl font-bold text-slate-900'>{details.name}</h1>
        <span className='text-xs text-neutral-900'>&ldquo;Active&rdquo; now</span>
      </div>
      <ImageCard {...image1} />
      <PromptCard {...prompt1} />
      <BioPanel {...details} />
      <PromptCard {...prompt2} />
      <ImageCard {...image2} />
      <PromptCard {...prompt3} />
      <ImageCard {...image3} />
    </div>
  )
}
