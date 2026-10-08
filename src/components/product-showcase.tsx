import Image from 'next/image';
import { Crosshair, MeshWave, Pillars, Pins } from './brand-system';
import { SCREENS, type ProductScreen } from '../lib/product-screens';

/**
 * Moldura discreta de iPhone para capturas reais do Django AI.
 * A largura vem de `className`; a altura segue a proporção da captura.
 */
export function DeviceFrame({
  screen,
  className = 'w-[284px]',
  sizes = '284px',
  priority = false,
  hidden = false,
}: {
  screen: ProductScreen;
  className?: string;
  sizes?: string;
  priority?: boolean;
  hidden?: boolean;
}) {
  return (
    <div
      className={`relative shrink-0 rounded-[15.5%/7.2%] bg-[#111211] p-[2.4%] shadow-[0_50px_90px_-40px_rgba(5,5,5,0.5),0_18px_36px_-24px_rgba(5,5,5,0.35),inset_0_0_0_1px_rgba(255,255,255,0.1)] ${className}`}
    >
      <div className="relative aspect-[739/1600] overflow-hidden rounded-[13.5%/6.2%] bg-[var(--app-cream)]">
        <Image
          src={screen.src}
          alt={hidden ? '' : screen.alt}
          aria-hidden={hidden || undefined}
          fill
          sizes={sizes}
          priority={priority}
          quality={90}
          className="object-cover object-top"
        />
        {/* Dynamic Island */}
        <span className="absolute left-1/2 top-[1.3%] h-[3.3%] w-[31%] -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />
      </div>
    </div>
  );
}

const HERO_PINS = [
  { left: '1%', top: '40%', height: 160 },
  { left: '9%', top: '30%', height: 60, muted: true },
  { left: '97%', top: '8%', height: 120, muted: true },
];

export function HeroShowcase() {
  return (
    <figure className="relative mx-auto h-[600px] w-full max-w-[620px] sm:h-[730px]">
      {/* Sistema da marca: os pilares sobem atrás dos devices e aparecem acima deles, como no key visual */}
      <Pillars heights={[74, 87, 100]} className="absolute bottom-[56px] left-[2%] right-0 top-0 sm:bottom-[64px]" />
      <MeshWave className="absolute bottom-[40px] left-0 h-[30%] w-full [mask-image:linear-gradient(90deg,transparent,#000_30%)]" />
      <Pins pins={HERO_PINS} className="hidden sm:block" />
      <Crosshair className="left-[2%] top-[22%] hidden sm:block" />
      <Crosshair className="right-[2%] top-[70%]" />

      {/* Educacional, ao fundo */}
      <div className="absolute left-[3%] top-[220px] z-10 hidden sm:block">
        <div className="dj-float-late">
          <DeviceFrame screen={SCREENS.educacional} className="w-[232px]" sizes="232px" />
        </div>
      </div>

      {/* Tela principal: análise de uma ação (conteúdo durável, sem seleção mensal nem cotação) */}
      <div className="absolute left-1/2 top-[44px] z-20 -translate-x-1/2 sm:left-auto sm:right-[8%] sm:top-[96px] sm:translate-x-0">
        <div className="dj-float">
          <DeviceFrame screen={SCREENS.ativoAnalise} className="w-[244px] sm:w-[280px]" sizes="(max-width: 640px) 244px, 280px" priority />
        </div>
      </div>

      <figcaption className="absolute bottom-0 left-0 right-0 text-center text-[10.5px] font-medium uppercase tracking-[0.28em] text-[color:rgb(5_5_5_/_60%)] sm:text-right">
        Telas reais do Django AI
      </figcaption>
    </figure>
  );
}
