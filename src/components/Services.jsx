import { useReveal } from '../hooks/useReveal'

export default function Services() {
  const ref = useReveal()
  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container">
        <p className="section-label reveal">Услуги</p>
        <h2 className="section-title reveal">Решения для<br />вашего бизнеса</h2>
        <p className="section-subtitle reveal services-subtitle">Полный спектр digital-маркетинга от специалистов-практиков.</p>

        <div style={{ marginTop: '3.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          {/* Row 1: 3 cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="services-row">
            <div className="service-card service-card--logo reveal reveal-delay-1">
              <img src="/vk_1.webp" className="service-card__logo" alt="VK Ads" />
              <div className="service-card__content">
                <h3>Таргет VK Ads</h3>
                <p>Работа на лид-формы и сообщения. Оплата за результат, а не за клики. Тестируем связки на своих бюджетах.</p>
              </div>
            </div>

            <div className="service-card service-card--logo reveal reveal-delay-2">
              <span className="service-badge">Горячий спрос</span>
              <img src="/ya_1.webp" className="service-card__logo" alt="Яндекс Директ" />
              <div className="service-card__content">
                <h3>Контекстная реклама</h3>
                <p>Яндекс.Директ. Работаем с горячим спросом, возвращаем клиентов через ретаргетинг. Платите только за реальные заявки.</p>
              </div>
            </div>

            {/* Offer card */}
            <div className="service-card service-card--offer reveal reveal-delay-3">
              {/* Price */}
              <div>
                <p className="offer-label">Тариф · 1 регион</p>
                <div className="offer-price">20 000 ₽<span className="offer-price-period">/мес</span></div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(15,15,15,0.18)' }} />

              {/* Main UTP */}
              <div className="offer-utp">
                <p className="offer-utp__headline">
                  <mark className="offer-mark">Фиксированная ставка</mark> — нам невыгодно тратить ваш бюджет впустую
                </p>
              </div>

              {/* Chips */}
              <div className="offer-includes">
                <p className="offer-includes__label">Что входит</p>
                <div className="offer-includes__list">
                  {['VK Ads', 'Видео-креативы', 'ОРД-маркировка', 'Живой контент', 'Отчёт ежемесячно'].map(item => (
                    <span className="offer-chip" key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <a href="#contact" className="btn-primary" style={{ background: 'var(--primary)', color: 'var(--accent)', textAlign: 'center' }}>
                Обсудить проект →
              </a>
            </div>
          </div>

          {/* Row 2: 3 cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="services-row">
            <div className="service-card reveal">
              <h3>Реклама на картах</h3>
              <p>Яндекс Карты. Привлекаем горячих клиентов, которые ищут химчистку рядом с домом.</p>
            </div>

            <div className="service-card reveal">
              <h3>Яндекс Бизнес</h3>
              <p>Оформление профиля, работа с отзывами и рейтингом. Запуск приоритетного размещения.</p>
            </div>

            <div className="service-card reveal">
              <h3>Авито реклама</h3>
              <p>Упаковка аккаунта, масс-постинг, продвижение объявлений и вывод в топ выдачи.</p>
            </div>
          </div>

          {/* Row 3: full-width dark card */}
          <div className="reveal" style={{
            background: 'var(--primary)',
            borderRadius: '2rem',
            padding: '2.5rem 3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
          }}>
            <div>
              <h3 style={{ fontFamily: 'Unbounded, sans-serif', fontWeight: 900, fontSize: 'clamp(1.5rem, 3vw, 2rem)', textTransform: 'uppercase', color: 'var(--white)', marginBottom: '0.75rem' }}>
                Продакшн контента
              </h3>
              <p style={{ color: 'var(--gray-text)', fontWeight: 500, fontSize: '0.9rem', maxWidth: 460, lineHeight: 1.4 }}>
                Профессиональные фото, цепляющие видео-креативы и продающие тексты для всех каналов продвижения.
              </p>
            </div>
            <a href="#contact" className="btn-primary" style={{
              background: 'var(--white)',
              color: 'var(--primary)',
              padding: '1rem 2.5rem',
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}>
              Заказать контент
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .services-row { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .services-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
