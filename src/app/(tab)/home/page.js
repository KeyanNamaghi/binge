import {
  IconCake,
  IconRuler,
  IconSuitcase,
  IconGlobe,
  IconBookOpen,
  IconPerson,
  IconBuilding,
} from '@/components/Icons'
import { ImageCard } from '@/components/ImageCard'
import { buildRandomDetails } from '@/data/profile'

export default function Home() {
  const { gender, name, height, age, ethnicity, politics, religion, job } = buildRandomDetails()
  return (
    <div className='no-scrollbar absolute flex h-full w-full flex-col items-center gap-6 overflow-scroll px-3 py-8'>
      <div className='w-full px-4'>
        <h1 className='text-2xl font-bold text-slate-900'>{name}</h1>
        <span className='text-xs text-neutral-900'>&ldquo;Active&rdquo; now</span>
      </div>

      <ImageCard image='blep' />

      <div className='w-full rounded-lg bg-white px-4 pb-0 pt-2 text-xs'>
        <ul className='no-scrollbar flex gap-4 overflow-y-scroll whitespace-nowrap px-1'>
          <li className='flex items-center gap-4 border-r border-neutral-200 pr-4'>
            <IconCake height='24' width='24' className='my-2' />
            {age}
          </li>
          <li className='flex items-center gap-2 border-r border-neutral-200 pr-4'>
            <IconPerson height='24' width='24' className='my-2' />
            {gender}
          </li>
          <li className='flex items-center gap-2 border-r border-neutral-200 pr-4'>
            <IconRuler height='24' width='24' className='my-2' />
            {height}
          </li>
          <li className='flex items-center gap-2 pr-4'>
            <IconGlobe height='24' width='24' className='my-2' />
            {ethnicity}
          </li>
        </ul>
        <ul className='flex w-full flex-col p-1'>
          <li className='flex items-center gap-4 border-t border-neutral-200 py-4'>
            <IconSuitcase height='24' width='24' />
            {job}
          </li>
          <li className='flex items-center gap-4 border-t border-neutral-200 py-4'>
            <IconBookOpen height='24' width='24' />
            {religion}
          </li>
          <li className='flex items-center gap-4 border-t border-neutral-200 py-4'>
            <IconBuilding height='24' width='24' />
            {politics}
          </li>
        </ul>
      </div>

      <ImageCard image='comfy' caption={'Felt cute, might delete later'} />
    </div>
  )
}
