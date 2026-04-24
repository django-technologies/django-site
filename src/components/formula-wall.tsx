type FormulaWallProps = {
  className?: string;
  decorative?: boolean;
  variant?: 'default' | 'subtle' | 'hero';
};

// Used by the default (full-page) variant
const FORMULAS = [
  'F = ma',
  'E = mc²',
  'V = IR',
  'pV = nRT',
  'r = μ + βf',
  'σ²',
  'Var(r)',
  '∑w = 1',
  'wᵀΣw',
  'PV = ∑ CFₜ/(1+r)ᵗ',
  'rₜ = α+βfₜ',
  'dS = μSdt + σSdW',
  'dX = κ(θ−X)dt + σdW',
  'N(0,1)',
  'z = (x−μ)/σ',
  'Φ(z)',
  'logit = 1/(1+e^{−x})',
  'softmax = eᶻ/∑eᶻ',
  'KL = ∑ p log(p/q)',
  '(XᵀX+λI)β = Xᵀy',
  'Σv = λv',
  'X = UΣVᵀ',
  'ρ = Σxy/(σxσy)',
  '∫eˣdx = eˣ',
  'eˣ ≈ 1+x',
  'sin²+cos²=1',
  '∇·E = ρ/ε₀',
  '∇×E = −∂B/∂t',
  'ω = 2πf',
  'SNR = μ/σ',
  'π ≈ 3.1416',
  'Sharpe = μ/σ',
  'F = ma',
  'E = mc²',
  'V = IR',
  'pV = nRT',
  'r = μ + βf',
  'σ²',
  'Var(r)',
  '∑w = 1',
];

// Curated quant/stats formulas for the hero variant
const HERO_FORMULAS = [
  'r = μ + βf',
  'σ²ₚ = wᵀΣw',
  'Sharpe = μ/σ',
  'dS = μSdt + σSdW',
  'N(0,1)',
  'z = (x−μ)/σ',
  'Φ(z)',
  '∑w = 1',
  'β = Cov/σ²ₘ',
  'E[r]',
  'VaR(α)',
  'rₜ = α + βfₜ',
  'dX = κ(θ−X)dt',
  'X = UΣVᵀ',
  'ρ = Σxy/(σxσy)',
  '(XᵀX+λI)β = Xᵀy',
  'Σv = λv',
  'P(r>0)',
  'argmin L(θ)',
  'KL = ∑p log(p/q)',
  'log P(x|θ)',
  '∂L/∂θ',
  'Var(r)',
  'CVaR',
  'E[X|Y]',
  'Cov(rᵢ,rₘ)',
  'βᵀx',
  'Σ⁻¹μ',
  'IC = corr(s,r)',
  'rank(xₜ)',
  'EWMA(σ²)',
  'Q = XᵀWX',
  '∇L(θ)=0',
  'Pₜ = E[CFₜ]',
  'λ = risk',
  'signal / noise',
  'drawdown',
  'τ = rebalance',
];

export default function FormulaWall({
  className,
  decorative = false,
  variant = 'default',
}: FormulaWallProps) {
  const subtle = variant === 'subtle';
  const hero = variant === 'hero';

  const formulas = hero
    ? HERO_FORMULAS
    : subtle
    ? FORMULAS.filter((_, index) => index % 3 === 0)
    : FORMULAS;

  const width = hero ? 1100 : subtle ? 1000 : 1200;
  const height = hero ? 640 : subtle ? 620 : 700;
  const centerX = width * (hero ? 0.44 : subtle ? 0.58 : 0.7);
  const centerY = height * (subtle || hero ? 0.5 : 0.48);

  const seed = 2025;
  const rand = (value: number) => {
    const x = Math.sin((value + seed) * 127.1) * 43758.5453;
    return x - Math.floor(x);
  };

  const widthFactor = hero ? 0.54 : subtle ? 0.58 : 0.62;
  const heightFactor = subtle || hero ? 1.28 : 1.35;
  const textWidth = (text: string, fontSize: number) => text.length * fontSize * widthFactor;
  const textHeight = (fontSize: number) => fontSize * heightFactor;

  type Node = {
    fontSize: number;
    opacity: number;
    rect: [number, number, number, number];
    text: string;
    x: number;
    y: number;
  };

  const sizeMin = hero ? 15 : subtle ? 16 : 25;
  const sizeMax = hero ? 25 : subtle ? 23 : 35;
  const margin = hero ? 20 : subtle ? 32 : 30;
  const pad = hero ? 8 : subtle ? 10 : 8;
  const maxTries = hero ? 10000 : subtle ? 8000 : 10000;
  const nodes: Node[] = [];

  formulas.forEach((text, index) => {
    const fontSize = sizeMin + Math.floor(rand(index + 7) * (sizeMax - sizeMin + 1));
    let placed: Node | null = null;

    for (let attempt = 0; attempt < maxTries; attempt++) {
      const angle = attempt * (subtle || hero ? 0.82 : 0.92) + index * (hero ? 0.51 : 0.37);
      const radiusX =
        22 +
        Math.sqrt(attempt + 1) * (hero ? 31 : subtle ? 32 : 30) +
        rand(index + attempt + 19) * (hero ? 34 : subtle ? 22 : 16);
      const radiusY = radiusX * (hero ? 0.68 : subtle ? 0.72 : 0.8);
      const rawX = centerX + radiusX * Math.cos(angle) + (rand(index + attempt + 21) - 0.5) * (hero ? 18 : 10);
      const rawY = centerY + radiusY * Math.sin(angle) + (rand(index + attempt + 22) - 0.5) * (hero ? 14 : 8);

      const w = textWidth(text, fontSize);
      const h = textHeight(fontSize);
      const x = rawX - w / 2;
      const y = rawY + h * 0.35;

      const rect: [number, number, number, number] = [x - pad, y - h - pad, x + w + pad, y + pad];

      if (rect[0] < margin || rect[2] > width - margin || rect[1] < margin || rect[3] > height - margin) {
        continue;
      }

      let collides = false;
      for (const node of nodes) {
        const other = node.rect;
        if (!(rect[2] < other[0] || rect[0] > other[2] || rect[3] < other[1] || rect[1] > other[3])) {
          collides = true;
          break;
        }
      }
      if (collides) continue;

      const distance = Math.hypot(rawX - centerX, rawY - centerY);
      const centerBoost =
        subtle || hero
          ? 0
          : distance < width * 0.12
          ? 0.1
          : distance < width * 0.2
          ? 0.06
          : 0;

      // hero: fill is fully opaque (rgba 1.0), so opacity IS the final visual alpha (0.22–0.38)
      // subtle: fill has 0.82 alpha, effective visual = 0.82 × opacity → base 0.09 gives ~7.4%
      // default: fill is brand-black, opacity 0.34–0.50 + centerBoost
      const opacity = hero
        ? 0.22 + rand(index + 3) * 0.16
        : subtle
        ? 0.09 + rand(index + 3) * 0.07
        : 0.34 + rand(index + 3) * 0.16 + centerBoost;

      placed = { fontSize, opacity, rect, text, x, y };
      break;
    }

    if (placed) nodes.push(placed);
  });

  // Dot grid for hero variant (pre-computed, deterministic)
  const dotCols = hero ? Array.from({ length: 15 }, (_, i) => 34 + i * 74) : [];
  const dotRows = hero ? Array.from({ length: 10 }, (_, i) => 42 + i * 62) : [];
  const gridCols = hero ? Array.from({ length: 8 }, (_, i) => 92 + i * 126) : [];
  const gridRows = hero ? Array.from({ length: 5 }, (_, i) => 92 + i * 112) : [];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio={hero ? 'xMinYMid slice' : subtle ? 'xMidYMid slice' : 'none'}
      className={['block h-full w-full', className].filter(Boolean).join(' ')}
      role={decorative ? undefined : 'img'}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : 'Nuvem de micro-formulas'}
      style={{ background: 'transparent' }}
    >
      {hero && (
        <>
          <g stroke="rgba(5,5,5,0.045)" strokeWidth="0.75">
            {gridCols.map((x) => (
              <line key={`vx-${x}`} x1={x} y1="32" x2={x} y2="608" />
            ))}
            {gridRows.map((y) => (
              <line key={`hy-${y}`} x1="28" y1={y} x2="1072" y2={y} />
            ))}
          </g>

          <path
            d="M112 434 C238 365 304 424 416 342 S650 260 790 316 S960 356 1040 288"
            fill="none"
            stroke="rgba(5,5,5,0.085)"
            strokeWidth="1"
          />
          <path
            d="M152 248 C252 206 330 234 436 202 S642 156 784 208"
            fill="none"
            stroke="rgba(81,214,59,0.18)"
            strokeWidth="1.2"
          />

          <g fill="rgba(5,5,5,0.12)">
            {dotRows.flatMap((y) =>
              dotCols.map((x) => (
                <circle key={`d${x}-${y}`} cx={x} cy={y} r={1.35} />
              ))
            )}
          </g>

          <g fill="rgba(81,214,59,0.34)">
            <circle cx="210" cy="228" r="2" />
            <circle cx="494" cy="356" r="1.8" />
            <circle cx="742" cy="204" r="2.2" />
            <circle cx="906" cy="424" r="1.7" />
          </g>
        </>
      )}

      <g
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fill={
          hero
            ? 'rgba(5,5,5,1)'          // fully opaque: opacity attribute IS the final alpha
            : subtle
            ? 'rgba(5, 5, 5, 0.82)'    // effective alpha = 0.82 × opacity
            : 'var(--brand-black)'
        }
      >
        {nodes.map(({ x, y, fontSize, opacity, text }, index) => (
          <text
            key={index}
            x={x}
            y={y}
            fontSize={fontSize}
            opacity={opacity}
            style={{ letterSpacing: subtle || hero ? '0.03em' : '0.01em' }}
          >
            {text}
          </text>
        ))}
      </g>
    </svg>
  );
}
