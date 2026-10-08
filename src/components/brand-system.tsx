/**
 * Elementos do sistema visual da Django, extraídos das peças institucionais da marca
 * (key visual "Data. Technology. Advantage.", ícone do app e logotipo):
 *
 * - Pillars: as três colunas ascendentes do símbolo, em vidro claro com luz verde na borda direita;
 * - Pins: hastes finas com terminal verde (marcadores de dado);
 * - Crosshair: pequenas cruzes de grid;
 * - MeshWave: superfície de linhas finas;
 * - Eyebrow: rótulo em caixa alta com tracking largo, como a assinatura da marca;
 * - BrandSymbol: o símbolo no formato do ícone do app.
 */

export function Eyebrow({
  children,
  tone = 'dark',
  className = '',
}: {
  children: React.ReactNode;
  tone?: 'dark' | 'light';
  className?: string;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] ${
        tone === 'dark' ? 'text-[color:rgb(5_5_5_/_62%)]' : 'text-white/55'
      } ${className}`}
    >
      <span className="relative flex h-3 w-[5px] flex-col items-center" aria-hidden="true">
        <span className="h-[5px] w-[5px] rounded-full bg-[var(--brand-green)]" />
        <span className={`w-px flex-1 ${tone === 'dark' ? 'bg-[color:rgb(5_5_5_/_25%)]' : 'bg-white/30'}`} />
      </span>
      {children}
    </p>
  );
}

export function Pillars({
  className = '',
  tone = 'light',
  heights = [56, 78, 100],
}: {
  className?: string;
  tone?: 'light' | 'dark';
  heights?: [number, number, number];
}) {
  const pillar = tone === 'light' ? 'dj-pillar' : 'dj-pillar dj-pillar--dark';
  return (
    <div className={`flex items-end gap-[7%] ${className}`} aria-hidden="true">
      {heights.map((h, i) => (
        <span key={i} className={`${pillar} flex-1`} style={{ height: `${h}%` }} />
      ))}
    </div>
  );
}

type Pin = { left: string; top: string; height: number; muted?: boolean };

export function Pins({ pins, tone = 'light', className = '' }: { pins: Pin[]; tone?: 'light' | 'dark'; className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      {pins.map((pin, i) => (
        <span key={i} className="absolute flex flex-col items-center" style={{ left: pin.left, top: pin.top, height: pin.height }}>
          <span className={`h-[5px] w-[5px] shrink-0 rounded-full ${pin.muted ? (tone === 'light' ? 'bg-[color:rgb(5_5_5_/_22%)]' : 'bg-white/25') : 'bg-[var(--brand-green)]'}`} />
          <span className={`w-px flex-1 ${tone === 'light' ? 'bg-gradient-to-b from-[color:rgb(5_5_5_/_18%)] to-transparent' : 'bg-gradient-to-b from-white/25 to-transparent'}`} />
        </span>
      ))}
    </div>
  );
}

export function Crosshair({ className = '', tone = 'light' }: { className?: string; tone?: 'light' | 'dark' }) {
  return (
    <svg viewBox="0 0 10 10" className={`pointer-events-none absolute h-2.5 w-2.5 ${className}`} aria-hidden="true">
      <path d="M5 0v10M0 5h10" stroke={tone === 'light' ? '#050505' : '#ffffff'} strokeOpacity="0.3" strokeWidth="1" />
    </svg>
  );
}

/* Superfície de linhas finas: curvas paralelas deslocadas, calculadas uma vez. */
const MESH_PATHS = Array.from({ length: 14 }, (_, i) => {
  const t = i / 13;
  const y0 = 300 - t * 150;
  const amp = 40 + t * 70;
  const pts: string[] = [];
  for (let x = 0; x <= 1200; x += 40) {
    const y = y0 - amp * Math.sin((x / 1200) * Math.PI * 0.9 + t * 0.8) - (x / 1200) * 120 * t;
    pts.push(`${x === 0 ? 'M' : 'L'}${x} ${y.toFixed(1)}`);
  }
  return pts.join(' ');
});

export function MeshWave({ className = '', tone = 'light' }: { className?: string; tone?: 'light' | 'dark' }) {
  const stroke = tone === 'light' ? '#050505' : '#ffffff';
  return (
    <svg viewBox="0 0 1200 320" preserveAspectRatio="none" className={`pointer-events-none ${className}`} aria-hidden="true">
      {MESH_PATHS.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke={i === 9 ? '#51d63b' : stroke}
          strokeOpacity={i === 9 ? 0.75 : tone === 'light' ? 0.08 : 0.1}
          strokeWidth={i === 9 ? 1.3 : 1}
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}

/** Símbolo no formato do ícone do app: placa clara, colunas em degradê verde → grafite. */
export function BrandSymbol({ className = '', flat = false }: { className?: string; flat?: boolean }) {
  return (
    <span
      className={`relative block shrink-0 rounded-[24%] border border-[color:rgb(5_5_5_/_6%)] bg-[#f4f3ee] ${
        flat ? '' : 'shadow-[0_18px_40px_-18px_rgba(5,5,5,0.35),inset_0_1px_0_#fff]'
      } ${className}`}
      aria-hidden="true"
    >
      <span className="absolute inset-x-[22%] bottom-[22%] top-[24%] flex items-end gap-[12%]">
        <span className="block h-[50%] flex-1 rounded-t-full rounded-b-[2px] bg-gradient-to-b from-[#58d93f] to-[#4b4f4c]" />
        <span className="block h-[75%] flex-1 rounded-t-full rounded-b-[2px] bg-gradient-to-b from-[#58d93f] to-[#4b4f4c]" />
        <span className="block h-full flex-1 rounded-t-full rounded-b-[2px] bg-gradient-to-b from-[#58d93f] to-[#4b4f4c]" />
      </span>
    </span>
  );
}
