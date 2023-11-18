import { Save } from '@/components/Save'

export const PromptCard = ({ prompt, answer, hasSave }) => {
  return (
    <div className='relative flex w-full flex-col justify-between rounded-lg bg-white p-4 py-12'>
      <span className='pb-4 text-xs'>{prompt}</span>
      <span className='font-bold'>{answer}</span>
      {hasSave && <Save />}
    </div>
  )
}
