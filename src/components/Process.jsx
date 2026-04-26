import { useReveal } from '../hooks/useReveal'

const steps = [
  {
    num: '01',
    title: 'Заявка',
    desc: 'Вы оставляете заявку — мы связываемся в течение часа. Без авто-воронок и долгих ожиданий.',
    time: '~1 час',
  },
  {
    num: '02',
    title: 'Аудит',
    desc: 'Бесплатно разбираем вашу текущую рекламу или отсутствие таковой. Находим точки роста и слабые места.',
    time: '~24 часа',
  },
  {
    num: '03',
    title: 'Стратегия',
    desc: 'Готовим персональный медиаплан: каналы, бюджет, форматы. Показываем, что и почему будем делать.',
    time: '~3 дня',
  },
  {
    num: '04',
    title: 'Запуск',
    desc: 'Создаём креативы, настраиваем кампании, маркируем через ОРД. Первые обращения — уже в первую неделю.',
    time: '~7 дней',
  },
]

export default function Process() {
  const ref = useReveal()
  return (
    <section id="process" className="section-padding" ref={ref} style={{ background: 'var(--gray-light)' }}>
      <div className="container">
        <p className="section-label reveal">Процесс</p>
        <h2 className="section-title reveal">
          От заявки до первых<br /><span style={{ color: 'var(--accent)' }}>заказов — 4 шага</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
          marginTop: '2rem',
          position: 'relative',
        }} className="process-grid">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: 'var(--white)',
                borderRadius: '2rem',
                padding: '2rem',
                border: '1px solid var(--border-light)',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <span style={{
                  fontFamily: 'Unbounded, sans-serif',
                  fontWeight: 900,
                  fontSize: '3rem',
                  color: 'var(--accent)',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.05,
                }}>
                  {step.num}
                </span>
                <span style={{
                  background: 'var(--primary)',
                  color: 'var(--accent)',
                  borderRadius: '9999px',
                  padding: '0.3rem 0.8rem',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                }}>
                  {step.time}
                </span>
              </div>
              <h3 style={{
                fontFamily: 'Unbounded, sans-serif',
                fontWeight: 900,
                fontSize: '1.1rem',
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                marginBottom: '0.75rem',
              }}>
                {step.title}
              </h3>
              <p style={{ color: 'var(--gray-text)', fontSize: '0.85rem', fontWeight: 500, lineHeight: 1.4 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="#contact" className="btn-primary" style={{ padding: '1.15rem 3rem' }}>
            Начать бесплатно →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .process-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 500px) { .process-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
