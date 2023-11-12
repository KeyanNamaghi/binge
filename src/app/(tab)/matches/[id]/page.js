import Link from 'next/link'
import { IconArrowBackOutline } from '@/components/Icons'
import { matches } from '@/data/matches'
import { Chat } from '@/components/Chat'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

const getConversation = async (id) => {
  try {
    const heads = headers()
    const pathname = heads.get('host')
    const protocol = pathname.includes('localhost') ? 'http' : 'https'

    const req = await fetch(`${protocol}://${pathname}/api/chat/${id}`, {
      headers: { cookie: heads.get('cookie') },
    })
    return await req.json()
  } catch (e) {
    console.log(e)
    return { conversation: [], error: e }
  }
}

export default async function Home({ params }) {
  const { conversation, error } = await getConversation(params.id)
  if (error) {
    redirect('/login')
  }
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
