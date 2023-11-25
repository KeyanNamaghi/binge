import Link from 'next/link'
import { IconArrowBackOutline } from '@/components/Icons'
import { matches } from '@/data/matches'
import { Chat } from '@/components/Chat'

export default async function Home({ params }) {
  const match = matches.find(({ id }) => id === params.id)
  const name = params.id[1] || 'Unknown'
  const profilePicture = match?.profile || '1'

  return (
    <div className='absolute flex h-full w-full flex-col items-center rounded-lg'>
      <div className='flex h-full w-full flex-col'>
        <div className='mt-4 flex w-full items-center border-b p-4'>
          <Link href='/matches' prefetch={false}>
            <div className='flex w-full items-center'>
              <IconArrowBackOutline />
              <h1 className='ml-2 font-bold'>{name}</h1>
            </div>
          </Link>
        </div>
        <Chat id={params.id[0]} profilePicture={profilePicture} />
      </div>
    </div>
  )
}
