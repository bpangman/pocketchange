import { useState } from 'react';

// Shows the real Clearbit logo, falls back to emoji if it fails to load.
export default function OrgLogo({ nonprofit, size = 14, className = '', rounded = '2xl' }) {
  const [failed, setFailed] = useState(false);

  const px = `${size * 4}px`; // size is in Tailwind units (e.g. 14 → 56px)

  if (nonprofit.logoUrl && !failed) {
    return (
      <div
        className={`flex items-center justify-center bg-white overflow-hidden rounded-${rounded} ${className}`}
        style={{ width: px, height: px, padding: '10%' }}
      >
        <img
          src={nonprofit.logoUrl}
          alt={nonprofit.name}
          className="w-full h-full object-contain"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  // Emoji fallback
  return (
    <div
      className={`flex items-center justify-center rounded-${rounded} ${className}`}
      style={{ width: px, height: px, background: nonprofit.brand?.accentLight ?? '#f3f4f6' }}
    >
      <span style={{ fontSize: `${size * 4 * 0.45}px` }}>{nonprofit.logo}</span>
    </div>
  );
}
