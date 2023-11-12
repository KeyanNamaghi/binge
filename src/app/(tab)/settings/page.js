import Link from 'next/link'
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
    <div className='absolute flex h-full w-full flex-col items-center justify-center overflow-scroll rounded-lg px-4 pt-4 '>
      <div className='my-6 flex w-full items-center gap-4'>
        <SettingsIcon height={40} className='shrink-0' />
        <div className='flex flex-col'>
          <h1 className='text-xl font-bold text-slate-900'>Petteri</h1>
          <p className='text-xs'>Binge member</p>
        </div>
      </div>
      <div className='rounded-xl bg-primaryLight p-6 text-center text-sm'>
        <div className='m-auto mb-4 w-fit rounded-full bg-primary p-2'>
          <MicrophoneIcon />
        </div>
        <h2 className='mb-2 font-bold'>Embarrass yourself through voice</h2>
        <p>Add a Voice Prompt and let everyone hear what makes you truly deranged.</p>
        <button className='btn mt-6 w-full text-sm text-white'>Please don&apos;t</button>
      </div>

      <div className='flex h-full w-full flex-col pt-4 text-sm'>
        <div className='flex h-fit w-full items-center justify-between border-t border-neutral-300 py-4'>
          <span>Edit Profile</span>
          <PencilIcon />
        </div>
        <div className='flex h-fit w-full items-center justify-between border-t border-neutral-300 py-4'>
          <span>Preferences</span>
          <SlidersIcon />
        </div>
        <div className='flex h-fit w-full items-center justify-between border-t border-neutral-300 py-4'>
          <span>Settings</span>
          <GearIcon />
        </div>
        {/* <div className='flex items-center w-full h-fit py-4 border-t border-neutral-300 justify-between'>
          <span>What Works</span>
          <LightbulbIcon />
        </div> */}
        <div className='flex h-fit w-full items-center justify-between border-t border-neutral-300 py-4'>
          <span>Help</span>
          <QuestionIcon />
        </div>
        <div className='flex h-fit w-full items-center justify-between border-t border-neutral-300 py-4'>
          <Link href='/login'>
            <span>Log Out</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
