import { HomeIcon, LikesYouIcon, MatchesIcon, SettingsIcon, StandoutsIcon } from '@/components/Icons'
import NavigationBarElement from '../../components/NavigationBarElement'

export const metadata = {
  title: 'Binge',
  description: 'Better Hinge',
}

export default function AppLayout({ children }) {
  return (
    <div className='grid h-full grid-cols-1 grid-rows-[1fr_60px] bg-neutral-900'>
      <div className='relative flex w-[100vw] flex-col items-center justify-between overflow-hidden bg-neutral-100 md:w-full '>{children}</div>
      <div className='grid grid-cols-5 items-center justify-items-center bg-neutral-900 text-lg font-bold text-white'>
        <NavigationBarElement tab='home'>
          <HomeIcon />
        </NavigationBarElement>
        <NavigationBarElement tab='standouts'>
          <StandoutsIcon />
        </NavigationBarElement>
        <NavigationBarElement tab='likes-you'>
          <LikesYouIcon />
        </NavigationBarElement>
        <NavigationBarElement tab='matches'>
          <MatchesIcon />
        </NavigationBarElement>
        <NavigationBarElement tab='settings'>
          <SettingsIcon />
        </NavigationBarElement>
      </div>
    </div>
  )
}
