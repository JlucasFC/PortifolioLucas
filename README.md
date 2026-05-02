# Portfólio JLucas

Portfólio profissional construído com **Next.js 16 (App Router)**, **React 19**, **TypeScript** e **Tailwind CSS 4**, com uma área administrativa privada para CRUD de projetos.

## Visão geral

Este projeto entrega duas experiências:

- **Site público (`/`)**: landing page com seções de apresentação, habilidades, projetos e contato.
- **Área admin (`/admin`)**: painel protegido por login para criar, editar e remover projetos exibidos no site público.

Os projetos são persistidos localmente em `src/data/projects.json` (com seed inicial quando vazio).

## Stack

- Next.js `16.2.4`
- React `19.2.4`
- TypeScript `strict`
- Tailwind CSS `4`
- ESLint `9` + `eslint-config-next`
- `pnpm` como gerenciador de pacotes

## Estrutura atual

```text
src/
  app/
    (public)/page.tsx         # Landing pública
    (auth)/login/page.tsx     # Login admin
    (admin)/admin/page.tsx    # Dashboard admin
  components/
    sections/                 # Seções da landing
    admin/                    # Formulário e listagem de projetos
    projects/                 # Card de projeto
    ui/                       # Componentes visuais reutilizáveis
  lib/
    auth.ts                   # Sessão e validação de credenciais
    project-form.ts           # Parser de FormData -> ProjectInput
    constants.ts              # Rotas e nome do cookie
  services/
    projects.ts               # CRUD de projetos (JSON local)
  data/
    projects.json             # Fonte de dados local
    seed-projects.ts          # Seed quando base está vazia
  types/
    project.ts                # Tipos de domínio
  proxy.ts                    # Proteção de rota /admin via cookie
```

## Requisitos

- Node.js 20+
- pnpm 9+

## Configuração

1. Instale dependências:

```bash
pnpm install
```

2. Configure variáveis de ambiente:

```bash
cp .env.example .env
```

3. Ajuste credenciais admin no `.env`:

```env
ADMIN_EMAIL=admin@portfolio.local
ADMIN_PASSWORD=admin123
```

## Como rodar

```bash
pnpm dev
```

Aplicação em `http://localhost:3000`.

## Scripts

- `pnpm dev`: ambiente de desenvolvimento
- `pnpm build`: build de produção
- `pnpm start`: inicia build de produção
- `pnpm lint`: análise estática com ESLint

## Fluxo de autenticação e admin

- Login em `/login` usando `ADMIN_EMAIL` e `ADMIN_PASSWORD`.
- Em caso de sucesso, é criado cookie `portfolio_admin_session` (`httpOnly`, `sameSite=lax`).
- A rota `/admin` é protegida em `src/proxy.ts`; sem cookie válido, há redirecionamento para `/login`.
- CRUD no admin executa **Server Actions** e revalida cache das rotas pública e admin.

## Avaliação técnica (estado atual)

Pontos fortes:

- Separação de responsabilidades já bem encaminhada (`app`, `components`, `lib`, `services`, `types`, `data`).
- Uso correto de Server Components na página pública e Server Actions no admin.
- Fluxo de autenticação simples e funcional para cenário single-owner.
- Projeto pronto para evoluir sem precisar refatoração estrutural imediata.

Atenções:

- O lint está limpo de erros, mas há **1 warning**: uso de `<img>` em `src/components/ui/glassmorphism-portfolio-block-shadcnui.tsx` (recomendado migrar para `next/image`).
- Credenciais fallback (`admin@portfolio.local` / `admin123`) são úteis em dev, mas devem ser evitadas em produção.
- Persistência em JSON local é prática para MVP, porém não ideal para multiusuário/produção concorrente.
- `next.config.ts` permite imagens remotas com `hostname: "**"` em `http` e `https`; ideal restringir domínios permitidos por segurança/performance.

## Próximos passos recomendados

1. Migrar persistência para banco (PostgreSQL + Prisma, por exemplo).
2. Fortalecer autenticação (hash de senha persistido, rate limit e auditoria básica).
3. Adicionar validação formal de input (ex.: Zod) e feedback de erro nos formulários.
4. Cobrir regras principais com testes (serviço de projetos, auth e actions).
5. Melhorar SEO técnico (metadados por seção, Open Graph e sitemap dinâmico).

## Verificação local

Comandos executados nesta avaliação:

```bash
pnpm lint
```

Resultado: sem erros; 1 warning de `@next/next/no-img-element`.
