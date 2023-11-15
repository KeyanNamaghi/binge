export const PromptCard = ({ prompt, answer }) => {
  return (
    <div className='flex w-full flex-col justify-between rounded-lg bg-white p-4 py-8'>
      <span className='pb-4 text-xs'>{prompt}</span>
      <span className='font-bold'>{answer}</span>
    </div>
  )
}
