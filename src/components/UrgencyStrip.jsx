import { useReveal } from '../hooks/useReveal'

const PERKS = [
  'Мы не берём двух клиентов из одного города',
  'Ваша реклама работает только на вас — без слива аудитории конкурентам',
  'Доступность вашего региона уточним при первом обращении',
]

export default function UrgencyStrip() {
  const ref = useReveal()
  return (
    <section className="urgency-section" ref={ref}>
      <div className="container">
        <div className="urgency-inner reveal">
          <div className="urgency-left">
            <p className="urgency-label">Эксклюзивность по региону</p>
            <h3 className="urgency-title">
              Один город —<br />один клиент
            </h3>
          </div>
          <div className="urgency-right">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {PERKS.map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{
                    width: 22, height: 22, borderRadius: '50%', background: 'var(--accent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, fontSize: '0.7rem', fontWeight: 900, color: 'var(--primary)',
                    marginTop: '0.05rem',
                  }}>✓</span>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 500, fontSize: '0.95rem', lineHeight: 1.4 }}>{p}</p>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn-primary" style={{ marginTop: '1.5rem', whiteSpace: 'nowrap', alignSelf: 'flex-start' }}>
              Уточнить свой регион →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
