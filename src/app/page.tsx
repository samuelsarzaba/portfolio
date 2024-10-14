"use client"

import Link from 'next/link'
import { LucideMail, LucideLinkedin } from 'lucide-react'
import { useState, useEffect } from 'react'

function formatDateTime() {
  const now = new Date()
  const options: Intl.DateTimeFormatOptions = { 
    timeZone: 'America/New_York',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }
  const [date, time] = now.toLocaleString('en-US', options).split(', ')
  const [timeWithoutAmPm, amPm] = time.split(' ')
  return `${date}, ${timeWithoutAmPm}${amPm.toLowerCase()} VA`
}

function TypingEffect({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let index = 0
    const intervalId = setInterval(() => {
      setDisplayText((prev) => {
        if (index < text.length) {
          index++
          return text.slice(0, index)
        }
        clearInterval(intervalId)
        return prev
      })
    }, 100) // Adjust typing speed here (milliseconds)

    return () => clearInterval(intervalId)
  }, [text])

  return (
    <div className="bg-white text-black text-2xl font-bold py-1 px-3 inline-block mb-4">
      {displayText}
    </div>
  )
}

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
      <div className="w-full flex flex-col items-center" style={{ maxWidth: '250px' }}>
        <TypingEffect text="samuel sarzaba" />
        <div className="mb-12 text-sm">
          {formatDateTime()}
        </div>
        <nav className="space-y-2 text-sm mb-6 w-full">
          <div><Link href="/projects">projects</Link></div>
          <div><Link href="/skills">skills</Link></div>
          <div><Link href="/experience">experience</Link></div>
          <div><Link href="/education">education</Link></div>
          <div><Link href="/about">about</Link></div>
          <div><a href="/Samuel Sarzaba Resume.pdf" download>resume</a></div>
        </nav>
        <div className="flex space-x-4">
          <Link href="mailto:samuelsarzaba@gmail.com"><LucideMail className="w-5 h-5" /></Link>
          <Link href="https://www.linkedin.com/in/samuel-sarzaba/"><LucideLinkedin className="w-5 h-5" /></Link>
        </div>
      </div>
    </div>
  )
}
