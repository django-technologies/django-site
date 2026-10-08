'use client';

import { useRef, useState } from 'react';
import { DeviceFrame } from './product-showcase';
import { Pins } from './brand-system';
import { SCREENS, type ProductScreen } from '../lib/product-screens';

type Feature = { key: string; title: string; short: string; body: string; screen: ProductScreen };

const FEATURES: Feature[] = [
  {
    key: 'top',
    title: 'Top Ações',
    short: 'Top Ações',
    body: 'A seleção do mês: três empresas escolhidas entre centenas analisadas, com a tese de cada uma e a lista completa com a posição de todas as ações.',
    screen: SCREENS.topAcoes,
  },
  {
    key: 'analysis',
    title: 'Análise por ativo',
    short: 'Análise',
    body: 'Os fatores que mais pesaram a favor e contra cada ação, explicados pela Django IA, ao lado de mercado e dados da empresa.',
    screen: SCREENS.ativoAnalise,
  },
  {
    key: 'news',
    title: 'Notícias e resumo',
    short: 'Notícias',
    body: 'O resumo do mercado do dia e as notícias relevantes, com fonte, horário e resumo de cada uma.',
    screen: SCREENS.noticias,
  },
  {
    key: 'learn',
    title: 'Educacional',
    short: 'Educacional',
    body: 'Trilhas curtas para entender o mercado e aprender a ler as análises do app.',
    screen: SCREENS.educacional,
  },
];

const PANEL_PINS = [
  { left: '9%', top: '18%', height: 120 },
  { left: '88%', top: '34%', height: 160, muted: true },
  { left: '93%', top: '12%', height: 70 },
];

export default function ProductTour() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = FEATURES[activeIndex];

  function select(index: number, focus = false) {
    setActiveIndex(index);
    if (focus) tabRefs.current[index]?.focus();
    // No mobile o seletor rola na horizontal: mantém a opção ativa visível.
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    tabRefs.current[index]?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const keys: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    let next: number | null = null;
    if (event.key in keys) next = (index + keys[event.key] + FEATURES.length) % FEATURES.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = FEATURES.length - 1;
    if (next === null) return;
    event.preventDefault();
    select(next, true);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
      {/* Índice: lista no desktop, seletor horizontal no mobile */}
      <div
        role="tablist"
        aria-label="Funcionalidades do Django AI"
        className="-mx-5 flex gap-2 overflow-x-auto pb-1 pl-5 pr-10 [mask-image:linear-gradient(90deg,#000_calc(100%-40px),transparent)] [scrollbar-width:none] lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0 lg:[mask-image:none] [&::-webkit-scrollbar]:hidden"
      >
        {FEATURES.map((feature, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={feature.key}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              id={`tour-tab-${feature.key}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls="tour-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => select(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={[
                'group relative shrink-0 text-left transition-colors duration-300',
                // mobile: pílulas
                'rounded-full border px-4 py-2.5 text-[14px] font-medium',
                selected
                  ? 'border-[var(--brand-black)] bg-[var(--brand-black)] text-white'
                  : 'border-[color:rgb(5_5_5_/_14%)] bg-white text-[color:rgb(5_5_5_/_78%)]',
                // desktop: linhas do índice
                'lg:grid lg:grid-cols-[3rem_minmax(0,1fr)] lg:rounded-none lg:border-0 lg:border-t lg:bg-transparent lg:px-0 lg:py-6 lg:last:border-b',
                selected
                  ? 'lg:border-[var(--brand-black)] lg:text-[var(--brand-black)]'
                  : 'lg:border-[color:rgb(5_5_5_/_12%)] lg:text-[color:rgb(5_5_5_/_66%)] lg:hover:text-[var(--brand-black)]',
              ].join(' ')}
            >
              <span
                className={`hidden pt-2 text-[11px] font-medium tracking-[0.2em] lg:block ${
                  selected ? 'text-[var(--app-green-text)]' : 'text-[color:rgb(5_5_5_/_60%)]'
                }`}
              >
                0{index + 1}
              </span>
              <span>
                <span className="lg:hidden">{feature.short}</span>
                <span className="hidden font-display text-[1.65rem] font-semibold tracking-[-0.03em] lg:block">{feature.title}</span>
                <span
                  className={`hidden transition-[grid-template-rows,opacity] duration-500 ease-out lg:grid ${
                    selected ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <span className="overflow-hidden">
                    <span className="block max-w-[44ch] pt-3 text-[16px] font-normal leading-7 text-[var(--color-ink-soft)]">
                      {feature.body}
                    </span>
                  </span>
                </span>
              </span>
              {selected ? (
                <span className="absolute -top-px left-0 hidden h-[2px] w-12 bg-[var(--brand-green)] lg:block" aria-hidden="true" />
              ) : null}
            </button>
          );
        })}
      </div>

      <div id="tour-panel" role="tabpanel" aria-labelledby={`tour-tab-${active.key}`}>
        {/* Texto da opção ativa no mobile, curto e acima do device */}
        <p className="mb-5 min-h-[3.5rem] text-[15px] leading-6 text-[var(--color-ink-soft)] lg:hidden">{active.body}</p>

        <div className="relative flex h-[500px] justify-center overflow-hidden rounded-[28px] bg-[var(--color-stage)] pt-8 sm:h-[560px] lg:h-[640px] lg:rounded-[32px] lg:pt-12">
          <Pins pins={PANEL_PINS} className="hidden sm:block" />
          <div className="relative">
            {FEATURES.map((feature, index) => {
              const visible = index === activeIndex;
              return (
                <div
                  key={feature.key}
                  className={`transition-[opacity,transform] duration-500 ease-out ${index === 0 ? 'relative' : 'absolute inset-x-0 top-0'} ${
                    visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
                  }`}
                >
                  <DeviceFrame
                    screen={feature.screen}
                    hidden={!visible}
                    className="w-[268px] sm:w-[300px] lg:w-[318px]"
                    sizes="(max-width: 640px) 268px, (max-width: 1024px) 300px, 318px"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
