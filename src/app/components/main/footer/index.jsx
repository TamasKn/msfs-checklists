'use client'

import Image from 'next/image'
import github from '../../../../../public/github_logo.png'

export default function Footer() {
  return (
    <footer className="w-full text-center px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <a
        href="https://github.com/TamasKn/msfs-checklists"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
      >
        <Image src={github} alt="GitHub logo" width={24} height={24} />
      </a>
    </footer>
  )
}
