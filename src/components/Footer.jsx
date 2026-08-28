const T = {
  mono: '"IBM Plex Mono", ui-monospace, Consolas, monospace',
};

export default function Footer({ mobile = false }) {
  return (
    <footer
      style={{
        flexShrink: 0,
        borderTop: '1px solid var(--rule)',
        padding: mobile ? '16px' : '18px 40px',
        paddingBottom: `calc(${mobile ? '16px' : '18px'} + env(safe-area-inset-bottom))`,
        textAlign: 'center',
        background: 'var(--paper)',
      }}
    >
      <span
        style={{
          fontFamily: T.mono,
          fontSize: 10.5,
          letterSpacing: '0.16em',
          color: 'var(--ink3)',
          textTransform: 'uppercase',
        }}
      >
        Formation uniquement — aucune donnée patient
      </span>
    </footer>
  );
}
