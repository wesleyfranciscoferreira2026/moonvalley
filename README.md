# Moon Valley — Site Oficial

Site institucional cinematográfico do universo de RPG **Moon Valley** — fantasia épica sombria, em conformidade com o PRD v1.0.

## Como executar localmente

O site é estático (HTML + CSS + JS puro), sem etapa de build:

1. Abra `index.html` diretamente no navegador (duplo clique), **ou**
2. Sirva a pasta com qualquer servidor estático (VS Code extensão *Live Server*, `npx serve .`).

## Como hospedar (escolha uma opção)

### Opção A — GitHub Pages (gratuita, deploy automático)
O repositório já inclui o workflow `.github/workflows/deploy-pages.yml`, que publica o site automaticamente a cada push.

1. Envie o projeto ao GitHub (uma única vez):
   ```
   cd C:\Users\wokup\Documents\moonvalley
   git add .
   git commit -m "Deploy setup"
   git push -u origin main
   ```
2. No GitHub, abra o repositório → **Settings** → **Pages**.
3. Em **Source**, escolha **GitHub Actions** e salve.
4. Pronto: o site fica online em
   `https://wesleyfranciscoferreira2026.github.io/moonvalley/`
   (o deploy roda sozinho a cada push; acompanhe em **Actions**).

### Opção B — Netlify Drop (mais rápido, sem git)
1. Acesse [app.netlify.com/drop](https://app.netlify.com/drop).
2. Arraste a pasta `moonvalley` inteira para a área indicada.
3. Você recebe um endereço público na hora — e pode apontar um domínio próprio depois.

### Opção C — Vercel ou Cloudflare Pages
Crie um projeto novo apontando para o repositório GitHub com as configurações padrão:
- **Framework preset:** Other
- **Build command:** *(vazio)*
- **Output directory:** `.` (raiz)

### Importante para qualquer hospedagem
- Todos os caminhos são relativos → funciona em subpastas (ex.: `usuario.github.io/moonvalley/`).
- Publique sempre via **HTTPS** (requisito de segurança do PRD).
- Gere um `og-image.png` (1200×630) a partir de `assets/og-image.svg` para miniaturas de compartilhamento — nem toda rede social aceita SVG.

## Estrutura

```
moonvalley/
├── index.html            # Página única com todas as seções
├── netlify.toml          # Configuração de publicação (Netlify)
├── .github/workflows/    # Deploy automático no GitHub Pages
├── css/
│   ├── core.css          # Design system: tokens, botões, molduras, header, footer, modais
│   └── layout.css        # Hero em camadas, seções, grids, responsivo
├── js/
│   ├── i18n.js           # Dicionário EN/PT-BR da interface
│   ├── content.js        # Conteúdo estruturado + CONFIG de links reais
│   └── main.js           # Renderização, modais, lightbox, parallax, a11y
└── assets/               # Arte autoral em SVG (cenários, emblema, ornamentos)
```

## Como configurar os links oficiais (importante)

O site **não exibe links falsos**. Enquanto os URLs reais não forem informados, os botões de Discord/redes sociais mostram um estado honesto ("canais serão revelados em breve").

Edite `js/content.js`:

```js
window.MV_CONFIG = {
  discordUrl: "https://discord.gg/SEU-SERVIDOR",   // habilita os botões de Discord
  trailerUrl: "https://www.youtube.com/watch?v=VIDEO_ID", // habilita o player do trailer
  socials: [
    { key: "x",        label: "X",        url: "https://x.com/seuperfil" },
    { key: "youtube",  label: "YouTube",  url: "https://youtube.com/@seucanal" },
    { key: "instagram",label: "Instagram",url: "https://instagram.com/seuperfil" },
    { key: "reddit",   label: "Reddit",   url: "https://reddit.com/r/seusub" }
  ]
};
```

- `trailerUrl` aceita links do YouTube ou Vimeo (conversão automática para embed).
  Sem URL, o modal do trailer exibe "O trailer está sendo forjado".
- Ícones sociais disponíveis: `discord`, `x`, `youtube`, `instagram`, `reddit`.
  Para outro serviço, adicione o SVG em `MV_SOCIAL_ICONS`.

## Como atualizar o conteúdo (RF-09)

Todo o conteúdo dinâmico vive em `js/content.js`, com campos `en` e `pt`:

- **`news`** — notícias; o primeiro item recebe destaque automático. Itens além do 4º são revelados por "View All News".
- **`regions`** — regiões do mundo (`tone`: `ice`, `forest`, `fire`, `moon` define a cor do bioma).
- **`features`** — sistemas de gameplay (`icon`: `sword`, `shield`, `compass`, `beast`, `star`, `banner`).
- **`media`** — `kind`: `trailer`, `video` (abrem modal), `screenshot`, `art` (lightbox com navegação).
- Textos da interface (títulos, botões, rodapé) ficam em `js/i18n.js`.

## Substituindo a arte

Toda a arte é SVG autoral em `assets/`, gerada para transmitir a direção artística (castelo sob céu dourado, dragão, reino gelado, floresta ancestral, terras vulcânicas, ruínas lunares). Para usar artes finais do jogo:

- **Cenas de região / mídia**: substitua o arquivo SVG mantendo o mesmo nome, ou altere o caminho em `content.js`.
- **Camadas do hero**: troque os arquivos `scene-*.svg` por WebP/AVIF panorâmicos (o layout aceita `img` com object-fit).
- **Logotipo**: substitua `assets/logo.svg` mantendo o viewBox quadrado.

## Idiomas

Seletor EN | PT no cabeçalho e no rodapé. A escolha é salva em `localStorage` e aplicada a todo o conteúdo, incluindo datas formatadas por idioma.

## Acessibilidade e desempenho

- Navegação por teclado (modais com Escape, lightbox com setas, cards focáveis).
- Indicadores de foco visíveis, skip-link, contraste verificado sobre fundos escuros.
- `prefers-reduced-motion` desativa parallax, partículas e animações.
- Imagens abaixo da dobra com `loading="lazy"`; dimensões reservadas (sem layout shift).
- Otimizado para desktop, tablet e mobile (menu adaptado a toque).

## Limitações conhecidas (para produção)

- `og:image` usa SVG — para metadados de compartilhamento, gere um PNG 1200×630 a partir de `assets/og-image.svg`.
- Termos de uso e política de privacidade exibem aviso de "em elaboração" até o texto jurídico ser fornecido.
- Todo texto provisório (lore, notícias, recursos) deve ser revisado conforme a história real do jogo, conforme o PRD.
