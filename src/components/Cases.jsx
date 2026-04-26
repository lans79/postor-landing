import { useReveal } from '../hooks/useReveal'

const cases = [
  {
    niche: 'Химчистка ковров · Казань',
    title: 'Снизили CPL на 40% и забили цех заказами на месяц вперёд',
    before: 'CPL 890 ₽',
    after: 'CPL 312 ₽',
    channel: 'VK Реклама + Ретаргет',
    dark: false,
  },
  {
    niche: 'Выездной клининг · Екатеринбург',
    title: '300+ лидов по 250 ₽ за 3 недели с нуля',
    before: '0 заявок',
    after: '300+ лидов',
    channel: 'VK Ads · Лид-формы',
    dark: true,
  },
  {
    niche: 'Химчистка мебели · Новосибирск',
    title: 'Подписчики паблика выросли в 3 раза, цех загружен до конца сезона',
    before: '1 200 подп.',
    after: '4 100 подп.',
    channel: 'VK + Яндекс.Директ',
    dark: false,
  },
]

export default function Cases() {
  const ref = useReveal()
  return (
    <section id="cases" className="section-padding" ref={ref}>
      <div className="container">

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'flex-end', marginBottom: '2rem' }} className="cases-header">
          <div>
            <p className="section-label reveal">Результаты</p>
            <h2 className="section-title reveal" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              Кейсы<br />агентства
            </h2>
          </div>
          <p className="section-subtitle reveal cases-subtitle" style={{ marginTop: 0 }}>
            Реальные цифры из рекламных кабинетов. Никаких «охватов» — только лиды и заявки.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="cases-cols">
          {cases.map((c, i) => (
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

        <div className="reveal" style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="#contact" className="btn-primary" style={{ padding: '1.15rem 3rem' }}>
            Хотите такой же результат? →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cases-header { grid-template-columns: 1fr !important; }
          .cases-cols { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .cases-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
