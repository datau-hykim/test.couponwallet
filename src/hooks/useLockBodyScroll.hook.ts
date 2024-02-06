import { RefObject, useEffect, useLayoutEffect, useRef } from 'react'

export const useLockBodyScrollHook = (when: boolean): RefObject<HTMLDivElement | null> => {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const currentRef = ref.current
    if (currentRef) {
      currentRef.addEventListener('touchmove', (e) => e.preventDefault())
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('touchmove', (e) => e.preventDefault())
      }
    }
  }, [])
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    if (when) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [when])

  return ref
}
