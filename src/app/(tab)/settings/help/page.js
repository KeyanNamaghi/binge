/* eslint-disable @next/next/no-img-element */
import { IconArrowBackOutline } from '@/components/Icons'
import Link from 'next/link'

export default function Help() {
  return (
    <div className='no-scrollbar absolute flex h-full w-full flex-col items-center gap-6 overflow-scroll px-3 pb-8'>
      <div className='mt-8 w-full px-4 '>
        <Link href='/settings'>
          <div className='flex w-full items-center'>
            <IconArrowBackOutline />
            <h1 className='ml-2 font-bold'>Help</h1>
          </div>
        </Link>
      </div>
      <img
        alt='helpful gif'
        src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2QxaG00NmxlN2Rwc2luZXV1NWY3cHJlODU5ZmV6MjFzNGx3OWFibiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0G16JfAv3SY6iKNq/giphy.gif'
      />
      <div className='relative flex w-full flex-col justify-between rounded-lg bg-white p-4'>
        <span className='p-2 pb-4 font-bold'>Found something broken?</span>
        <span className='p-2 text-xs'>If pressing reset in settings didn&apos;t fix it, just try incognito.</span>
        <span className='p-2 text-xs'>
          Raise an issue on{' '}
          <a target='_blank' href='https://github.com/KeyanNamaghi/binge/issues/new' className='text-primaryDark underline'>
            Github
          </a>{' '}
          if you want a slight chance it will be fixed
        </span>
      </div>
    </div>
  )
}
