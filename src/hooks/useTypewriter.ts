import { useState, useEffect, useRef } from 'react'

export function useTypewriter(text: string, speed: number = 38, startDelay: number = 600) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const indexRef = useRef(0)

  useEffect(() => {
    indexRef.current = 0
    setDisplayed('')
    setDone(false)

    let intervalId: ReturnType<typeof setInterval> | null = null

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        indexRef.current++
        setDisplayed(text.slice(0, indexRef.current))
        if (indexRef.current >= text.length) {
          clearInterval(intervalId!)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeoutId)
      if (intervalId) clearInterval(intervalId)
    }
  }, [text, speed, startDelay])

  return { displayed, done }
}
