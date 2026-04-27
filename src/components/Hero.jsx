import { useEffect, useState } from 'react'

const ROTATING_TEXT = 'СМОТРЕТЬ КЕЙС · СМОТРЕТЬ КЕЙС · СМОТРЕТЬ КЕЙС · '
// TODO: замените VIDEO_URL на реальное видео перед публикацией
const VIDEO_URL = null

const STATS = [
  { value: '155 000+', label: 'подписчиков паблика' },
  { value: '216 ₽',   label: 'минимальный CPL' },
  { value: '9 лет',   label: 'в нише чистоты' },
  { value: '50+',     label: 'клиентов по России' },
]

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
        <div className="hero-bg" />
        {/* <div className="hero-gradient" /> */}
        <div className="container hero-content">

          <div className="hero-heading-row">
            <h1 className="hero-anim">
              Мы знаем,<br />
              как <span className="accent">пахнет</span><br />
              грязный ковер
            </h1>

            {/* Кнопка скрыта до появления реального видео */}
            <button
              className="hero-play hero-anim hero-anim--d2"
              onClick={() => VIDEO_URL && setVideoOpen(true)}
              aria-label="Смотреть видео о нас"
              style={{ opacity: VIDEO_URL ? 1 : 0, pointerEvents: VIDEO_URL ? 'auto' : 'none' }}
            >
              <svg className="hero-play__text" viewBox="0 0 200 200">
                <defs>
                  <path id="circle-path" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                </defs>
                <text fontSize="11.5" fontWeight="700" letterSpacing="3" fill="#0F0F0F" fontFamily="Unbounded, sans-serif" textAnchor="start">
                  <textPath href="#circle-path">{ROTATING_TEXT}</textPath>
                </text>
              </svg>
              <div className="hero-play__inner">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <circle cx="26" cy="26" r="25" stroke="#0F0F0F" strokeWidth="2"/>
                  <polygon points="22,18 36,26 22,34" fill="#0F0F0F"/>
                </svg>
              </div>
            </button>
          </div>

          <div className="hero-bottom hero-anim hero-anim--d1">
            <p className="hero-desc">
              Реклама в VK и Яндексе для химчисток и клинингов. Не агентство — практики: у нас собственный цех, паблик 155 000+ и реальные результаты.
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

          {/* Stats strip */}
          <div className="hero-stats hero-anim hero-anim--d3">
            {STATS.map((s, i) => (
              <div className="hero-stat" key={i}>
                <span className="hero-stat__value">{s.value}</span>
                <span className="hero-stat__label">{s.label}</span>
              </div>
            ))}
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
