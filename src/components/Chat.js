'use client'
import { useEffect, useState } from 'react'
import MatchedProfile from './MatchedProfile'
import { MatchMessage, UserMessage } from './Messages'
import { redirect } from 'next/navigation'
import { debounce } from '@/lib/debounce'

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

const getConversation = async (id) => {
  try {
    const req = await fetch(`/api/chat/${id}`)
    return await req.json()
  } catch (e) {
    console.log(e)
    redirect('/login')
  }
}

export const Chat = ({ id, profilePicture }) => {
  const [pendingMessage, setPendingMessage] = useState(null)
  const [replyPending, setReplyPending] = useState(false)
  const [chat, setChat] = useState([])
  const [viewingProfile, setViewingProfile] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const res = await getConversation(id)
      setChat(res.conversation)
    }
    fetchData()
  }, [id])

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

  const handleScroll = (e) => {
    const { scrollLeft, scrollWidth } = e.target
    setViewingProfile(scrollLeft > scrollWidth / 4)
  }

  return (
    <>
      <div className='flex justify-around p-3'>
        <h2 className={`text-center text-sm font-bold text-slate-900 ${viewingProfile ? '' : 'underline'}`}>Chat</h2>
        <h2 className={`text-center text-sm font-bold text-slate-900 ${viewingProfile ? 'underline' : ''}`}>Profile</h2>
      </div>
      <div className='scroll-snap-type no-scrollbar relative flex-auto' onScroll={debounce(handleScroll, 17)}>
        <div className='scroll-snap-align flex flex-auto flex-col-reverse overflow-y-auto whitespace-normal px-2'>
          {chat?.map(({ role, content }, index) => {
            const key = `${index}:${content}`
            const Message = role === 'user' ? UserMessage : MatchMessage
            return <Message key={key} message={content} profilePicture={profilePicture} />
          })}
          {pendingMessage && <UserMessage message={pendingMessage} />}
          {replyPending && <MatchMessage message='...' profilePicture={profilePicture} />}
          {chat?.length === 0 && (
            <div className='flex h-full items-end justify-center'>
              <div className='mx-2 my-4 rounded-lg border border-neutral-300 px-8 py-4 text-center text-sm text-slate-900'>
                Start the conversation by responding to one of the prompts on their profile.
              </div>
            </div>
          )}
        </div>
        <MatchedProfile id={id} />
      </div>
      <form className='flex w-full p-2' onSubmit={onSubmit}>
        <input className='w-full rounded-full border border-neutral-300 px-4 py-1' disabled={pendingMessage} placeholder='Send a message' />
      </form>
    </>
  )
}
