const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export const makePlaceholderImage = (
  label: string,
  colors: [string, string] = ['#0f172a', '#2563eb'],
) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800" role="img" aria-label="${escapeXml(label)}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${colors[0]}" />
          <stop offset="100%" stop-color="${colors[1]}" />
        </linearGradient>
        <filter id="blur">
          <feGaussianBlur stdDeviation="48" />
        </filter>
      </defs>
      <rect width="1200" height="800" fill="url(#bg)" rx="40" />
      <circle cx="240" cy="220" r="140" fill="rgba(255,255,255,0.18)" filter="url(#blur)" />
      <circle cx="930" cy="610" r="180" fill="rgba(255,255,255,0.14)" filter="url(#blur)" />
      <rect x="120" y="120" width="960" height="560" rx="32" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" />
      <text x="600" y="365" text-anchor="middle" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="72" font-weight="700">${escapeXml(label)}</text>
      <text x="600" y="445" text-anchor="middle" fill="rgba(255,255,255,0.78)" font-family="Inter, Arial, sans-serif" font-size="28">Portfolio placeholder asset</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

export const makePlaceholderAvatar = (label: string) =>
  makePlaceholderImage(label, ['#111827', '#2563eb']);
