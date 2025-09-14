import { useState, useEffect } from 'react'

interface UseTypewriterOptions {
  text: string
  speed?: number
  delay?: number
}

export function useTypewriter({ text, speed = 50, delay = 0 }: UseTypewriterOptions) {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (!text) return

    setDisplayedText('')
    setIsComplete(false)
    
    const timer = setTimeout(() => {
      setIsTyping(true)
      let index = 0

      const typeInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1))
          index++
        } else {
          setIsTyping(false)
          setIsComplete(true)
          clearInterval(typeInterval)
        }
      }, speed)

      return () => clearInterval(typeInterval)
    }, delay)

    return () => clearTimeout(timer)
  }, [text, speed, delay])

  return { displayedText, isTyping, isComplete }
}