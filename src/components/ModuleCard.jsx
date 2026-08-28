import { useState } from 'react';
import { STATUS_LABELS } from '../data/modules.js';

const T = {
  serif: '"Newsreader", "Times New Roman", Georgia, serif',
  mono: '"IBM Plex Mono", ui-monospace, Consolas, monospace',
};

function Badge({ status }) {
  const label = STATUS_LABELS[status];
  if (!label) return null;
  return (
    <span
      style={{
        fontFamily: T.mono,
        fontSize: 9.5,
        letterSpacing: '0.14em',
        color: 'var(--ink3)',
        textTransform: 'uppercase',
        border: `1px ${status === 'upcoming' ? 'dashed' : 'solid'} var(--rule)`,
        borderRadius: 5,
        padding: '3px 9px',
        flexShrink: 0,
      }}
    >
      {label}
    </span>
  );
}

function Arrow({ visible }) {
  return (
    <div
      style={{
        position: 'absolute',
        right: 4,
        top: '50%',
        transform: `translateY(-50%) translateX(${visible ? 0 : -6}px)`,
        opacity: visible ? 1 : 0,
        transition: 'all .22s cubic-bezier(.2,.7,.3,1)',
        color: 'var(--accentCard)',
        display: 'flex',
        alignItems: 'center',
        pointerEvents: 'none',
      }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </div>
  );
}

export default function ModuleCard({ mod, mobile = false }) {
  const [hover, setHover] = useState(false);
  const active = mod.status === 'active';
  const accent = mod.accent || '#8b7355';

  const content = (
    <>
      <div style={{ minWidth: 0 }}>
        <div
          style={{
            fontFamily: T.serif,
            fontSize: 22,
            color: active ? 'var(--ink)' : 'var(--ink2)',
            lineHeight: 1.16,
          }}
        >
          {mod.name}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginTop: 9, flexWrap: 'wrap' }}>
          {mod.subtitle && (
            <span
              style={{
                fontFamily: T.mono,
                fontSize: 11,
                letterSpacing: '0.04em',
                color: 'var(--ink3)',
              }}
            >
              {mod.subtitle}
            </span>
          )}
          <Badge status={mod.status} />
        </div>
      </div>
      {active && <Arrow visible={hover} />}
    </>
  );

  const baseStyle = {
    '--accentCard': accent,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    overflow: 'hidden',
    background: active ? (hover ? `${accent}14` : 'var(--paper)') : 'var(--bgSoft)',
    border: '1px solid var(--rule)',
    borderLeft: `4px solid ${active ? accent : 'var(--ruleSoft)'}`,
    borderRadius: 12,
    padding: mobile ? '18px 16px' : '22px 26px',
    minHeight: mobile ? 84 : 100,
    boxSizing: 'border-box',
    transform: hover && active ? 'translateY(-2px)' : 'none',
    boxShadow:
      hover && active
        ? '0 14px 30px -18px rgba(44,38,32,0.45)'
        : '0 1px 0 rgba(255,255,255,0.5) inset',
    transition: 'all .22s cubic-bezier(.2,.7,.3,1)',
    userSelect: 'none',
    textDecoration: 'none',
    opacity: active ? 1 : 0.75,
  };

  if (active) {
    return (
      <a
        href={mod.url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ ...baseStyle, cursor: 'pointer' }}
      >
        {content}
      </a>
    );
  }

  return (
    <div aria-disabled="true" style={{ ...baseStyle, cursor: 'default' }}>
      {content}
    </div>
  );
}
