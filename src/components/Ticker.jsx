const items = ['Таргет VK', '•', 'Контекстная реклама', '•', 'Яндекс Карты', '•', 'Авито', '•', 'Продакшн контента', '•', 'Яндекс Бизнес', '•']

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className={item !== '•' && i % 4 === 0 ? 'accent-text' : ''}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
