'use client'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function NavigationBarElement({ children, tab }) {
  const segment = useSelectedLayoutSegment()

  const className = segment === tab ? 'stroke-white fill-white' : 'stroke-neutral-500 fill-neutral-500'

  return (
    <Link href={`/${tab}`}>
      <div className={className}>{children}</div>
    </Link>
  )
}
