import Link from 'next/link'
import { IconArrowBackOutline } from '@/components/Icons'
import { matches } from '@/data/matches'
import { Chat } from '@/components/Chat'
import { headers } from 'next/headers'

const getConversation = async (id) => {
  try {
    const heads = headers()
    const pathname = heads.get('host')
    const protocol = pathname.includes('localhost') ? 'http' : 'https'

    console.log({ pathname, protocol })
    const req = await fetch(`${protocol}://${pathname}/api/chat/${id}`)
    return await req.json()
  } catch (e) {
    console.log(e)
    return []
  }
}

export default async function Home({ params }) {
  const { conversation } = await getConversation(params.id)
  const match = matches.find(({ id }) => id === params.id)
  const name = match?.name || 'Unknown'
  const profilePicture = match?.profile || '1'

  return (
    <div className='absolute flex h-full w-full flex-col items-center rounded-lg'>
      <div className='flex h-full w-full flex-col'>
        <div className='mt-4 flex w-full items-center border-b p-4'>
          <Link href='/matches' className=''>
            <div className='flex w-full items-center'>
              <IconArrowBackOutline />
              <h1 className='ml-2 font-bold'>{name}</h1>
            </div>
          </Link>
        </div>
        <Chat conversation={conversation} id={params.id} profilePicture={profilePicture} />
      </div>
    </div>
  )
}
