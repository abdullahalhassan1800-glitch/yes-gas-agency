import { useEffect, useState } from 'react'

const PHRASES = [
  'We Fix It Today.',
  'Same Day Service.',
  '30-Day Warranty.',
  '24/7 Emergency Repair.',
]

const TYPE_SPEED = 80
const DELETE_SPEED = 40
const PAUSE_AFTER_TYPE = 1800
const PAUSE_AFTER_DELETE = 300

export default function Typewriter() {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = PHRASES[phraseIndex]
    let timer

    if (!deleting && text === current) {
      timer = setTimeout(() => setDeleting(true), PAUSE_AFTER_TYPE)
    } else if (deleting && text === '') {
      timer = setTimeout(() => {
        setDeleting(false)
        setPhraseIndex((i) => (i + 1) % PHRASES.length)
      }, PAUSE_AFTER_DELETE)
    } else {
      timer = setTimeout(
        () => {
          setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1))
        },
        deleting ? DELETE_SPEED : TYPE_SPEED
      )
    }

    return () => clearTimeout(timer)
  }, [text, deleting, phraseIndex])

  return (
    <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
      {text}
      <span className="inline-block w-[3px] h-[0.9em] ml-1 bg-gold animate-pulse align-middle rounded-full" />
    </span>
  )
}
