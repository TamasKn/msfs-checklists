'use client'

import Link from 'next/link'

export default function ButtonLarge({ link, title, subtitle }) {
  return (
    <Link href={link}>
      <div className="w-full sm:w-64 h-[10rem] min-w-2 bg-gray-900 rounded-lg p-4 flex flex-col justify-center items-center hover:bg-gray-800 transition-colors cursor-pointer text-center">
        <div className="text-2xl font-semibold">{title}</div>
        <div className="text-base text-neutral-400">{subtitle}</div>
      </div>
    </Link>
  )
}
