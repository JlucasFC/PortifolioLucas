export function ContactSection() {
  return (
    <section id="contato" className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <h2 className="text-3xl font-bold text-white">Vamos construir algo relevante?</h2>
        <p className="mt-3 max-w-xl text-slate-300">
          Aberto a oportunidades de produto, consultoria tecnica e projetos fullstack.
        </p>
        <a
          href="mailto:contato@jlucas.dev"
          className="mt-6 inline-flex rounded-md bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
        >
          contato@jlucas.dev
        </a>
      </div>
    </section>
  );
}
