import { NextResponse } from 'next/server'
import { usernameCookie } from '@/lib/constants'
import { templateSystemContent } from '@/data/profile'

export async function POST(request, context) {
  const { id } = context.params
  const user = request.cookies.get(usernameCookie)

  if (!user) {
    return new Response(JSON.stringify({ error: 'No user provided' }, { status: 401 }))
  }

  try {
    const { message, savedMessages = '[]' } = await request.json()
    if (!message) {
      return NextResponse.json({ error: 'No message provided' }, { status: 400 })
    }

    const messages = [...JSON.parse(savedMessages), { role: 'user', content: message }]
    const useAI = true // ['keyan', 'riina'].includes(username)

    let response = {}

    if (useAI) {
      const content = templateSystemContent(id)

      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.GROQ_KEY}`,
        },
        body: JSON.stringify({
          model: 'llama-3.1-70b-versatile',
          messages: [{ role: 'assistant', content }, ...messages],
        }),
      })
      const data = await res.json()
      response = {
        role: 'assistant',
        content: data.choices[0].message.content,
      }
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1000 * (Math.random() + 1)))
      response = {
        role: 'assistant',
        content: "I don't know what to say, I'm just a raccoon",
      }
    }

    const conversation = [...messages, response]

    return NextResponse.json({ conversation })
  } catch (e) {
    console.error('Something went wrong')
    console.error(e)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

export async function DELETE(_request, context) {
  const { id } = context.params

  if (!id) {
    return new Response(JSON.stringify({ error: 'No id provided' }))
  }

  return NextResponse.json({ success: true })
}
