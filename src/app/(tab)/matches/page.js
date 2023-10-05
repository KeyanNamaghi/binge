import { SettingsIcon } from '@/components/Icons'

const ChatPanel = ({ name, message, icon }) => {
  return (
    <div className='flex items-center justify-center w-full h-fit py-4 border-t'>
      <SettingsIcon height={50} className={`shrink-0 ${icon}`} />
      <div className='flex flex-col flex-auto pl-4 overflow-auto'>
        <h2 className='font-bold'>{name}</h2>
        <p className='text-xs truncate'>{message}</p>
      </div>
    </div>
  )
}

const heys = [
  ['Hey', 'Seraphina', 'fill-pastel-pink'],
  ['Hola', 'Juan', 'fill-pastel-blue'],
  ['Salut', 'Bérénice', 'fill-pastel-green'],
  ['Ciao', 'Francesca', 'fill-pastel-orange'],
  ['Hallo', 'Finn', 'fill-pastel-yellow'],
  ['Oi', 'Bruno', 'fill-pastel-purple'],
  ['Hoi', 'Eva', 'fill-pastel-brown'],
  ['Hej', 'Max', 'fill-pastel-green'],
  ['Privet', 'Anastasia', 'fill-pastel-orange'],
  ['Hej', 'Isabella', 'fill-pastel-blue'],
  ['Hei', 'Nikolaj', 'fill-pastel-yellow'],
  ['Hei', 'Leilani', 'fill-pastel-pink'],
  ['Cześć', 'Wojciech', 'fill-pastel-purple'],
  ['Buna', 'Andreea', 'fill-pastel-yellow'],
  ['Merhaba', 'Aylin', 'fill-pastel-green'],
  ['Helló', 'Zsófia', 'fill-pastel-pink'],
  ['Ahoj', 'Václav', 'fill-pastel-blue'],
  ['Yia sas', 'Konstantinos', 'fill-pastel-brown'],
  ['Zdravo', 'Svetlana', 'fill-pastel-orange'],
  ['Bok', 'Stjepan', 'fill-pastel-purple'],
]

export default function Matches() {
  return (
    <div className='absolute flex flex-col items-center justify-center w-full h-full rounded-lg px-4 pt-4'>
      <div className='flex items-center justify-between w-full mt-4 mb-4'>
        <h1 className='text-2xl font-bold text-center text-slate-900'>Matches</h1>
      </div>
      <div className='flex flex-col p-4 h-full w-full overflow-scroll'>
        {/* <ChatPanel name='Eleonoora' message="I may have sticky paws, but I promise I won't steal your heart..." />
        <ChatPanel name='Annikki' message="Let's forage for love together in this urban jungle" />
        <ChatPanel name='Syrjä' message='Looking for a partner in crime to raid trash cans with me' /> */}
        {heys.map(([message, person, icon]) => (
          <ChatPanel key={person} name={person} message={message} icon={icon} />
        ))}
      </div>
    </div>
  )
}
