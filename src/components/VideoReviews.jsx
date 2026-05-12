import { useState, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

// Когда видео будут готовы — заменить null на '/reviews/review_1.mp4' и т.д.
// Постеры: '/reviews/review_1_poster.jpg' и т.д.
const videos = [
  {
    src: null,                           // заменить на '/reviews/review_1.mp4'
    poster: null,                        // заменить на '/reviews/review_1_poster.jpg'
    name: 'Антон Вилков',
    company: 'Ковёрчик',
    city: 'Казань',
    result: '67 лидов в первый месяц',
    initial: 'А',
  },
  {
    src: null,
    poster: null,
    name: 'Марина Соколова',
    company: 'Клин-Мастер',
    city: 'Екатеринбург',
    result: '200+ заявок за 3 недели',
    initial: 'М',
  },
  {
    src: null,
    poster: null,
    name: 'Дмитрий Орлов',
    company: 'ЧистоДОМ',
    city: 'Новосибирск',
    result: 'ROI сохраняется 12+ мес.',
    initial: 'Д',
  },
]

function PlayIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="28" fill="rgba(206,241,68,0.95)" />
      <path d="M22 18L40 28L22 38V18Z" fill="#0F0F0F" />
    </svg>
  )
}

function VideoCard({ v, i }) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlay = () => {
    if (!v.src) return
    setPlaying(true)
    setTimeout(() => videoRef.current?.play(), 50)
  }

  return (
    <div className={`reveal reveal-delay-${i + 1}`} style={{
      borderRadius: '2rem',
      overflow: 'hidden',
      background: 'var(--gray-light)',
      border: '1px solid var(--border-light)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Видео-зона */}
      <div style={{
        position: 'relative',
        aspectRatio: '16/9',
        background: '#1a1a1a',
        cursor: v.src ? 'pointer' : 'default',
        overflow: 'hidden',
      }} onClick={handlePlay}>

        {v.src && playing ? (
          <video
            ref={videoRef}
            src={v.src}
            poster={v.poster || undefined}
            controls
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <>
            {/* Постер или заглушка */}
            {v.poster ? (
              <img src={v.poster} alt={v.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            ) : (
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: 'var(--accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Unbounded, sans-serif',
                  fontWeight: 900, fontSize: '1.5rem', color: 'var(--primary)',
                }}>{v.initial}</div>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Видео скоро появится
                </p>
              </div>
            )}

            {/* Кнопка Play */}
            {v.src && (
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(0,0,0,0.25)',
                transition: 'background 0.2s',
              }}>
                <PlayIcon />
              </div>
            )}
          </>
        )}
      </div>

      {/* Информация */}
      <div style={{ padding: '1.25rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem' }}>
          <div>
            <p style={{ fontFamily: 'Unbounded, sans-serif', fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.2rem' }}>{v.name}</p>
            <p style={{ color: 'var(--gray-text)', fontSize: '0.8rem', fontWeight: 500 }}>{v.company} · {v.city}</p>
          </div>
          {/* Звёзды */}
          <div style={{ display: 'flex', gap: 2, flexShrink: 0, paddingTop: '0.1rem' }}>
            {[...Array(5)].map((_, k) => (
              <svg key={k} width="12" height="12" viewBox="0 0 24 24" fill="var(--accent)">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Результат */}
        <div style={{
          display: 'inline-flex', alignSelf: 'flex-start',
          background: 'var(--primary)', color: 'var(--accent)',
          borderRadius: '9999px', padding: '0.3rem 0.85rem',
          fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.04em',
        }}>
          {v.result}
        </div>
      </div>
    </div>
  )
}

export default function VideoReviews() {
  const ref = useReveal()
  return (
    <section className="section-padding" ref={ref} style={{ background: 'var(--gray-light)' }}>
      <div className="container">
        <p className="section-label reveal" style={{ textAlign: 'center' }}>Видео-отзывы</p>
        <h2 className="section-title reveal" style={{ textAlign: 'center' }}>
          Клиенты говорят<br />сами за себя
        </h2>
        <p className="section-subtitle reveal" style={{ textAlign: 'center', margin: '0 auto 3rem' }}>
          Живые видео от предпринимателей, которые уже работают с Постор
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }} className="video-reviews-grid">
          {videos.map((v, i) => <VideoCard key={i} v={v} i={i} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .video-reviews-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .video-reviews-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
