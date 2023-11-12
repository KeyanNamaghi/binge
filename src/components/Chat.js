'use client'
import Image from 'next/image'
import { useState } from 'react'

const MatchMessage = ({ message, profilePicture }) => {
  return (
    <div className='chat-message my-4 mr-8'>
      <div className='flex items-end'>
        <div className='order-2 mx-2 flex max-w-xs flex-col items-start space-y-2 text-sm'>
          <div>
            <span className='inline-block rounded-lg bg-gray-200 px-4 py-2 text-gray-600'>{message}</span>
          </div>
        </div>
        <Image
          src={`/profile/${profilePicture}.png`}
          alt='My profile'
          className='order-1 h-8 w-8 rounded-full'
          height={32}
          width={32}
          priority
        />
      </div>
    </div>
  )
}

const UserMessage = ({ message }) => {
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

const sendMessage = async (message, id) => {
  try {
    const res = await fetch(`/api/chat/${id}`, {
      method: 'POST',
      body: JSON.stringify({ message }),
    })
    const { conversation } = await res.json()
    return conversation
  } catch (error) {
    console.error(error)
  }
}

export const Chat = ({ conversation, id, profilePicture }) => {
  const [pendingMessage, setPendingMessage] = useState(null)
  const [replyPending, setReplyPending] = useState(false)
  const [chat, setChat] = useState(conversation)

  const onSubmit = async (e) => {
    e.preventDefault()
    setPendingMessage(e.target[0].value)
    const message = e.target[0].value
    e.target[0].value = ''

    const replyPendingPromise = new Promise((resolve) => {
      setTimeout(() => {
        setReplyPending(true)
        resolve()
      }, 500)
    })

    const postMessagePromise = new Promise(async (resolve) => {
      setChat(await sendMessage(message, id))
      resolve()
    })

    await Promise.all([replyPendingPromise, postMessagePromise])

    setPendingMessage(null)
    setReplyPending(false)
  }

  return (
    <>
      <div className='flex flex-auto flex-col-reverse overflow-auto px-2'>
        <div>
          {chat.map(({ role, content }, index) => {
            const key = `${index}:${content}`
            return role === 'user' ? (
              <UserMessage key={key} message={content} />
            ) : (
              <MatchMessage key={key} message={content} profilePicture={profilePicture} />
            )
          })}
          {pendingMessage && <UserMessage message={pendingMessage} />}
          {replyPending && <MatchMessage message='...' profilePicture={profilePicture} />}
        </div>
      </div>
      <form className='flex w-full p-2' onSubmit={onSubmit}>
        <input
          className='w-full rounded-full border border-neutral-300 px-4 py-1'
          disabled={pendingMessage}
          placeholder='Send a message'
        />
      </form>
    </>
  )
}
