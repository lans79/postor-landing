const VK_URL = 'https://vk.com/postorrr'
const TG_URL = 'https://t.me/postorrr'
const MAX_URL = 'https://max.ru/postorrr'

function IconBox({ href, children, size = 36, title }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'var(--gray-light)',
        color: 'var(--primary)',
        flexShrink: 0,
        transition: 'background 0.2s, transform 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'var(--gray-light)'; e.currentTarget.style.transform = 'none' }}
    >
      {children}
    </a>
  )
}

export function VKIcon({ size = 36 }) {
  const ic = size * 0.48
  return (
    <IconBox href={VK_URL} size={size} title="ВКонтакте">
      <svg width={ic} height={ic} viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.566c0 .422-.135.677-1.254.677-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.983 4 8.558c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.717c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.743c.372 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.762-.491h1.744c.525 0 .643.27.525.643-.22 1-.237 1.017-2.134 3.777-.169.254-.237.372 0 .66.17.22.728.745 1.1 1.186.694.762 1.22 1.406 1.372 1.846.152.43-.068.66-.525.66z"/>
      </svg>
    </IconBox>
  )
}

export function TGIcon({ size = 36 }) {
  const ic = size * 0.5
  return (
    <IconBox href={TG_URL} size={size} title="Telegram">
      <svg width={ic} height={ic} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    </IconBox>
  )
}

export function MaxIcon({ size = 36 }) {
  const ic = size * 0.68
  return (
    <IconBox href={MAX_URL} size={size} title="Max">
      <svg width={ic} height={ic} viewBox="0 0 1000 1000" fill="currentColor">
        <path fillRule="evenodd" d="M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z" clipRule="evenodd"/>
      </svg>
    </IconBox>
  )
}

export function SocialRow({ size = 36 }) {
  return (
    <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
      <VKIcon size={size} />
      <TGIcon size={size} />
      <MaxIcon size={size} />
    </div>
  )
}
