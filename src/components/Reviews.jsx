import { useReveal } from '../hooks/useReveal'

const reviews = [
  {
    name: 'Антон Вилков',
    company: 'Ковёрчик',
    city: 'Казань',
    initial: 'А',
    text: '8 месяцев с Postorrr — цех загружен на 100%. В первый же месяц 67 лидов по 312 ₽. Раньше тратили столько же, но без результата.',
    metric: '67 лидов · 312 ₽/лид',
  },
  {
    name: 'Марина Соколова',
    company: 'Клин-Мастер',
    city: 'Екатеринбург',
    initial: 'М',
    text: 'До них было два подрядчика — просто сливали бюджет. За 3 недели работы 200+ обращений. Фиксированная цена — честно и предсказуемо.',
    metric: '200+ заявок за 3 нед.',
  },
  {
    name: 'Дмитрий Орлов',
    company: 'ЧистоДОМ',
    city: 'Новосибирск',
    initial: 'Д',
    text: 'Видео-креативы, которые они сняли — работают до сих пор спустя год. Лучшее вложение в маркетинг за 5 лет работы цеха.',
    metric: 'ROI сохраняется 12+ мес.',
  },
  {
    name: 'Светлана Баранова',
    company: 'Carpet Clean',
    city: 'Краснодар',
    initial: 'С',
    text: 'Ценю прозрачную отчётность — каждый рубль виден. Никаких «охватов» вместо реальных заявок. Рекомендую всем в нише.',
    metric: 'Полная прозрачность',
  },
  {
    name: 'Игорь Трофимов',
    company: 'Белоснежка-Сервис',
    city: 'Ростов-на-Дону',
    initial: 'И',
    text: 'Запустили рекламу за 7 дней. На второй неделе телефон не замолкал от входящих. Такого за 6 лет работы ещё не было.',
    metric: 'Запуск за 7 дней',
  },
]

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--accent)">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const ref = useReveal()
  return (
    <section className="section-padding" ref={ref}>
      <div className="container">
        <p className="section-label reveal" style={{ textAlign: 'center' }}>Отзывы клиентов</p>
        <h2 className="section-title reveal" style={{ textAlign: 'center' }}>
          Говорят те,<br />кто уже <span style={{ color: 'var(--accent)' }}>работает</span> с нами
        </h2>
        <p className="section-subtitle reveal" style={{ textAlign: 'center', margin: '0 auto 2.5rem' }}>
          Результаты наших клиентов по всей России
        </p>

        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div className={`review-card reveal reveal-delay-${(i % 3) + 1}`} key={i}>
              <div className="review-header">
                <div className="review-avatar">{r.initial}</div>
                <div>
                  <p className="review-name">{r.name}</p>
                  <p className="review-company">{r.company} · {r.city}</p>
                </div>
                <div style={{ marginLeft: 'auto', flexShrink: 0 }}>
                  <Stars />
                </div>
              </div>
              <p className="review-text">«{r.text}»</p>
              <div className="review-metric">{r.metric}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
