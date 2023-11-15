import { IconCake, IconRuler, IconSuitcase, IconGlobe, IconBookOpen, IconPerson, IconBuilding } from '@/components/Icons'

export const BioPanel = ({ gender, height, age, ethnicity, politics, religion, job }) => {
  return (
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
  )
}
