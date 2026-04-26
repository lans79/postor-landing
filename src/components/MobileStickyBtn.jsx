import { useState, useEffect } from 'react'

export default function MobileStickyBtn() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const contactEl = document.getElementById('contact')
    const onScroll = () => {
      const scrolled = window.scrollY > 600
      const nearContact = contactEl && contactEl.getBoundingClientRect().top < window.innerHeight
      setShow(scrolled && !nearContact)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.paddingBottom = show ? '80px' : ''
    return () => { document.body.style.paddingBottom = '' }
  }, [show])

  return (
    <div className={`sticky-cta ${show ? 'show' : ''}`}>
      <a href="#contact" className="btn-primary" style={{ textAlign: 'center' }}>
        Обсудить проект
      </a>
    </div>
  )
}
