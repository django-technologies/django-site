import Header from "../../components/header";
import Footer from "../../components/footer";
import ReportsClient, { ResearchItem } from "./ReportsClient";

export const metadata = {
  title: "Relatórios — Django Technologies",
  description: "Relatórios mensais, cartas e publicações institucionais.",
  robots: { index: false, follow: false },
};

const items: ResearchItem[] = [
  {
    kind: "monthly",
    title: "Fundo Horizon",
    period: "Dezembro 2025",
    publishedAt: "2025-12-31",
    href: "/reports/relatorio-mensal-dez-2025.pdf",
    cover: "/reports/covers/horizon-fund-monthly-report.png",
  },
  {
    kind: "monthly",
    title: "Fundo Horizon",
    period: "Janeiro 2026",
    publishedAt: "2026-01-31",
    href: "/reports/relatorio-mensal-jan-26.pdf",
    cover: "/reports/covers/horizon-fund-monthly-report.png",
  },
  {
    kind: "monthly",
    title: "Fundo Horizon",
    period: "Fevereiro 2026",
    publishedAt: "2026-04-05",
    href: "/reports/DjangoTech_Monthly_Report_Fev-26.pdf",
    cover: "/reports/covers/horizon-fund-monthly-report.png",
  },
  {
    kind: "monthly",
    title: "Fundo Horizon",
    period: "Março 2026",
    publishedAt: "2026-04-06",
    href: "/reports/DjangoTech_Monthly_Report_Mar-26.pdf",
    cover: "/reports/covers/horizon-fund-monthly-report.png",
  },
  // {
  //   kind: "market",
  //   title: "Market Note",
  //   period: "Janeiro 2026",
  //   publishedAt: "2026-01-20",
  //   href: "/reports/market-note-jan-2026.pdf",
  //   cover: "/reports/covers/market-note-jan-2026.png",
  // },
  // {
  //   kind: "article",
  //   title: "O que mudou no regime de volatilidade?",
  //   publishedAt: "2026-02-02",
  //   href: "/artigos/regime-de-volatilidade",
  //   cover: "/reports/covers/article-volt-regime.png",
  // },
];

export default function ReportsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
      <Header />

      <main className="flex-1">
        <section className="max-w-screen-xl mx-auto px-6 pt-16 pb-8 md:pt-20 md:pb-10">
          <h1 className="text-4xl md:text-6xl font-medium leading-tight tracking-[-0.02em]">
            Relatórios
          </h1>
        </section>

        <ReportsClient items={items} />
      </main>

      <Footer />
    </div>
  );
}
