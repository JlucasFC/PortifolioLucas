import { loginAction } from "@/app/(auth)/login/actions";

type LoginPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const hasError = params.error === "invalid_credentials";
  const fieldClassName =
    "w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-black placeholder:text-black placeholder:opacity-70";

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <section className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Acesso administrativo</h1>
        <p className="mt-2 text-sm text-slate-600">
          Entre com as credenciais do proprietario para gerenciar projetos.
        </p>
        {hasError ? (
          <p className="mt-4 rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
            Credenciais invalidas.
          </p>
        ) : null}
        <form action={loginAction} className="mt-6 space-y-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className={fieldClassName}
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            required
            className={fieldClassName}
          />
          <button
            type="submit"
            className="w-full rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
          >
            Entrar
          </button>
        </form>
      </section>
    </main>
  );
}
