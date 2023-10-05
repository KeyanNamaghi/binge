import { HomeIcon, LikesYouIcon, MatchesIcon, SettingsIcon, StandoutsIcon } from '@/components/Icons'
import NavigationBarElement from '../../components/NavigationBarElement'

export const metadata = {
  title: 'Binge',
  description: 'Better Hinge',
}

export default function AppLayout({ children }) {
  return (
    <div className='h-full grid grid-cols-1 grid-rows-[1fr_60px]'>
      <div className='relative flex flex-col items-center justify-between w-[100vw] md:w-full overflow-hidden bg-neutral-100 '>
        {children}
      </div>
      <div className='bg-neutral-900 grid grid-cols-5 justify-items-center items-center font-bold text-lg text-white'>
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
