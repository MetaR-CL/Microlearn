import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ModuleCard from './components/ModuleCard.jsx';
import { MODULES } from './data/modules.js';
import { useIsMobile } from './hooks/useIsMobile.js';

const T = {
  serif: '"Newsreader", "Times New Roman", Georgia, serif',
};

export default function App() {
  const mobile = useIsMobile();

  return (
    <div
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg)',
        fontFamily: T.serif,
      }}
    >
      <Header mobile={mobile} />

      <div style={{ flex: 1 }}>
        <div
          style={{
            maxWidth: 900,
            margin: '0 auto',
            width: '100%',
            padding: mobile ? '28px 16px 24px' : '56px 40px 40px',
            boxSizing: 'border-box',
          }}
        >
          <p
            style={{
              fontFamily: T.serif,
              fontStyle: 'italic',
              fontSize: mobile ? 17 : 19,
              color: 'var(--ink2)',
              lineHeight: 1.5,
              maxWidth: 620,
              margin: '0 0 40px',
            }}
          >
            Plateforme de formation pour les nouveaux collaborateurs et stagiaires de l’Institut de
            Microbiologie.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: mobile ? '1fr' : '1fr 1fr',
              gap: mobile ? 12 : 18,
            }}
          >
            {MODULES.map((mod) => (
              <ModuleCard key={mod.id} mod={mod} mobile={mobile} />
            ))}
          </div>
        </div>
      </div>

      <Footer mobile={mobile} />
    </div>
  );
}
