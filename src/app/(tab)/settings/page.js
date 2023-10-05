import {
  GearIcon,
  LightbulbIcon,
  MicrophoneIcon,
  PencilIcon,
  QuestionIcon,
  SettingsIcon,
  SlidersIcon,
} from '@/components/Icons'

export default function Home() {
  return (
    <div className='absolute flex flex-col items-center justify-center w-full h-full rounded-lg px-4 pt-4'>
      <div className='flex gap-4 items-center w-full my-6'>
        <SettingsIcon height={40} className='shrink-0' />
        <div className='flex flex-col'>
          <h1 className='text-xl font-bold text-slate-900'>Petteri</h1>
          <p className='text-xs'>Binge member</p>
        </div>
      </div>
      <div className='text-center p-6 text-sm bg-primaryLight rounded-xl'>
        <div className='rounded-full bg-primary w-fit p-2 m-auto mb-4'>
          <MicrophoneIcon />
        </div>
        <h2 className='font-bold mb-2'>Embarrass yourself through voice</h2>
        <p>Add a Voice Prompt and let everyone hear what makes you truly deranged.</p>
        <button className='btn mt-6 w-full text-white text-sm'>Please don&apos;t</button>
      </div>

      <div className='flex flex-col pt-4 h-full w-full overflow-scroll text-sm'>
        <div className='flex items-center w-full h-fit py-4 border-t border-neutral-300 justify-between'>
          <span>Edit Profile</span>
          <PencilIcon />
        </div>
        <div className='flex items-center w-full h-fit py-4 border-t border-neutral-300 justify-between'>
          <span>Preferences</span>
          <SlidersIcon />
        </div>
        <div className='flex items-center w-full h-fit py-4 border-t border-neutral-300 justify-between'>
          <span>Settings</span>
          <GearIcon />
        </div>
        <div className='flex items-center w-full h-fit py-4 border-t border-neutral-300 justify-between'>
          <span>What Works</span>
          <LightbulbIcon />
        </div>
        <div className='flex items-center w-full h-fit py-4 border-t border-neutral-300 justify-between'>
          <span>Help</span>
          <QuestionIcon />
        </div>
      </div>
    </div>
  )
}
