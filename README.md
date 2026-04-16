# Dra. Fernanda Misumi — Landing Page Advocacia

Landing page profissional para escritório de advocacia trabalhista, desenvolvida com React, TypeScript, Vite e Tailwind CSS.

---

## Tecnologias Utilizadas

| Tecnologia | Versão | Função |
|---|---|---|
| React | 19 | Framework UI |
| TypeScript | 5.9 | Tipagem estática |
| Vite | 7 | Bundler e dev server |
| Tailwind CSS | 4 | Estilização |
| Framer Motion | 12 | Animações |
| React Hook Form | 7 | Gerenciamento de formulários |
| Zod | 4 | Validação de schemas |
| Lucide React | 0.575 | Ícones |
| vite-plugin-singlefile | 2.3 | Build em arquivo HTML único |

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) versão **18 ou superior**
- npm (já incluso com o Node.js)

Para verificar se já possui:
```bash
node -v
npm -v
```

---

## Instalação e Execução

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd advocacia_landing_page
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Rode em modo desenvolvimento
```bash
npm run dev
```

Acesse em: `http://localhost:5173`

### 4. Build para produção
```bash
npm run build
```

O build gera um **único arquivo `index.html`** na pasta `dist/` (via `vite-plugin-singlefile`), com todo CSS, JS e imagens embutidos — ideal para hospedagem simples.

### 5. Pré-visualizar o build
```bash
npm run preview
```

---

## Estrutura do Projeto

```
advocacia_landing_page/
├── src/
│   ├── components/
│   │   ├── Header.tsx        # Navbar fixa com scroll e menu mobile
│   │   ├── Hero.tsx          # Seção principal com foto e CTA
│   │   ├── About.tsx         # Seção sobre a advogada
│   │   ├── Services.tsx      # Cards de áreas de atuação
│   │   ├── Differentials.tsx # Diferenciais do escritório
│   │   ├── Testimonials.tsx  # Depoimentos de clientes
│   │   ├── Contact.tsx       # Informações de contato e WhatsApp
│   │   └── Footer.tsx        # Rodapé
│   ├── utils/
│   │   ├── img/ferdi.jpeg    # Foto da advogada
│   │   └── cn.ts             # Utilitário para classes CSS (clsx + tailwind-merge)
│   ├── App.tsx               # Componente raiz
│   ├── main.tsx              # Entry point
│   └── index.css             # Estilos globais
├── index.html                # HTML base com SEO e meta tags
├── vite.config.ts            # Configuração do Vite
├── tsconfig.json             # Configuração do TypeScript
└── package.json
```

---

## Funcionalidades

### Header
- Navbar fixa com efeito de blur ao rolar a página
- Menu hamburguer responsivo para mobile
- Links de navegação com scroll suave para cada seção
- Botão de contato direto via WhatsApp

### Hero
- Seção de destaque com foto da advogada
- Estatísticas animadas (anos de experiência e casos resolvidos)
- Dois CTAs: WhatsApp e link para serviços
- Animações de entrada com Framer Motion

### Serviços
- 6 cards de áreas de atuação:
  - Reclamação Trabalhista
  - Rescisão Indireta
  - Reversão de Justa Causa
  - Dano Moral Trabalhista
  - Acidente e Doença do Trabalho
  - Análise de Acordo Trabalhista
- Animações ativadas ao entrar na viewport

### Diferenciais
- Destaque dos pontos fortes do escritório com animações

### Depoimentos
- Seção de avaliações de clientes

### Contato
- Endereço, telefone, e-mail e horário de atendimento
- Botão de acesso direto ao WhatsApp
- Formulário de contato (estrutura pronta, envio comentado para integração futura)

### Footer
- Informações do escritório e links rápidos

---

## Personalização

Para adaptar o projeto a outro cliente, os principais pontos a alterar são:

- `index.html` — título, meta description e keywords
- `src/utils/img/ferdi.jpeg` — foto do profissional
- `src/components/Hero.tsx` — nome, estatísticas e número do WhatsApp
- `src/components/Services.tsx` — áreas de atuação e número do WhatsApp
- `src/components/Contact.tsx` — endereço, telefone, e-mail e WhatsApp
- `src/components/Header.tsx` — nome no logo e número do WhatsApp

---

## Hospedagem

Como o build gera um único arquivo `index.html` estático, o projeto pode ser hospedado em qualquer serviço de hospedagem estática.

### Opções Recomendadas

#### Gratuitas

| Serviço | Como hospedar | Destaque |
|---|---|---|
| **Vercel** | Conecte o repositório GitHub e faça deploy automático | Melhor opção: deploy em segundos, HTTPS automático, domínio customizado gratuito |
| **Netlify** | Arraste a pasta `dist/` para o painel ou conecte ao GitHub | Simples e rápido, suporte a formulários |
| **GitHub Pages** | Faça push da pasta `dist/` para a branch `gh-pages` | Ideal se o código já está no GitHub |
| **Cloudflare Pages** | Conecte o repositório e configure `npm run build` | CDN global, performance excelente |

#### Pagas (para domínio próprio profissional)

| Serviço | Indicado para |
|---|---|
| **Hostinger** | Melhor custo-benefício no Brasil, suporte em português |
| **Locaweb** | Empresa brasileira, boa para clientes que preferem suporte local |
| **AWS S3 + CloudFront** | Máxima performance e escalabilidade, ideal para projetos maiores |

### Deploy na Vercel (recomendado)

1. Suba o projeto para um repositório no GitHub
2. Acesse [vercel.com](https://vercel.com) e faça login com GitHub
3. Clique em **"Add New Project"** e selecione o repositório
4. Configure:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Clique em **Deploy**

Pronto. A Vercel gera uma URL pública automaticamente e faz novo deploy a cada `git push`.

### Deploy na Netlify (arrastar e soltar)

1. Rode `npm run build` localmente
2. Acesse [netlify.com](https://netlify.com)
3. Arraste a pasta `dist/` para a área de deploy
4. A URL pública é gerada instantaneamente

---

## Observações

- O formulário de contato em `Contact.tsx` está com o envio comentado. Para ativá-lo, é necessário integrar com um serviço de e-mail (ex: [EmailJS](https://www.emailjs.com/), [Formspree](https://formspree.io/) ou uma API própria).
- O número de WhatsApp está no formato internacional: `5511912045757` (55 = Brasil, 11 = DDD, + número).
