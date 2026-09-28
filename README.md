# David Meloto Advocacia — Website Institucional de Alta Performance

Website institucional de alto padrão desenvolvido para **David Meloto Advocacia** (`Dr. David Meloto Duarte Junior`, `OAB/PR 111.537`), escritório sediado em Curitiba/PR especializado em **Direito do Trabalho**, **Consultoria Preventiva de RH**, **Direito do Consumidor** e **Direito Civil & Contratos**.

---

## 🏛️ Dados do Cliente & Escritório
- **Nome Fantasia**: David Meloto Advocacia
- **Advogado Titular**: Dr. David Meloto Duarte Junior
- **Registro Profissional**: OAB/PR 111.537
- **Formação & Pós-Graduação**:
  - Pós-Graduação Lato Sensu em Direito do Trabalho e Processo do Trabalho — UNINTER (2022 – 2024)
  - Bacharelado em Direito — UniBrasil Centro Universitário (2017 – 2021)
  - Vivência e prática forense como estagiário de pós-graduação na Procuradoria Geral do Estado do Paraná (PGE-PR)
  - Prática jurídica ativa **desde 2021**
- **Sede Física**: R. Cel. Brasilino Moura, 253 - Ahú, Curitiba - PR, 80540-340
- **Horário de Funcionamento**: Segunda a Sexta, das 08:00 às 18:00 (Sábado e Domingo fechado)
- **WhatsApp**: (41) 99756-7713
- **Instagram**: [@davidmeloto.adv](https://www.instagram.com/davidmeloto.adv)
- **LinkedIn**: [David Meloto Duarte Junior](https://www.linkedin.com/in/david-meloto-duarte-junior-a29999304/)
- **Facebook**: [Adv. David Meloto](https://www.facebook.com/p/Adv-David-Meloto-61557586804827/)

---

## 🎨 Identidade Visual (Regra 60-30-10 & Estilo Institucional Nobre)
- **Estilo Visual**: Executivo, Tradicional e Institucional. Transmite segurança, autoridade e solidez jurídica.
- **Cor de Ação / CTAs (10%)**: Dourado Prestigioso (`#C5A059`) com suporte a Dourado Claro (`#EAD29C`).
- **Modo Claro (Light Mode)**:
  - Fundo (60%): Branco Marfim (`#FDFCF7`)
  - Primária / Títulos (30%): Azul Marinho Nobre (`#141F36`)
  - Suporte Neutro: Cobre / Rosé da Moldura (`#C28175`)
- **Modo Escuro (Dark Mode)**:
  - Fundo (60%): Azul Marinho Nobre (`#141F36`)
  - Primária / Títulos (30%): Branco Puro (`#FFFFFF`)
  - Textos de Leitura: Cinza Névoa (`#94A3B8`)
- **Linhas Geométricas Sutis**:
  - Modo Claro: Linhas finas em Cobre/Rosé (`#C28175`) com opacidade de 0.05 a 0.08.
  - Modo Escuro: Linhas finas em Dourado (`#C5A059`) com opacidade de 0.08 a 0.12.
- **Tipografia**: `Raleway` (headings) + `Merriweather` (body e citações jurídicas).

---

## 🚀 Arquitetura & Diretrizes Técnicas
1. **Navbar & Logo 100% Desacoplados**: A logo não altera a altura da barra do menu em nenhuma viewport.
2. **Hierarquia de Camadas Z-Index**:
   - Header: `z-40` com backdrop-blur.
   - Logo mobile: `z-[45]`.
   - Menu drawer: `z-[60]`.
3. **Hero 100dvh**: Imagem horizontal 16:9 (`/header_desktop.jpg`) para desktop e vertical 9:16 (`/header_mobile.jpg`) para mobile.
4. **Central de Links (`/links`)**: Split screen 50/50 no desktop e 100% fit sem scroll no mobile.
5. **Seção de Contato (Cenário A - Sede Física)**: Google Maps interativo embutido + traçado de rotas GPS para Ahú, Curitiba/PR.
6. **Conformidade Ética OAB (Provimento 205/2021)**: Informações sóbrias, classificação 5.0 Google Verificado sem exibição de número total de reviews, linguagem estritamente informativa.
7. **Regras de CTAs & Anos**:
   - Sem termos relativos ("X anos de experiência"), utilizando expressamente **"desde 2021"**.
   - CTAs com variações de cores e termos como **"Falar com um advogado"**, **"Retirar dúvidas com advogado"**.
   - Botão WhatsApp do menu no topo estritamente como **"WhatsApp"** em verde oficial (`#25D366`).

---

## 🛠️ Tecnologias Utilizadas
- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Estilização**: Tailwind CSS v4 + Vanilla CSS Tokens
- **Animações**: GSAP 3 + ScrollTrigger + @gsap/react + Lenis Smooth Scroll
- **Ícones**: Lucide React + Ícones SVG Customizados
- **Build & Deploy**: Export estático (`output: "export"`) compatível com Cloudflare Pages

---

## 📦 Como Rodar Localmente
```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Gerar build estática de produção
npm run build
```
