import OpenAI from 'openai'

export async function GET() {
  const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY,
  })

  const messages = [
    { role: 'system', content: 'You are an assistant that speaks like Shakespeare.' },
    { role: 'user', content: 'tell me a joke' },
  ]

  const chatCompletion = await openai.chat.completions.create({
    messages,
    model: 'gpt-3.5-turbo',
  })

  return new Response(JSON.stringify({ answer: chatCompletion.choices }))
}
