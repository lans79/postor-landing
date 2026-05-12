import { useEffect, useState } from 'react'

const ROTATING_TEXT = 'О КОМПАНИИ · О КОМПАНИИ · О КОМПАНИИ · '
// Вставьте ссылку на видео о компании (YouTube или VK)
const VIDEO_URL = null // например: 'https://www.youtube.com/embed/XXXXXXX'

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  useEffect(() => {
    if (!videoOpen) return
    const onKey = (e) => { if (e.key === 'Escape') setVideoOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [videoOpen])

  return (
    <>
      <section className="hero">
        <img className="hero-bg-video" src="/fon.jpg" alt="" aria-hidden="true" />
        <div className="hero-bg-overlay" />
        <div className="container hero-content">

          <div className="hero-heading-row">
            <h1 className="hero-anim">
              Реклама для<br />
              <span className="accent">химчисток</span><br />
              которая работает
            </h1>

            {/* Круглая кнопка — видео о компании */}
            <button
              className="hero-play hero-anim hero-anim--d2"
              onClick={() => VIDEO_URL && setVideoOpen(true)}
              aria-label="Смотреть видео о нас"
              style={{ cursor: VIDEO_URL ? 'pointer' : 'default' }}
            >
              <svg className="hero-play__text" viewBox="0 0 200 200">
                <defs>
                  <path id="circle-path" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                </defs>
                <text fontSize="11.5" fontWeight="700" letterSpacing="3" fill="currentColor" fontFamily="Unbounded, sans-serif" textAnchor="start">
                  <textPath href="#circle-path">{ROTATING_TEXT}</textPath>
                </text>
              </svg>
              <div className="hero-play__inner">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <circle cx="26" cy="26" r="25" stroke="currentColor" strokeWidth="2"/>
                  <polygon points="22,18 36,26 22,34" fill="currentColor"/>
                </svg>
              </div>
            </button>
          </div>

          <div className="hero-bottom hero-anim hero-anim--d1">
            <p className="hero-desc">
              Мы сами в нише: держим цех, ведём паблик и тестируем связки на собственных бюджетах. К вам приходят только проверенные решения — без экспериментов за ваш счёт.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn-primary btn-breathe" style={{ padding: '1.15rem 2.5rem', fontSize: '1.1rem' }}>
                Получить бесплатный аудит →
              </a>
              <a href="#cases" className="btn-outline-text">
                <span>Смотреть кейсы</span>
                <div className="circle-arrow">→</div>
              </a>
            </div>
          </div>

        </div>
      </section>

      {videoOpen && VIDEO_URL && (
        <div className="video-modal" onClick={() => setVideoOpen(false)}>
          <div className="video-modal__box" onClick={e => e.stopPropagation()}>
            <button className="video-modal__close" onClick={() => setVideoOpen(false)}>✕</button>
            <iframe
              src={`${VIDEO_URL}?autoplay=1`}
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '1rem' }}
            />
          </div>
        </div>
      )}
    </>
  )
}
