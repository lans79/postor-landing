export default function Hero() {
  return (
    <section className="hero">
      <img className="hero-bg-video" src="/fon.jpg" alt="" aria-hidden="true" />
      <div className="hero-bg-overlay" />
      <div className="container hero-content">

        <div className="hero-heading-row">
          <h1 className="hero-anim">
            Реклама для<br />
            <span className="accent">химчисток</span><br />
            которая работает
          </h1>
        </div>

        <div className="hero-bottom hero-anim hero-anim--d1">
          <p className="hero-desc">
            Мы сами в нише: держим цех, ведём паблик и тестируем связки на собственных бюджетах. К вам приходят только проверенные решения — без экспериментов за ваш счёт.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn-primary btn-breathe" style={{ padding: '1.15rem 2.5rem', fontSize: '1.1rem' }}>
              Получить бесплатный аудит →
            </a>
            <a href="#cases" className="btn-outline-text">
              <span>Смотреть кейсы</span>
              <div className="circle-arrow">→</div>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
