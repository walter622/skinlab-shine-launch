## Visão geral

Landing page única (one-page scroll) para a Skin Lab Med Spa, seguindo a identidade visual oficial (verde profundo, dourado, tipografia elegante) inspirada nos padrões do skinlb.com, mas com todos os textos fornecidos pelo cliente. Foco em conversão para o formulário/agendamento de consulta.

## Identidade visual (do manual da marca)

- **Cores**: `#28372E` (verde profundo, base), `#B08B58` (dourado, acentos), `#FFE3B4` (creme suave), `#FFFFFF` (fundo claro)
- **Tipografia**: display serifada elegante (Cormorant/Playfair como proxy web da Grosen Thin, que não é web font) + sans-serif limpa para corpo
- **Tom**: sofisticado, clínico, boutique, natural — nada de gradientes roxos ou visual genérico
- **Logo**: usaremos a versão horizontal fornecida no pacote (Marca d'água - Logotipo Horizontal)

## Estrutura da página (18 blocos → agrupados em seções)

1. **Nav fixa** — logo Skin Lab + link Instagram + CTA "Book Consultation"
2. **Hero** — headline sobre reclaimar o pinnacle of radiance, subheadline, CTA "Request Your Personalized Aesthetic Consultation" + foto dos profissionais (imagem enviada) em composição lateral
3. **Why invest now** — intro + placeholder de vídeo explicativo + grid de 6 diferenciais (Premium Injectables, Ultraformer MPT, Hydrafacial, Advanced Techniques, Consultative Evaluations, Boutique Care)
4. **Objeções / What most people realize too late** — lista de medos ("Botox vai ficar fake", etc.) desmontados
5. **Signature treatments** — cards para Botox & Fillers, Ultraformer MPT, Hydrafacial, e demais tratamentos
6. **Antes & Depois** — galeria com as duas imagens fornecidas em formato before/after slider ou split
7. **Profissionais** — Leticia & Guilherme, foto enviada + bio boutique
8. **Depoimentos / social proof** (se houver no texto restante, usaremos)
9. **FAQ** — accordion com as 4 perguntas fornecidas
10. **Formulário de consulta** — Nome, telefone, email, objetivo estético (checkboxes), tratamento prévio sim/não, botão "Reserve My Consultation" (envia via mailto ou WhatsApp; sem backend nesta fase)
11. **CTA final** + **Footer** — endereço Charlotte NC, telefone (980) 309-3768, Instagram, copyright

## Detalhes técnicos

- Stack existente: TanStack Start + Tailwind v4. Toda a LP em `src/routes/index.tsx` com componentes de seção em `src/components/skinlab/`.
- Tokens da paleta no `src/styles.css` (@theme + :root em oklch) — cores semânticas: `--brand-forest`, `--brand-gold`, `--brand-cream`.
- Fontes: `Cormorant Garamond` (display) + `Inter` (body) via `<link>` no `__root.tsx` (regra Tailwind v4).
- Head SEO da rota `/` com title/description/og próprios da Skin Lab (substituindo o default "Lovable App"); og:image usando a foto dos profissionais.
- Assets do usuário (logo, foto profissionais, 2 antes/depois) publicados via `lovable-assets create` a partir de `/mnt/user-uploads/` e importados como JSON pointer — sem copiar binários para o repo.
- Formulário: validação com `zod` + `react-hook-form`, envio abrindo `wa.me` ou `mailto:` com payload formatado (sem backend por enquanto).
- Animações discretas com framer-motion (fade/rise on scroll) — nada exagerado.
- Placeholder de vídeo com aspect 16:9 e botão play (sem embed real até o cliente enviar).

## Fora do escopo desta primeira entrega

- Backend / envio real do formulário para email ou CRM (podemos adicionar Lovable Cloud + Resend depois).
- Multi-idioma (a página será em inglês, conforme os textos enviados).
- Página separada por tratamento (será one-page).

## Perguntas em aberto (podemos definir durante o build ou depois)

- Número de WhatsApp para o botão de contato: uso o `(980) 309-3768` do manual da marca? (confirme se é o mesmo do WhatsApp)
- Vídeo explicativo do bloco 2: deixo placeholder até você mandar o link do YouTube/Vimeo?
