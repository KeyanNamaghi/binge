import OpenAI from 'openai'
import { kv } from '@vercel/kv'
import { NextResponse } from 'next/server'

export async function GET(_request, context) {
  const { id } = context.params

  if (!id) {
    return new Response(JSON.stringify({ error: 'No id provided' }))
  }

  const conversation = (await kv.get(`messages:${id}`)) || []

  return NextResponse.json({ conversation })
}

export async function POST(req, context) {
  const { id } = context.params
  const savedMessages = (await kv.get(`messages:${id}`)) || []
  console.log({ savedMessages })

  // const openai = new OpenAI({
  //   apiKey: process.env.OPEN_AI_KEY,
  // })

  try {
    const { message } = await req.json()
    if (!message) {
      return NextResponse.json({ error: 'No message provided' }, { status: 400 })
    }

    const messages = [...savedMessages, { role: 'user', content: message }]

    // 🤖 Turn on for AI responses
    // const chatCompletion = await openai.chat.completions.create({
    //   messages,
    //   model: 'gpt-3.5-turbo',
    // })

    // const response = chatCompletion.choices[0].message

    // wait for 1s to simulate AI response
    await new Promise((resolve) => setTimeout(resolve, 1000 * (Math.random() + 1)))

    const response = {
      role: 'assistant',
      content: "I don't know what to say, I'm just a raccoon",
    }

    const conversation = [...messages, response]

    await kv.set(`messages:${id}`, conversation)

    return NextResponse.json({ conversation })
  } catch (e) {
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
