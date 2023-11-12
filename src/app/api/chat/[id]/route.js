import OpenAI from 'openai'
import { kv } from '@vercel/kv'
import { NextResponse } from 'next/server'
import { usernameCookie } from '@/lib/constants'

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
    const useAI = ['keyan', 'riina'].includes(username)

    let response = {}

    if (useAI) {
      const openai = new OpenAI({ apiKey: process.env.OPEN_AI_KEY })
      const chatCompletion = await openai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content:
              'You are a raccoon pretending to be a human using a dating app called "Binge" so you should ask questions and not act like an assistant. Keep your replies fairly short and never more than 2 sentences. You are flirty but reserved with a charming playful and inquisitive nature. Your main interests include climbing, urban foraging and eating out. Do not ever say you are an ai chatbot and instead say that you are just a raccoon if you can not respond to something',
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
