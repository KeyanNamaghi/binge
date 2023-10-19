import { IconArrowBackOutline } from '@/components/Icons'
import { matches } from '@/data/matches'
import Link from 'next/link'

const Message = ({ messages, index }) => {
  return (
    <div className='chat-message mb-4 mr-8'>
      <div className='flex items-end'>
        <div className='order-2 mx-2 flex max-w-xs flex-col items-start space-y-2 text-sm'>
          <div>
            <span className='inline-block rounded-lg bg-gray-200 px-4 py-2 text-gray-600'>{messages}</span>
          </div>
          {/* <div>
            <span className='inline-block rounded-lg bg-gray-200 px-4 py-2 text-gray-600'>
              I also have this issue, Here is what I was doing until now: #1076
            </span>
          </div>
          <div>
            <span className='inline-block rounded-lg rounded-bl-none bg-gray-200 px-4 py-2 text-gray-600'>
              even i am facing
            </span>
          </div> */}
        </div>
        <img
          src={`/profile/${index + 1}.png`}
          //   src='https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144'
          alt='My profile'
          className='order-1 h-8 w-8 rounded-full'
        />
      </div>
    </div>
  )
}

const Reply = () => {
  return (
    <div className='chat-message mb-4 ml-12'>
      <div className='flex flex-row-reverse items-end'>
        <div className='order-2 mx-2 flex max-w-xs flex-col items-end space-y-2 text-sm'>
          <div>
            <span className='inline-block rounded-lg bg-primaryDark px-4 py-2 text-white'>
              Hey there! If you were a snack, you&apos;d be the shiniest in the pantry. What&apos;s the most adventurous
              thing you&apos;ve ever stolen from a trash can?
            </span>
          </div>
          {/* <div>
            <span className='inline-block rounded-lg bg-primaryDark px-4 py-2 text-white'>
              I also have this issue, Here is what I was doing until now: #1076
            </span>
          </div>
          <div>
            <span className='inline-block rounded-lg rounded-bl-none bg-primaryDark px-4 py-2 text-white'>
              even i am facing
            </span>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default function Home({ params }) {
  const index = matches.findIndex(({ id }) => id === params.id)
  const { name, lastMessage } = matches.find(({ id }) => id === params.id)
  const messages = [lastMessage]

  return (
    <div className='absolute flex h-full w-full flex-col items-center rounded-lg'>
      <div className='my-4 flex w-full items-center border-b p-4'>
        <Link href='/matches' className=''>
          <div className='flex w-full items-center'>
            <IconArrowBackOutline />
            <h1 className='ml-2 font-bold'>{name}</h1>
          </div>
        </Link>
      </div>
      <div className='px-2'>
        <Message messages={messages} index={index} />
        <Reply />
      </div>
    </div>
  )
}
