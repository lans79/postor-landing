import { useReveal } from '../hooks/useReveal'


const cards = [
  {
    title: 'Дулито — 155 000+ подписчиков',
    desc: 'Крупнейшая группа в Рунете по услугам. Все инновационные связки тестируем на собственном кабинете.',
    benefit: 'Вы не платите за эксперименты — к вам приходит то, что уже работает.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Спикеры Clean Expo',
    desc: 'Официальные спикеры съездов коврочистов России. Нас знают от мастеров до федеральных сетей.',
    benefit: 'Мы не будем гуглить, что такое экстракционная чистка — строим стратегию на знании рынка.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3M8 22h8"/>
      </svg>
    ),
  },
  {
    title: 'Собственный цех + AI',
    desc: 'Действующий цех и AI-измерения ковров — работаем на рынке, а не изучаем его со стороны.',
    benefit: 'Снимаем живой контент у себя. Вам не нужно организовывать съёмку — всё включено.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    title: 'Отчёт каждый месяц',
    desc: 'Лиды, CPL, охваты и бюджет — в одном отчёте по каждой цели кампании.',
    benefit: 'Видите каждый рубль. Ни один не исчезает в «охватах» и «узнаваемости».',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
  },
]

export default function About() {
  const teamRef = useReveal()
  const aboutRef = useReveal()

  return (
    <>
      {/* Team */}
      <section id="team" style={{ background: 'var(--gray-light)' }} className="section-padding" ref={teamRef}>
        <div className="container">
          <p className="section-label reveal">Команда</p>
          <h2 className="section-title reveal">
            Люди, которым<br />вы <span style={{ color: 'var(--accent)' }}>доверяете</span> рекламу
          </h2>

          <div className="team-grid">
            {[
              { initial: 'П', photo: '/pavel.jpg', name: 'Павел', role: 'Инноватор · Тестировщик идей', desc: 'Все технологические прорывы и нестандартные решения рождаются здесь. Тестирует гипотезы первым — пока конкуренты копируют вчерашнее, Павел уже запускает следующее.' },
              { initial: 'А', photo: null,         name: 'Андрей', role: 'Коммуникатор · Развитие', desc: 'Голос агентства и первое лицо для новых клиентов. Умеет слышать задачу бизнеса и превращать её в конкретный результат. Если вы здесь — скорее всего, именно Андрей привёл вас сюда.' },
              { initial: 'Ю', photo: '/yuri.jpg',  name: 'Юрий', role: 'Операционный директор', desc: 'Управляет агентством изнутри. Под его руководством запускаются и ведутся все рекламные кампании — от первого созвона до финального отчёта.' },
            ].map((m, i) => (
              <div className={`team-card reveal reveal-delay-${i + 1}`} key={i}>
                {m.photo ? (
                  <div className="team-photo-wrap">
                    <img src={m.photo} alt={`${m.name} — ${m.role}, команда Постор`} className="team-photo" />
                  </div>
                ) : (
                  <div className="team-avatar">{m.initial}</div>
                )}
                <div className="team-info">
                  <h3 className="team-name">{m.name}</h3>
                  <p className="team-role">{m.role}</p>
                  <p className="team-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About — компетенции */}
      <section id="about" className="about-section section-padding" ref={aboutRef}>
        <div className="container">
          <div className="about-grid">

            {/* Левая колонка */}
            <div className="about-text reveal">
              <p className="section-label" style={{ color: 'var(--gray-text)' }}>Работаем с 2015 года</p>
              <h2 className="section-title" style={{ color: 'var(--white)', marginBottom: '1.5rem' }}>
                Мы не агентство.<br /><span style={{ color: 'var(--accent)' }}>Мы — практики.</span>
              </h2>


              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', fontWeight: 500, lineHeight: 1.6 }}>
                Нанимая нас, вы нанимаете команду с собственным цехом, действующим пабликом и живыми кейсами — не теоретиков, которые вчера рекламировали пиццу. Знаем изнутри: когда сезон, где теряются заявки и почему клиент звонит — или не звонит.
              </p>
            </div>

            {/* Правая колонка — карточки */}
            <div className="about-cards">
              {cards.map((card, i) => (
                <div className={`about-card reveal reveal-delay-${i + 1}`} key={i}>
                  <div className="about-card-icon">{card.icon}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <h4>{card.title}</h4>
                    <p style={{ margin: 0 }}>{card.desc}</p>
                    {/* Выгода для клиента */}
                    <p style={{
                      margin: 0,
                      color: 'var(--accent)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      lineHeight: 1.4,
                      paddingTop: '0.35rem',
                      borderTop: '1px solid rgba(206,241,68,0.2)',
                    }}>→ {card.benefit}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
