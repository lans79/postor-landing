import { useReveal } from '../hooks/useReveal'

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
              { initial: 'П', name: 'Павел', role: 'Главный технолог', desc: 'Обладатель титула «Лучший коврочист России». Официальный спикер Clean Expo. Гарант того, что реклама будет экспертной — знает технологию изнутри.' },
              { initial: 'А', name: 'Андрей', role: 'Продажи и партнёрство', desc: 'Официальный спикер Clean Expo. Нетворкинг с крупнейшими сетями страны. Проведёт вас в мир системного маркетинга, который приносит реальные заказы.' },
              { initial: 'Ю', name: 'Юрий', role: 'Стратегия', desc: 'Архитектор бизнес-процессов. Строит рекламные системы так, чтобы телефон в цеху не замолкал от входящих заявок.' },
            ].map((m, i) => (
              <div className={`team-card reveal reveal-delay-${i + 1}`} key={i}>
                <div className="team-avatar">{m.initial}</div>
                <h3 className="team-name">{m.name}</h3>
                <p className="team-role">{m.role}</p>
                <p className="team-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About — компетенции */}
      <section id="about" className="about-section section-padding" ref={aboutRef}>
        <div className="container">
          <div className="about-grid">
            <div className="about-text reveal">
              <p className="section-label" style={{ color: 'var(--gray-text)' }}>Работаем с 2015 года</p>
              <h2 className="section-title" style={{ color: 'var(--white)', marginBottom: '2rem' }}>
                Мы не агентство.<br /><span style={{ color: 'var(--accent)' }}>Мы — практики.</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', fontWeight: 500, lineHeight: 1.4 }}>
                Понимаем разницу между «лидом» и «оплаченным заказом», потому что сами платим зарплату мастерам. Знаем операционку изнутри: сезонность пятен, специфику роторной и экстракционной чистки, логику клиента, который звонит в первый раз.
              </p>
            </div>

            <div className="about-cards">
              {[
                {
                  title: 'Дулито — 155 000+ подписчиков',
                  desc: 'Крупнейшая клининговая группа в Рунете. Знаем изнутри, что цепляет аудиторию в нише.',
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
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3M8 22h8"/>
                    </svg>
                  ),
                },
                {
                  title: 'Собственный цех + AI',
                  desc: 'Первые в России внедрили AI-измерения ковров. Рекламу строим на реальной экспертизе, не теории.',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                      <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
                    </svg>
                  ),
                },
                {
                  title: 'Отчёт каждый месяц',
                  desc: 'Только лиды, CPL и бюджет. Никаких охватов и показов вместо реальных цифр.',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
                      <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
                    </svg>
                  ),
                },
              ].map((card, i) => (
                <div className={`about-card reveal reveal-delay-${i + 1}`} key={i}>
                  <div className="about-card-icon">{card.icon}</div>
                  <div>
                    <h4>{card.title}</h4>
                    <p>{card.desc}</p>
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
