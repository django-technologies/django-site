import Header from "../../components/header";
import Footer from "../../components/footer";
import ReportsClient, { ResearchItem } from "./ReportsClient";

export const metadata = {
  title: "Relatórios — Django Technologies",
  description: "Relatórios e materiais institucionais de caráter exclusivamente informativo.",
  robots: { index: false, follow: false },
};

const items: ResearchItem[] = [
  {
    kind: "monthly",
    title: "Fundo Horizon",
    period: "Dezembro 2025",
    publishedAt: "2025-12-31",
    href: "/reports/relatorio-mensal-dez-2025.pdf",
    cover: "/reports/covers/horizon-cover.png",
  },
  {
    kind: "monthly",
    title: "Fundo Horizon",
    period: "Janeiro 2026",
    publishedAt: "2026-01-31",
    href: "/reports/relatorio-mensal-jan-26.pdf",
    cover: "/reports/covers/horizon-cover.png",
  },
  {
    kind: "monthly",
    title: "Fundo Horizon",
    period: "Fevereiro 2026",
    publishedAt: "2026-04-05",
    href: "/reports/DjangoTech_Monthly_Report_Fev-26.pdf",
    cover: "/reports/covers/horizon-cover.png",
  },
  {
    kind: "monthly",
    title: "Fundo Horizon",
    period: "Março 2026",
    publishedAt: "2026-04-06",
    href: "/reports/DjangoTech_Monthly_Report_Mar-26.pdf",
    cover: "/reports/covers/horizon-cover.png",
  },
    {
    kind: "monthly",
    title: "Fundo Horizon",
    period: "Abril 2026",
    publishedAt: "2026-05-05",
    href: "/reports/DjangoTech_Monthly_Report_2026_04.pdf",
    cover: "/reports/covers/horizon-cover.png",
  },
];

export default function ReportsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-screen-xl px-6 pb-8 pt-14 md:pb-10 md:pt-18">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-[color:var(--color-border)] bg-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)] shadow-[0_8px_24px_rgba(5,5,5,0.04)]">
              <span className="h-2 w-2 rounded-full bg-[var(--brand-green)]" />
              Publicações
            </div>

            <div className="mt-8 h-px w-[4.5rem] bg-[color:rgb(81_214_59_/_78%)]" />

            <h1 className="mt-8 text-4xl font-medium leading-[0.95] tracking-[-0.04em] md:text-6xl">
              Relatórios
            </h1>

            <p className="mt-5 max-w-[60ch] text-[17px] leading-8 text-[color:rgb(5_5_5_/_68%)]">
              Publicações institucionais da Django Technologies com finalidade exclusivamente informativa.
            </p>
          </div>
        </section>

        <ReportsClient items={items} />
      </main>

      <Footer />
    </div>
  );
}
