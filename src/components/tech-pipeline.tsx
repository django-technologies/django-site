import Image from 'next/image';
import { FACTORS_CROP } from '../lib/product-screens';

/* Pseudo-aleatório determinístico: o mesmo desenho no servidor e no cliente. */
const rand = (i: number) => {
  const x = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
};

function DataMatrix() {
  const cols = 22;
  const rows = 11;
  const hot = new Set([27, 52, 71, 96, 118, 141, 163, 190, 207, 226]);
  return (
    <svg viewBox="0 0 220 110" className="h-full w-full" aria-hidden="true">
      {Array.from({ length: cols * rows }, (_, i) => {
        const x = (i % cols) * 10;
        const y = Math.floor(i / cols) * 10;
        const isHot = hot.has(i);
        return (
          <rect
            key={i}
            x={x + 1.5}
            y={y + 1.5}
            width="7"
            height="7"
            rx="1.5"
            fill={isHot ? '#51d63b' : '#ffffff'}
            fillOpacity={isHot ? 0.95 : 0.05 + rand(i) * 0.17}
          />
        );
      })}
    </svg>
  );
}

function ValidationSketch() {
  const pts = Array.from({ length: 34 }, (_, i) => {
    const x = 6 + i * 6.3;
    const y = 58 - i * 0.9 + (rand(i + 7) - 0.5) * 22;
    return [x, y] as const;
  });
  return (
    <svg viewBox="0 0 220 110" className="h-full w-full" aria-hidden="true">
      <rect x="140" y="4" width="76" height="76" rx="6" fill="#51d63b" fillOpacity="0.07" />
      <line x1="140" x2="140" y1="4" y2="80" stroke="#ffffff" strokeOpacity="0.35" strokeDasharray="3 3" />
      <path d="M6 64 L214 26" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1" />
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.9" fill={x > 140 ? '#51d63b' : '#ffffff'} fillOpacity={x > 140 ? 0.95 : 0.55} />
      ))}
      {[0, 1, 2].map((row) => (
        <g key={row} transform={`translate(${6 + row * 22} ${88 + row * 7})`}>
          <rect width="120" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.22" />
          <rect x="124" width="38" height="3" rx="1.5" fill="#51d63b" fillOpacity="0.9" />
        </g>
      ))}
    </svg>
  );
}

function ContextStructure() {
  const rows = [
    ['Fato', 'O que aconteceu'],
    ['Contexto', 'Por que importa'],
    ['Fontes', 'Bloomberg · Money Times'],
  ];
  return (
    <dl className="flex h-full flex-col justify-center gap-0 text-[12px]">
      {rows.map(([k, v], i) => (
        <div key={k} className={`py-1 lg:grid lg:grid-cols-[4.5rem_minmax(0,1fr)] lg:items-baseline lg:gap-2 lg:py-2 ${i ? 'border-t border-white/10' : ''}`}>
          <dt className="text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--brand-green)] lg:text-[9.5px]">{k}</dt>
          <dd className="truncate text-[11px] text-white/75 lg:whitespace-normal lg:text-[12px]">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function ProductCrop() {
  return (
    <div className="relative h-full overflow-hidden rounded-xl bg-[var(--app-cream)]">
      <Image
        src={FACTORS_CROP.src}
        alt={FACTORS_CROP.alt}
        width={FACTORS_CROP.width}
        height={FACTORS_CROP.height}
        sizes="(max-width: 1024px) 45vw, 260px"
        className="h-auto w-full"
      />
    </div>
  );
}

const STAGES = [
  {
    step: 'Dados',
    body: 'Dados de mercado coletados, tratados e versionados.',
    label: 'Base',
    artifact: <DataMatrix />,
  },
  {
    step: 'Pesquisa e modelos',
    body: 'Hipóteses testadas e modelos validados antes de chegar ao app.',
    label: 'Validação',
    artifact: <ValidationSketch />,
  },
  {
    step: 'Contexto',
    body: 'IA que resume e explica, sempre ligada às fontes.',
    label: 'Estrutura',
    artifact: <ContextStructure />,
  },
  {
    step: 'Produto',
    body: 'Fatores, seleções e notícias no Django AI.',
    label: 'Django AI',
    artifact: <ProductCrop />,
    product: true,
  },
];

export default function TechPipeline() {
  return (
    <ol className="relative grid gap-y-0 lg:grid-cols-4 lg:gap-x-0">
      {/* Trilho contínuo no desktop, atravessando os artefatos */}
      <span className="absolute left-0 right-0 top-[104px] hidden h-px bg-gradient-to-r from-white/15 via-white/30 to-[var(--brand-green)] lg:block" aria-hidden="true" />

      {STAGES.map((stage, i) => (
        <li
          key={stage.step}
          className="relative grid grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] items-center gap-4 border-l border-white/15 py-5 pl-5 lg:block lg:border-l-0 lg:py-0 lg:pl-0 lg:pr-6 lg:last:pr-0"
        >
          {/* nó do trilho no mobile */}
          <span className="absolute -left-[3px] top-1/2 h-[5px] w-[5px] -translate-y-1/2 rounded-full bg-[var(--brand-green)] lg:hidden" aria-hidden="true" />

          <div
            className={`relative h-[118px] overflow-hidden rounded-2xl border p-3 lg:h-[208px] lg:p-4 ${
              stage.product ? 'border-[var(--brand-green)]/40 bg-[var(--brand-black)] p-1.5 lg:p-2' : 'border-white/10 bg-[var(--brand-black)]'
            }`}
          >
            {stage.artifact}
          </div>

          <div className="lg:mt-7">
            <p className="text-[10.5px] font-medium uppercase tracking-[0.24em] text-white/60">
              0{i + 1} · {stage.label}
            </p>
            <h3 className="mt-1.5 font-display text-[19px] font-semibold tracking-[-0.02em] lg:mt-2 lg:text-[22px]">{stage.step}</h3>
            <p className="mt-1.5 max-w-[28ch] text-[14px] leading-[1.5] text-white/[0.6] lg:mt-2 lg:text-[15px]">{stage.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
