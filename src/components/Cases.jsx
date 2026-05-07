import { useReveal } from '../hooks/useReveal'

const casesVK = [
  {
    niche: 'Химчистка ковров · Луганск',
    title: '2 740 подписчиков за месяц по 10 ₽ — личный рекорд агентства',
    before: '0 подписчиков',
    after: '2 740 подп. · 10 ₽',
    channel: 'VK Ads · Подписки',
    dark: false,
  },
  {
    niche: 'Химчистка ковров · Брянск',
    title: 'Подписчик по 7 ₽ — абсолютный рекорд стоимости в нише',
    before: 'CPL 30+ ₽',
    after: 'CPL 7 ₽',
    channel: 'VK Реклама · Подписки',
    dark: true,
  },
  {
    niche: 'Химчистка ковров · Нижний Новгород',
    title: '1 502 сообщения за месяц — рекордный поток заявок',
    before: 'единичные заявки',
    after: '1 502 сообщения',
    channel: 'VK Ads · Сообщения',
    dark: false,
  },
]

const casesYandex = [
  {
    niche: 'Химчистка ковров · Нижний Новгород',
    title: '105 целевых лидов по 291 ₽ — только реальные обращения, без мусорных кликов',
    before: 'нецелевой трафик',
    after: '105 лидов · 291 ₽',
    channel: 'Яндекс Директ · Поиск + РСЯ',
    dark: true,
  },
  {
    niche: 'Химчистка ковров · Уфа',
    title: 'После оптимизации — вдвое больше лидов и CPL снизился на 20%',
    before: '110 лидов · 1 030 ₽',
    after: '212 лидов · 826 ₽',
    channel: 'Яндекс Директ · Поиск + РСЯ',
    dark: false,
  },
  {
    niche: 'Химчистка ковров · Челябинск',
    title: 'Запустили квиз-страницы и увеличили поток лидов в 14 раз',
    before: '53 лида · 759 ₽',
    after: 'рост × 14',
    channel: 'Яндекс Директ · Квиз + Поиск',
    dark: false,
  },
]

export default function Cases() {
  const ref = useReveal()
  return (
    <section id="cases" className="section-padding" ref={ref}>
      <div className="container">

        <div style={{ marginBottom: '2rem' }}>
          <p className="section-label">Результаты</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: '1rem' }}>
            Кейсы<br />агентства
          </h2>
          <p style={{ color: 'var(--gray-text)', fontSize: '1.125rem', fontWeight: 500, lineHeight: 1.4 }}>
            Реальные цифры из рекламных кабинетов. Никаких «охватов» — только лиды и заявки.
          </p>
        </div>

        {/* VK */}
        <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gray-text)', marginBottom: '1rem' }}>VK Реклама</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }} className="cases-cols">
          {casesVK.map((c, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: c.dark ? 'var(--primary)' : 'var(--gray-light)',
                color: c.dark ? 'var(--white)' : 'var(--primary)',
                borderRadius: '2rem',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                minHeight: 340,
              }}
            >
              <span style={{
                display: 'inline-block',
                background: c.dark ? 'rgba(255,255,255,0.1)' : 'var(--white)',
                border: c.dark ? 'none' : '1px solid var(--border-light)',
                borderRadius: '9999px',
                padding: '0.3rem 0.9rem',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: c.dark ? 'rgba(255,255,255,0.6)' : 'var(--primary)',
                alignSelf: 'flex-start',
              }}>{c.niche}</span>

              <h3 style={{
                fontFamily: 'Unbounded, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                flex: 1,
              }}>
                {c.title}
              </h3>

              {/* Метрика до/после */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '0.25rem' }}>До</p>
                  <p style={{ fontFamily: 'Unbounded, sans-serif', fontWeight: 900, fontSize: '1rem', opacity: 0.6 }}>{c.before}</p>
                </div>
                <div style={{ fontSize: '1.25rem', opacity: 0.4 }}>→</div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '0.25rem' }}>После</p>
                  <p style={{ fontFamily: 'Unbounded, sans-serif', fontWeight: 900, fontSize: '1rem', color: c.dark ? 'var(--accent)' : 'var(--primary)' }}>{c.after}</p>
                </div>
              </div>

              <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.5, marginTop: 'auto' }}>
                {c.channel}
              </p>
            </div>
          ))}
        </div>

        {/* Яндекс */}
        <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gray-text)', marginBottom: '1rem' }}>Яндекс Директ</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }} className="cases-cols">
          {casesYandex.map((c, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: c.dark ? 'var(--primary)' : 'var(--gray-light)',
                color: c.dark ? 'var(--white)' : 'var(--primary)',
                borderRadius: '2rem',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                minHeight: 340,
              }}
            >
              <span style={{
                display: 'inline-block',
                background: c.dark ? 'rgba(255,255,255,0.1)' : 'var(--white)',
                border: c.dark ? 'none' : '1px solid var(--border-light)',
                borderRadius: '9999px',
                padding: '0.3rem 0.9rem',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: c.dark ? 'rgba(255,255,255,0.6)' : 'var(--primary)',
                alignSelf: 'flex-start',
              }}>{c.niche}</span>

              <h3 style={{
                fontFamily: 'Unbounded, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                flex: 1,
              }}>
                {c.title}
              </h3>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '0.25rem' }}>До</p>
                  <p style={{ fontFamily: 'Unbounded, sans-serif', fontWeight: 900, fontSize: '1rem', opacity: 0.6 }}>{c.before}</p>
                </div>
                <div style={{ fontSize: '1.25rem', opacity: 0.4 }}>→</div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '0.25rem' }}>После</p>
                  <p style={{ fontFamily: 'Unbounded, sans-serif', fontWeight: 900, fontSize: '1rem', color: c.dark ? 'var(--accent)' : 'var(--primary)' }}>{c.after}</p>
                </div>
              </div>

              <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.5, marginTop: 'auto' }}>
                {c.channel}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="#contact" className="btn-primary" style={{ padding: '1.15rem 3rem' }}>
            Получить бесплатный аудит →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cases-cols { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .cases-cols { grid-template-columns: 1fr !important; }
          .cases-cols > div { padding: 1.5rem !important; min-height: auto !important; }
        }
      `}</style>
    </section>
  )
}
