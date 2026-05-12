import { useReveal } from '../hooks/useReveal'

const casesVK = [
  {
    city: 'Луганск',
    goal: 'Запустить группу с нуля',
    metric: '2 740',
    unit: 'подписчиков за месяц',
    badges: ['10 ₽/подп.', 'рекорд агентства'],
    before: '0 подписчиков',
    after: '2 740 подп.',
    channel: 'VK Ads · Подписки',
    period: '1 месяц',
    dark: false,
  },
  {
    city: 'Брянск',
    goal: 'Снизить стоимость подписчика',
    metric: '7 ₽',
    unit: 'за подписчика — рекорд ниши',
    badges: ['−77% к рынку'],
    before: '30+ ₽/подп.',
    after: '7 ₽/подп.',
    channel: 'VK Реклама · Подписки',
    period: null,
    dark: true,
  },
  {
    city: 'Нижний Новгород',
    goal: 'Генерировать заявки в диалоги',
    metric: '1 502',
    unit: 'обращения за месяц',
    badges: ['рекордный поток'],
    before: 'единичные заявки',
    after: '1 502 сообщения',
    channel: 'VK Ads · Сообщения',
    period: '1 месяц',
    dark: false,
  },
]

const casesYandex = [
  {
    city: 'Нижний Новгород',
    goal: 'Привести только целевые лиды',
    metric: '291 ₽',
    unit: 'стоимость лида',
    badges: ['105 лидов', 'без мусорных кликов'],
    before: 'нецелевой трафик',
    after: '105 лидов · 291 ₽',
    channel: 'Яндекс Директ · Поиск + РСЯ',
    period: null,
    dark: true,
  },
  {
    city: 'Уфа',
    goal: 'Оптимизировать кампании',
    metric: '+93%',
    unit: 'лидов после оптимизации',
    badges: ['CPL −20%', '212 лидов/мес'],
    before: '110 лидов · 1 030 ₽',
    after: '212 лидов · 826 ₽',
    channel: 'Яндекс Директ · Поиск + РСЯ',
    period: null,
    dark: false,
  },
  {
    city: 'Челябинск',
    goal: 'Масштабировать поток заявок',
    metric: '×14',
    unit: 'рост потока лидов',
    badges: ['квиз-воронка'],
    before: '53 лида · 759 ₽',
    after: 'рост ×14',
    channel: 'Яндекс Директ · Квиз + Поиск',
    period: null,
    dark: false,
  },
]

function Tag({ dark, children }) {
  return (
    <span style={{
      display: 'inline-block',
      background: dark ? 'rgba(255,255,255,0.1)' : 'rgba(15,15,15,0.07)',
      border: dark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(15,15,15,0.1)',
      borderRadius: '9999px',
      padding: '0.2rem 0.7rem',
      fontSize: '0.6rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: dark ? 'rgba(255,255,255,0.6)' : 'var(--gray-text)',
    }}>{children}</span>
  )
}

function Badge({ children }) {
  return (
    <span style={{
      display: 'inline-block',
      background: 'var(--accent)',
      color: 'var(--primary)',
      borderRadius: '9999px',
      padding: '0.25rem 0.75rem',
      fontSize: '0.68rem',
      fontWeight: 800,
      letterSpacing: '0.04em',
    }}>{children}</span>
  )
}

function CaseCard({ c, i }) {
  const dim   = c.dark ? 'rgba(255,255,255,0.45)' : 'var(--gray-text)'
  const dimBg = c.dark ? 'rgba(255,255,255,0.06)' : 'rgba(15,15,15,0.04)'

  return (
    <div
      className={`reveal reveal-delay-${(i % 3) + 1}`}
      style={{
        background: c.dark ? 'var(--primary)' : 'var(--gray-light)',
        color: c.dark ? 'var(--white)' : 'var(--primary)',
        borderRadius: '2rem',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.1rem',
        minHeight: 380,
        border: c.dark ? 'none' : '1px solid var(--border-light)',
      }}
    >
      {/* Теги: ниша + город */}
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
        <Tag dark={c.dark}>Химчистка ковров</Tag>
        <Tag dark={c.dark}>{c.city}</Tag>
      </div>

      {/* Задача */}
      <div>
        <p style={{ fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: dim, marginBottom: '0.3rem' }}>Задача</p>
        <p style={{ fontSize: '0.95rem', fontWeight: 600, lineHeight: 1.3 }}>{c.goal}</p>
      </div>

      {/* Ключевая метрика — главный элемент */}
      <div style={{ flex: 1 }}>
        <p style={{
          fontFamily: 'Unbounded, sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(2.8rem, 4.5vw, 3.8rem)',
          lineHeight: 1,
          color: c.dark ? 'var(--accent)' : 'var(--primary)',
          letterSpacing: '-0.03em',
          margin: 0,
        }}>{c.metric}</p>
        <p style={{ fontSize: '0.82rem', fontWeight: 500, color: dim, marginTop: '0.4rem', lineHeight: 1.3 }}>{c.unit}</p>
      </div>

      {/* Бейджи */}
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
        {c.badges.map(b => <Badge key={b}>{b}</Badge>)}
      </div>

      {/* До → После */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        background: dimBg,
        borderRadius: '1rem',
        padding: '0.75rem 1rem',
      }}>
        <div style={{ minWidth: 0, flex: 1 }}>
          <p style={{ fontSize: '0.55rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: dim, marginBottom: '0.2rem' }}>Было</p>
          <p style={{ fontWeight: 700, fontSize: '0.82rem', color: dim }}>{c.before}</p>
        </div>
        <p style={{ fontSize: '1.1rem', color: dim, flexShrink: 0 }}>→</p>
        <div style={{ minWidth: 0, flex: 1 }}>
          <p style={{ fontSize: '0.55rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)', marginBottom: '0.2rem' }}>Стало</p>
          <p style={{ fontWeight: 800, fontSize: '0.82rem' }}>{c.after}</p>
        </div>
      </div>

      {/* Канал + период */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
        <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: dim }}>{c.channel}</p>
        {c.period && <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: dim, flexShrink: 0 }}>{c.period}</p>}
      </div>
    </div>
  )
}

export default function Cases() {
  const ref = useReveal()
  return (
    <section id="cases" className="section-padding" ref={ref}>
      <div className="container">

        <div style={{ marginBottom: '2.5rem' }}>
          <p className="section-label">Результаты</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: '1rem' }}>
            Кейсы<br />агентства
          </h2>
          <p style={{ color: 'var(--gray-text)', fontSize: '1.125rem', fontWeight: 500, lineHeight: 1.4, maxWidth: 560 }}>
            Реальные цифры из рекламных кабинетов — с задачей, результатом и сравнением до/после.
          </p>
        </div>

        {/* VK */}
        <p className="cases-channel-label">VK Реклама</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', marginBottom: '3rem' }} className="cases-cols">
          {casesVK.map((c, i) => <CaseCard key={i} c={c} i={i} />)}
        </div>

        {/* Яндекс */}
        <p className="cases-channel-label">Яндекс Директ</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', marginBottom: '3rem' }} className="cases-cols">
          {casesYandex.map((c, i) => <CaseCard key={i} c={c} i={i} />)}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="#contact" className="btn-primary" style={{ padding: '1.15rem 3rem' }}>
            Получить бесплатный аудит →
          </a>
        </div>
      </div>

      <style>{`
        .cases-channel-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gray-text);
          margin-bottom: 1rem;
        }
        @media (max-width: 900px) {
          .cases-cols { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .cases-cols { grid-template-columns: 1fr !important; }
          .cases-cols > div { min-height: auto !important; }
        }
      `}</style>
    </section>
  )
}
