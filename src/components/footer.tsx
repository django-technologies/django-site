export default function Footer() {
  return (
    <footer className="relative border-t border-[#3a3d44] bg-[#050608] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 [background-image:url('/footer-texture.jpg')] [background-size:cover] [background-position:center] opacity-70" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/40" />

      <div className="relative max-w-screen-xl mx-auto px-6 py-8 text-sm flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-[80ch]">
          <p>© {new Date().getFullYear()} Django Technologies</p>
          <p className="mt-2 text-white">
            Os materiais neste site têm caráter meramente ilustrativo e destinam-se
            exclusivamente a fins de discussão e não constituem uma oferta. Uma oferta
            somente poderá ser realizada mediante entrega de memorando de oferta
            confidencial a investidores elegíveis.{' '}
            <span className="font-semibold tracking-wide">
              O DESEMPENHO PASSADO NÃO É GARANTIA DE RESULTADOS FUTUROS.
            </span>
          </p>
        </div>
        <div className="flex justify-start md:justify-end">
          <div className="inline-flex items-end gap-3">
            <img
              src="/logo-mark.svg"
              alt="Django Technologies"
              className="block h-10 w-auto opacity-90"
            />
            <span className="text-lg font-semibold tracking-wide leading-none pb-[7px]">
              Django Technologies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
