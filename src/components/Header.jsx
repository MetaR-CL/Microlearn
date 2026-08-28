const T = {
  serif: '"Newsreader", "Times New Roman", Georgia, serif',
  mono: '"IBM Plex Mono", ui-monospace, Consolas, monospace',
};

function Mark({ size = 26 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'var(--accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: T.serif,
          fontStyle: 'italic',
          fontSize: size * 0.6,
          color: 'var(--paper)',
          lineHeight: 1,
        }}
      >
        M
      </span>
    </div>
  );
}

export default function Header({ mobile = false }) {
  return (
    <header
      style={{
        padding: mobile ? '14px 16px' : '22px 40px',
        paddingTop: `calc(${mobile ? '14px' : '22px'} + env(safe-area-inset-top))`,
        borderBottom: '1px solid var(--rule)',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        background: 'var(--paper)',
        flexShrink: 0,
      }}
    >
      <Mark size={26} />
      <span style={{ fontFamily: T.serif, fontStyle: 'italic', fontSize: 22, letterSpacing: '0.01em', color: 'var(--ink)' }}>
        Micro<span style={{ fontWeight: 600, fontStyle: 'normal', color: 'var(--accent)' }}>Learn</span>
      </span>
      {!mobile && (
        <>
          <span style={{ width: 1, height: 22, background: 'var(--rule)', margin: '0 4px' }} />
          <span
            style={{
              fontFamily: T.mono,
              fontSize: 10.5,
              letterSpacing: '0.22em',
              color: 'var(--ink3)',
              textTransform: 'uppercase',
            }}
          >
            Institut de Microbiologie · CHUV
          </span>
        </>
      )}
    </header>
  );
}
