/**
 * Esquema ilustrativo de validação temporal: uma série e janelas deslizantes de treino/validação.
 * Conceitual — não usa dados reais nem mostra resultado.
 */
const rand = (i: number) => {
  const x = Math.sin(i * 91.345 + 3.1) * 15731.743;
  return x - Math.floor(x);
};

const SERIES = (() => {
  let y = 70;
  return Array.from({ length: 61 }, (_, i) => {
    y += (rand(i) - 0.47) * 9;
    y = Math.max(22, Math.min(96, y));
    return `${i === 0 ? 'M' : 'L'}${(i * 8).toFixed(0)} ${y.toFixed(1)}`;
  }).join(' ');
})();

const WINDOWS = [0, 1, 2, 3, 4];

export default function ResearchFigure() {
  return (
    <figure className="rounded-[24px] border border-[color:rgb(5_5_5_/_8%)] bg-white p-5 shadow-[0_30px_60px_-45px_rgba(5,5,5,0.35)] md:p-6">
      <div className="flex items-center justify-between text-[10.5px] font-medium uppercase tracking-[0.22em] text-[color:rgb(5_5_5_/_64%)]">
        <span>Validação temporal</span>
        <span className="flex items-center gap-3 normal-case tracking-normal">
          <span className="flex items-center gap-1.5">
            <span className="h-[3px] w-4 rounded-full bg-[color:rgb(5_5_5_/_22%)]" />
            treino
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-[3px] w-4 rounded-full bg-[var(--app-green)]" />
            validação
          </span>
        </span>
      </div>

      <svg viewBox="0 0 480 190" className="mt-4 h-auto w-full" role="img" aria-label="Esquema de série temporal com janelas deslizantes de treino e validação">
        {[30, 60, 90].map((y) => (
          <line key={y} x1="0" x2="480" y1={y} y2={y} stroke="#050505" strokeOpacity="0.06" />
        ))}
        <path d={SERIES} fill="none" stroke="#050505" strokeOpacity="0.75" strokeWidth="1.3" strokeLinejoin="round" />
        {WINDOWS.map((w) => {
          const y = 118 + w * 14;
          const start = w * 56;
          return (
            <g key={w}>
              <rect x="0" y={y} width="480" height="4" rx="2" fill="#050505" fillOpacity="0.04" />
              <rect x={start} y={y} width="200" height="4" rx="2" fill="#050505" fillOpacity="0.2" />
              <rect x={start + 204} y={y} width="52" height="4" rx="2" fill="#649428" />
            </g>
          );
        })}
        <line x1="256" x2="256" y1="8" y2="104" stroke="#649428" strokeOpacity="0.5" strokeDasharray="3 3" />
      </svg>

      <figcaption className="mt-4 text-[12.5px] leading-5 text-[color:rgb(5_5_5_/_58%)]">
        Esquema ilustrativo: cada modelo é estimado com uma janela do passado e avaliado no período seguinte,
        fora dessa janela.
      </figcaption>
    </figure>
  );
}
