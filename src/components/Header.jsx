import { useState, useEffect } from 'react'
import logo from '../assets/logo.svg'
import { SocialRow } from './SocialIcons'

const PHONE = '+79028689293'
const PHONE_DISPLAY = '+7 902 868-92-93'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <a href="#" aria-label="Postor" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Postor" style={{ display: 'block', height: 28, width: 'auto' }} />
          </a>

          <nav className="nav-links">
            <a href="#services">Услуги</a>
            <a href="#cases">Кейсы</a>
            <a href="#team">Команда</a>
            <a href="#about">О нас</a>
            <a href="#faq">Вопросы</a>
          </nav>

          <div className="header-right">
            <SocialRow size={38} />
            <a href={`tel:${PHONE}`} className="header-phone">{PHONE_DISPLAY}</a>
            <a href="#contact" className="btn-primary">Связаться</a>
          </div>

          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
          <a href="#" onClick={closeMenu}>
            <img src={logo} alt="Postor" style={{ height: 40, width: 'auto', display: 'block' }} />
          </a>
          <button
            onClick={closeMenu}
            aria-label="Закрыть меню"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <line x1="4" y1="4" x2="24" y2="24" stroke="#0F0F0F" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="24" y1="4" x2="4" y2="24" stroke="#0F0F0F" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <div className="mobile-menu-links">
          {[['#services','Услуги'],['#cases','Кейсы'],['#team','Команда'],['#about','О нас'],['#faq','Вопросы'],['#contact','Контакты']].map(([href, label]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
        </div>
        <div className="mobile-menu-bottom">
          <div style={{ marginBottom: '1.5rem' }}>
            <SocialRow size={40} />
          </div>
          <a href={`tel:${PHONE}`} className="mobile-menu-phone">{PHONE_DISPLAY}</a>
          <a href="#contact" onClick={closeMenu} className="btn-primary" style={{ width: '100%', padding: '1.25rem', textAlign: 'center' }}>
            Обсудить проект
          </a>
        </div>
      </div>
    </>
  )
}
