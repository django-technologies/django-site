/**
 * Telas reais do Django AI (capturas de outubro/2026, iPhone, 739×1600).
 * Selecionadas sem dados pessoais, sem rentabilidade e sem telas de erro.
 * Atenção: cotações e a seleção do mês ficam datadas — atualizar as capturas periodicamente.
 */
export type ProductScreen = { src: string; alt: string };

export const SCREENS = {
  topAcoes: {
    src: '/product/top-acoes.jpg',
    alt: 'Django AI, Top Ações de outubro: 3 empresas selecionadas entre centenas analisadas, com tese de cada uma e lista completa.',
  },
  ativoAnalise: {
    src: '/product/ativo-analise.jpg',
    alt: 'Django AI, destaques da análise: fatores que pesaram a favor e contra a ação, explicados pela Django IA.',
  },
  noticias: {
    src: '/product/noticias.jpg',
    alt: 'Django AI, Resumo do mercado: principais notícias do dia com fonte, horário e resumo.',
  },
  fatores: {
    src: '/product/fatores.jpg',
    alt: 'Django AI, fatores da análise de uma ação com barras comparativas, como direção modelada e volatilidade projetada.',
  },
  educacional: {
    src: '/product/educacional.jpg',
    alt: 'Django AI, área Educacional com trilhas para aprender a investir e usar o app.',
  },
} satisfies Record<string, ProductScreen>;

export const FACTORS_CROP = {
  src: '/product/fatores-recorte.jpg',
  width: 660,
  height: 710,
  alt: 'Recorte real do Django AI: barras que comparam fatores da análise de uma ação, como direção modelada e volatilidade projetada.',
};
