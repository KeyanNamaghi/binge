import Image from 'next/image'

export const MatchMessage = ({ message, profilePicture }) => {
  return (
    <div className='chat-message my-4 mr-8'>
      <div className='flex items-end'>
        <div className='order-2 mx-2 flex max-w-xs flex-col items-start space-y-2 text-sm'>
          <div>
            <span className='inline-block rounded-lg bg-gray-200 px-4 py-2 text-gray-600'>{message}</span>
          </div>
        </div>
        <Image src={`/profile/${profilePicture}.png`} alt='My profile' className='order-1 h-8 w-8 rounded-full' height={32} width={32} priority />
      </div>
    </div>
  )
}

export const UserMessage = ({ message }) => {
  return (
    <div className='chat-message my-4 ml-12'>
      <div className='flex flex-row-reverse items-end'>
        <div className='order-2 mx-2 flex max-w-xs flex-col items-end space-y-2 text-sm'>
          <div>
            <span className='inline-block rounded-lg bg-primaryDark px-4 py-2 text-white'>{message}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
