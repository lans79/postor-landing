export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-bg-video"
        src="/carpet_2.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
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
            VK Ads и Яндекс Директ для химчисток и клинингов. Собственный цех, паблик 155 000+ и CPL от 291 ₽. Тестируем на своих — к вам приходят рабочие решения.
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
