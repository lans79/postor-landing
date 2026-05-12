import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import logo from '../assets/logo.svg'
import { SocialRow } from './SocialIcons'

const PHONE = '+79028689293'
const PHONE_DISPLAY = '+7 902 868-92-93'
const TG_MANAGER = 'https://t.me/postorrr_manager'
const TG_BOT_TOKEN = '8519318557:AAHxxeUhIcxA9V9aK_Gn2FlaUkhbvFoIeG0'
const TG_CHAT_ID = '6702393588'

const NICHES = ['Химчистка ковров', 'Выездной клининг', 'Прачечная / Стирка', 'Уборка квартир', 'Другое']
const CHANNELS = ['Позвоните мне', 'Напишите в Telegram', 'Напишите в Макс']

const AUDIT_ITEMS = [
  'Разбираем вашу группу VK или сайт — находим слабые места в упаковке и контенте',
  'Смотрим как вы общаетесь с клиентами в диалогах — часто там теряется половина заявок',
  'Проводим разговор с вами — выявляем боли, цели и что уже пробовали в рекламе',
  'Готовим конкретный план с каналами, форматами и прогнозом стоимости лида',
]

async function sendToTelegram(data) {
  const text = `🔔 Новая заявка с сайта Постор\n\n👤 Имя: ${data.name}\n📞 Телефон: ${data.phone}\n🏢 Ниша: ${data.niche || '—'}\n📍 Город: ${data.city || '—'}\n💬 Связь: ${data.contact || '—'}\n🔗 Группа ВК: ${data.vk || '—'}`
  if (TG_BOT_TOKEN === 'YOUR_BOT_TOKEN') { console.log('Telegram заглушка:', text); return true }
  const res = await fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: TG_CHAT_ID, text }),
  })
  return res.ok
}

export default function ContactForm() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', phone: '', city: '', niche: '', contact: CHANNELS[0], vk: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const ok = await sendToTelegram(form)
    setStatus(ok ? 'success' : 'error')
  }

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  return (
    <footer id="contact" className="section-padding" ref={ref}>
      <div className="container">
        <div className="contact-box reveal">

          {/* Левая колонка */}
          <div className="contact-info">
            <p className="section-label" style={{ marginBottom: '1rem' }}>Обсудить проект</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
              Получите<br />бесплатный<br />аудит
            </h2>
            <a href={`tel:${PHONE}`} className="contact-phone">{PHONE_DISPLAY}</a>

            {/* Что входит в аудит */}
            <div className="audit-list">
              <p className="audit-list__title">Что входит в аудит:</p>
              {AUDIT_ITEMS.map((text, i) => (
                <div className="audit-item" key={i}>
                  <span className="audit-item__num">0{i + 1}</span>
                  <span className="audit-item__text">{text}</span>
                </div>
              ))}
              <p className="audit-free">Бесплатно · Без обязательств · ~30 минут</p>
            </div>
          </div>

          {/* Правая колонка — форма */}
          {status === 'success' ? (
            <div className="contact-form-wrap contact-success">
              <div className="success-icon">✓</div>
              <h3 className="success-title">Заявка принята!</h3>
              <p className="success-text">
                Мы уже получили вашу заявку. Менеджер свяжется в течение часа.
              </p>
              <a href={TG_MANAGER} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: '1rem', width: '100%', textAlign: 'center' }}>
                Написать напрямую в Telegram →
              </a>
              <p style={{ color: 'var(--gray-text)', fontSize: '0.8rem', textAlign: 'center', marginTop: '1rem' }}>
                Хотите быстрее? Нажмите кнопку выше — ответим за 5 минут.
              </p>
            </div>
          ) : (
            <form className="contact-form-wrap" onSubmit={handleSubmit}>
              <input type="text" placeholder="Ваше имя или название цеха" required value={form.name} onChange={set('name')} />
              <input type="tel" placeholder="Телефон" required inputMode="tel" pattern="[\d\s\+\-\(\)]{7,20}" title="Введите номер телефона" value={form.phone} onChange={set('phone')} />

              <div className="form-row">
                <select value={form.niche} onChange={set('niche')} className="form-select">
                  <option value="">Ваша ниша</option>
                  {NICHES.map(n => <option key={n} value={n}>{n}</option>)}
                </select>
                <input type="text" placeholder="Ваш город" value={form.city} onChange={set('city')} />
              </div>

              {/* Удобный канал */}
              <div className="contact-channels">
                <p className="contact-channels__label">Как удобнее связаться? <span style={{ fontWeight: 400, opacity: 0.6, fontSize: '0.85em' }}>(выберите один вариант)</span></p>
                <div className="contact-channels__list">
                  {CHANNELS.map(ch => (
                    <label key={ch} className={`channel-chip ${form.contact === ch ? 'active' : ''}`}>
                      <input type="radio" name="contact" value={ch} checked={form.contact === ch} onChange={set('contact')} style={{ display: 'none' }} />
                      {ch}
                    </label>
                  ))}
                </div>
              </div>

              {status === 'error' && (
                <p style={{ color: '#c0392b', fontSize: '0.875rem' }}>
                  Ошибка отправки. <a href={TG_MANAGER} style={{ textDecoration: 'underline' }}>Напишите нам напрямую →</a>
                </p>
              )}

              <button type="submit" className="btn-primary" disabled={status === 'sending'} style={{ width: '100%', padding: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem' }}>
                {status === 'sending' ? 'Отправляем...' : 'Получить бесплатный аудит'}
              </button>
              <p className="consent">
                Нажимая кнопку, вы соглашаетесь с{' '}
                <a href="/privacy.html">политикой конфиденциальности</a> и{' '}
                <a href="/offer.html">договором оферты</a>
              </p>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="footer-bottom">
          <div>
            <a href="#" style={{ display: 'inline-block' }}>
              <img src={logo} alt="Постор" style={{ height: 24, width: 'auto' }} />
            </a>
            <p className="footer-copy">© {new Date().getFullYear()} Постор. Все права защищены.<br />ИП Федосов Павел Николаевич · ИНН 745307107068<br /><span style={{ fontSize: '0.7rem', color: 'var(--gray-text)', opacity: 0.6 }}>Реклама · erid: 5544043491</span></p>
            <div style={{ marginTop: '1rem' }}>
              <SocialRow size={34} />
            </div>
          </div>
          <div className="footer-links">
            <a href="/privacy.html">Политика конфиденциальности</a>
            <a href="/offer.html">Договор оферты</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
