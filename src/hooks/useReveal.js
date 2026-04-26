import { useRef, useEffect } from 'react'

export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const revealEls = container.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    revealEls.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}
