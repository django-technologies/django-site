'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  left: React.ReactNode;
  right: React.ReactNode;
};

/**
 * Mantém duas colunas com a MESMA ALTURA.
 * Mede a altura do bloco da esquerda e aplica na direita.
 */
export default function Equalize({ left, right }: Props) {
  const leftRef = useRef<HTMLDivElement>(null);
  const [h, setH] = useState<number | null>(null);

  useEffect(() => {
    if (!leftRef.current) return;
    const el = leftRef.current;

    const update = () => setH(el.getBoundingClientRect().height);
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener('resize', update);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-10 items-start">
      <div ref={leftRef} className="md:basis-1/2 md:shrink-0">
        {left}
      </div>
      <div
        className="md:basis-1/2 md:shrink min-w-0 w-full"
        style={h ? { height: h } as React.CSSProperties : undefined}
      >
        {/* enquanto mede, não ocupa espaço indevido */}
        <div className="w-full h-full">
          {right}
        </div>
      </div>
    </div>
  );
}
