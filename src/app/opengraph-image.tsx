import { ImageResponse } from 'next/og';

export const alt = 'Django AI — by Django Technologies. Inteligência de mercado e pesquisa quantitativa em um só app.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const BAR = 'linear-gradient(180deg, #58d93f 0%, #4b4f4c 100%)';

/* Pilar claro com luz verde na borda direita, como no key visual da marca. */
function Pillar({ height }: { height: number }) {
  return (
    <div
      style={{
        display: 'flex',
        width: 120,
        height,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        background: 'linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.85) 55%, rgba(244,244,241,0) 100%)',
        borderRight: '2px solid rgba(81,214,59,0.75)',
        borderTop: '2px solid rgba(81,214,59,0.35)',
        boxShadow: '-24px 24px 60px rgba(5,5,5,0.08)',
      }}
    />
  );
}

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          background: 'linear-gradient(180deg, #f7f7f4 0%, #ecece8 100%)',
          color: '#050505',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ position: 'absolute', right: 70, bottom: 0, display: 'flex', alignItems: 'flex-end', gap: 34 }}>
          <Pillar height={300} />
          <Pillar height={400} />
          <Pillar height={500} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '72px 80px', width: 760 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                gap: 5,
                width: 56,
                height: 56,
                padding: '13px 12px 12px',
                borderRadius: 14,
                background: '#f4f3ee',
                border: '1px solid rgba(5,5,5,0.08)',
              }}
            >
              <div style={{ display: 'flex', flex: 1, height: 15, borderRadius: 6, background: BAR }} />
              <div style={{ display: 'flex', flex: 1, height: 22, borderRadius: 6, background: BAR }} />
              <div style={{ display: 'flex', flex: 1, height: 30, borderRadius: 6, background: BAR }} />
            </div>
            <div style={{ display: 'flex', fontSize: 30, fontWeight: 700 }}>Django AI</div>
            <div style={{ display: 'flex', fontSize: 24, color: 'rgba(5,5,5,0.55)' }}>by Django Technologies</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: 62, fontWeight: 700, lineHeight: 1.06, letterSpacing: -1.5 }}>
              <span>Inteligência de mercado e pesquisa quantitativa&nbsp;</span>
              <span style={{ color: '#3f7a1a' }}>em um só app.</span>
            </div>
            <div style={{ display: 'flex', marginTop: 26, fontSize: 24, color: 'rgba(5,5,5,0.62)' }}>
              Top Ações · Análise por ativo · Notícias · Educacional
            </div>
          </div>

          <div style={{ display: 'flex', fontSize: 16, letterSpacing: 6, color: 'rgba(5,5,5,0.55)' }}>DJANGOTECHNOLOGIES.COM</div>
        </div>
      </div>
    ),
    size,
  );
}
