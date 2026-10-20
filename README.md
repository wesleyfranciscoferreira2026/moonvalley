# Moon Valley — Site Oficial

Site institucional cinematográfico do universo de RPG **Moon Valley** — fantasia épica sombria, em conformidade com o PRD v1.0.

## Como executão site é estático (HTML + CSS + JS puro), sem etapa de build:

1. Abra `index.html` diretamente no navegador (duplo clique), **ou**
2. Sirva a pasta com qualquer servidor estático:
   - VS Code extensão *Live Server*
   - `npx serve .` (se tiver Node)
   - Qualquer hospedagem estática (Netlify, Vercel, GitHub Pages, Cloudflare Pages)

> Recomenda-se servidor/HTTPS em produção (requisito de segurança do PRD).

## Estrutura

```
moonvalley/
├── index.html            # Página única com todas as seções
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

Toda a conteúdo dinâmico vive em `js/content.js`, com campos `en` e `pt`:

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
- Imensos abaixo da dobra com `loading="lazy"`; dimensões reservadas (sem layout shift).
- Otimizado para desktop, tablet e mobile (menu adaptado a toque).

## Limitações conhecidas (para produção)

- `og:image` usa SVG — para metadados de compartilhamento, gere um PNG 1200×630 a partir de `assets/og-image.svg`.
- Termos de uso e política de privacidade exibem aviso de "em elaboração" até o texto jurídico ser fornecido.
- Todo texto provisório (lore, notícias, recursos) deve ser revisado conforme a história real do jogo, conforme o PRD.
