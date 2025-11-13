// components/formula-wall.tsx
// Nuvem minimal de micro-fórmulas — MAIOR e sem overlaps.
// Sem fundo, sem rotações; prevenção de colisão robusta.

export default function FormulaWall() {
  const F = [
    "F = ma", "E = mc²", "V = IR", "pV = nRT",
    "r = μ + βf", "σ²", "Var(r)", "∑w = 1",
    "wᵀΣw", "PV = Σ CFₜ/(1+r)ᵗ", "rₜ = α+βfₜ",
    "dS = μSdt + σSdW", "dX = κ(θ−X)dt + σdW",
    "N(0,1)", "z = (x−μ)/σ", "Φ(z)",
    "logit = 1/(1+e^{−x})", "softmax = eᶻ/Σeᶻ",
    "KL = Σ p log(p/q)", "(XᵀX+λI)β = Xᵀy",
    "Σv = λv", "X = UΣVᵀ", "ρ = Σxy/(σxσy)",
    "∫eˣdx = eˣ", "eˣ ≈ 1+x", "sin²+cos²=1",
    "∇·E = ρ/ε₀", "∇×E = −∂B/∂t", "ω = 2πf",
    "SNR = μ/σ", "π ≈ 3.1416", "Sharpe = μ/σ",
     "F = ma", "E = mc²", "V = IR", "pV = nRT",
    "r = μ + βf", "σ²", "Var(r)", "∑w = 1",
  ];

  // Canvas e centro da nuvem (mais à direita)
  const W = 1200, H = 700;
  const cx = W * 0.70;
  const cy = H * 0.48;

  // Seed fixa → determinístico
  const SEED = 2025;
  const rand = (s: number) => {
    const x = Math.sin((s + SEED) * 127.1) * 43758.5453;
    return x - Math.floor(x);
  };

  // Medidas aproximadas do <text> (monospace-like)
  const WIDTH_FACTOR = 0.62;       // ↑ maior p/ evitar sobreposição horizontal
  const HEIGHT_FACTOR = 1.35;      // ↑ por causa de sobrescritos/subscritos
  const textW = (t: string, fs: number) => t.length * fs * WIDTH_FACTOR;
  const textH = (fs: number) => fs * HEIGHT_FACTOR;

  type Node = {
    x: number; y: number; fs: number; op: number; text: string;
    rect: [number, number, number, number];
  };

  // Parâmetros mais “soltos”
  const SIZE_MIN = 25;
  const SIZE_MAX = 35;
  const margin = 30;      // respiro nas bordas
  const pad = 8;         // espaço entre fórmulas
  const maxTries = 10000;   // mais chances para achar lugar

  const nodes: Node[] = [];

  F.forEach((text, i) => {
    // tamanhos 16–20 com pequena variação
    let fs = SIZE_MIN + Math.floor(rand(i + 7) * (SIZE_MAX - SIZE_MIN + 1));

    let placed: Node | null = null;

    for (let t = 0; t < maxTries; t++) {
      // espiral elíptica (mais larga, mais baixa)
      const a  = t * 0.92 + i * 0.37;
      const rx = 28 + Math.sqrt(t + 1) * 30 + rand(i + t + 19) * 16;
      const ry = rx * 0.80;
      const x0 = cx + rx * Math.cos(a) + (rand(i + t + 21) - 0.5) * 10;
      const y0 = cy + ry * Math.sin(a) + (rand(i + t + 22) - 0.5) * 8;

      const w = textW(text, fs);
      const h = textH(fs);

      // centraliza
      const x = x0 - w / 2;
      const y = y0 + h * 0.35; // baseline

      const rect: [number, number, number, number] = [
        x - pad, y - h - pad, x + w + pad, y + pad,
      ];

      // limites
      if (rect[0] < margin || rect[2] > W - margin || rect[1] < margin || rect[3] > H - margin) continue;

      // colisão (AABB)
      let collide = false;
      for (const n of nodes) {
        const r2 = n.rect;
        if (!(rect[2] < r2[0] || rect[0] > r2[2] || rect[3] < r2[1] || rect[1] > r2[3])) {
          collide = true; break;
        }
      }
      if (collide) continue;

      // opacidade: leve boost no miolo, sem exagero
      const dist = Math.hypot(x0 - cx, y0 - cy);
      const centerBoost = dist < (W * 0.12) ? 0.10 : dist < (W * 0.20) ? 0.06 : 0;
      const op = 0.34 + (rand(i + 3) * 0.16) + centerBoost; // 0.34–0.60

      placed = { x, y, fs, op, text, rect };
      break;
    }

    // Se não coube sem overlap, simplesmente pula (melhor do que encolher ou sobrepor)
    if (placed) nodes.push(placed);
  });

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="block h-full w-full"
      role="img"
      aria-label="Nuvem de micro-fórmulas (sem fundo, sem sobreposição)"
      style={{ background: 'transparent' }}
    >
      <g
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fill="var(--brand-black)"
      >
        {nodes.map(({ x, y, fs, op, text }, idx) => (
          <text
            key={idx}
            x={x}
            y={y}
            fontSize={fs}
            opacity={op}
            style={{ letterSpacing: '0.01em' }}
          >
            {text}
          </text>
        ))}
      </g>
    </svg>
  );
}
