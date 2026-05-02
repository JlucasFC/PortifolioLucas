export function ContactSection() {
  return (
    <section id="contato" className="border-t border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <h2 className="text-3xl font-bold text-slate-100">Vamos construir algo relevante?</h2>
        <p className="mt-3 max-w-xl text-slate-300">
          Aberto a oportunidades de produto, consultoria tecnica e projetos fullstack.
        </p>
        <a
          href="mailto:contato@jlucas.dev"
          className="mt-6 inline-flex rounded-md bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
        >
          contato@jlucas.dev
        </a>
      </div>
    </section>
  );
}
