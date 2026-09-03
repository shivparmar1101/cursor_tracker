import { useRef, useEffect } from 'react'

const SENSITIVITY = 0.8

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const prevXRef = useRef<number | null>(null)
  const targetTimeRef = useRef(0)
  const seekingRef = useRef(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onDataReady = () => {
      video.pause()
      video.currentTime = 0
    }

    const onSeeked = () => {
      seekingRef.current = false
      const diff = targetTimeRef.current - video.currentTime
      if (Math.abs(diff) > 0.01) {
        seekingRef.current = true
        video.currentTime = targetTimeRef.current
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!video.duration || isNaN(video.duration)) return
      if (prevXRef.current === null) {
        prevXRef.current = e.clientX
        return
      }
      const delta = e.clientX - prevXRef.current
      prevXRef.current = e.clientX
      const offset = (delta / window.innerWidth) * SENSITIVITY * video.duration
      targetTimeRef.current = Math.max(0, Math.min(video.duration, targetTimeRef.current + offset))
      if (!seekingRef.current) {
        seekingRef.current = true
        video.currentTime = targetTimeRef.current
      }
    }

    video.addEventListener('playing', onDataReady)
    video.addEventListener('seeked', onSeeked)
    window.addEventListener('mousemove', onMouseMove)

    return () => {
      video.removeEventListener('playing', onDataReady)
      video.removeEventListener('seeked', onSeeked)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className="fixed inset-0 z-0 w-full h-full"
      style={{ objectFit: 'cover', objectPosition: '70% center' }}
      muted
      playsInline
      preload="auto"
      autoPlay
      src="/mainframe.mp4"
    />
  )
}
