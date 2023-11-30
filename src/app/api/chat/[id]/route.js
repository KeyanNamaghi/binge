import OpenAI from 'openai'
import { kv } from '@vercel/kv'
import { NextResponse } from 'next/server'
import { usernameCookie } from '@/lib/constants'
import { templateSystemContent } from '@/data/profile'

export async function GET(request, context) {
  const { id } = context.params
  const user = request.cookies.get(usernameCookie)

  if (!user) {
    return new Response(JSON.stringify({ error: 'No user provided' }, { status: 401 }))
  }

  if (!id) {
    return new Response(JSON.stringify({ error: 'No id provided' }))
  }

  const username = user.value.toLowerCase() || ''
  const conversation = (await kv.get(`${username}:messages:${id}`)) || []

  return NextResponse.json({ conversation })
}

export async function POST(request, context) {
  const { id } = context.params
  const user = request.cookies.get(usernameCookie)
  console.log(`${user} making post request`)

  if (!user) {
    return new Response(JSON.stringify({ error: 'No user provided' }, { status: 401 }))
  }

  const username = user.value.toLowerCase() || ''
  const savedMessages = (await kv.get(`${username}:messages:${id}`)) || []

  try {
    const { message } = await request.json()
    if (!message) {
      return NextResponse.json({ error: 'No message provided' }, { status: 400 })
    }

    const messages = [...savedMessages, { role: 'user', content: message }]
    const useAI = true // ['keyan', 'riina'].includes(username)

    let response = {}

    if (useAI) {
      const content = templateSystemContent(id)
      const openai = new OpenAI({ apiKey: process.env.OPEN_AI_KEY })
      const chatCompletion = await openai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content,
          },
          ...messages,
        ],
        model: 'gpt-3.5-turbo',
      })
      response = chatCompletion.choices[0].message
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1000 * (Math.random() + 1)))
      response = {
        role: 'assistant',
        content: "I don't know what to say, I'm just a raccoon",
      }
    }

    const conversation = [...messages, response]

    await kv.set(`${username}:messages:${id}`, conversation)

    return NextResponse.json({ conversation })
  } catch (e) {
    console.log(e)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

export async function DELETE(_request, context) {
  const { id } = context.params

  if (!id) {
    return new Response(JSON.stringify({ error: 'No id provided' }))
  }

  await kv.set(`messages:${id}`, [])
  return NextResponse.json({ success: true })
}
