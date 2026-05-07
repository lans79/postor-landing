import { useReveal } from '../hooks/useReveal'

const mistakes = [
  {
    num: '01',
    title: 'Универсальный маркетолог',
    text: 'Сегодня рекламирует пиццу, завтра — вас. Не знает разницу между роторной и экстракционной чисткой. Результат — объявления, которые привлекают не ваших клиентов.',
  },
  {
    num: '02',
    title: 'Фото со стока',
    text: '«Счастливая хозяйка» вместо реального цеха. Ваш клиент с первого взгляда понимает: это не про меня. CTR падает, цена лида растёт.',
  },
  {
    num: '03',
    title: 'Процент от бюджета',
    text: 'Агентству выгодно тратить больше вашего бюджета — их гонорар растёт вместе с расходами. У нас — фикс. Нам выгодно, чтобы росли ваши заказы.',
  },
]

export default function Pain() {
  const ref = useReveal()
  return (
    <section className="section-padding" style={{ background: 'var(--gray-light)' }} ref={ref}>
      <div className="container">

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start', marginBottom: '2rem' }} className="pain-header-grid">
          <div>
            <p className="section-label reveal">Почему это важно</p>
            <h2 className="section-title reveal" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}>
              Три ошибки,<br />которые<br />стоят вам<br /><span style={{ color: 'var(--accent)' }}>клиентов</span>
            </h2>
          </div>
          <div>
            <p className="reveal" style={{ color: 'var(--gray-text)', fontSize: '1.125rem', fontWeight: 500, lineHeight: 1.4, marginBottom: '1.5rem' }}>
              Большинство химчисток сталкиваются с одними и теми же проблемами в рекламе. Не потому что реклама не работает — а потому что подрядчик не знает вашу нишу.
            </p>
            <div className="pain-stats reveal">
              {[
                { value: '291 ₽',  label: 'минимальный CPL · Яндекс Директ' },
                { value: '7 ₽',    label: 'стоимость подписчика · в VK Ads для ниши' },
                { value: '−20%',   label: 'снижение CPL · после оптимизации' },
                { value: '1 день', label: 'до первых заявок · после запуска рекламы' },
              ].map((s, i) => (
                <div className="pain-stat" key={i}>
                  <span className="pain-stat__value">{s.value}</span>
                  <span className="pain-stat__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mistake cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {mistakes.map((m, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: 'var(--white)',
                borderRadius: '2rem',
                padding: '2.5rem 3rem',
                display: 'grid',
                gridTemplateColumns: '80px 1fr 2fr',
                gap: '2rem',
                alignItems: 'center',
                border: '1px solid var(--border-light)',
                transition: 'all 0.4s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(15,15,15,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <span style={{ fontFamily: 'Unbounded, sans-serif', fontWeight: 900, fontSize: '2.5rem', color: 'var(--border-light)', letterSpacing: '-0.025em' }}>
                {m.num}
              </span>
              <h3 style={{ fontFamily: 'Unbounded, sans-serif', fontWeight: 800, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
                {m.title}
              </h3>
              <p style={{ color: 'var(--gray-text)', fontSize: '0.9rem', fontWeight: 500, lineHeight: 1.4 }}>
                {m.text}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .pain-header-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 768px) {
          .pain-header-grid + div > div {
            grid-template-columns: 1fr !important;
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}
