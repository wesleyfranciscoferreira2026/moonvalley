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
- `og:image` usa `assets/hero-valley.jpg` (JPEG real, aceito por todas as redes).

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
└── assets/
    ├── regions/          # Artwork das regiões (Frostvale, Ashenmaw, Moongate)
    ├── classes/          # Arte das classes (Kaelith 1–4)
    ├── videos/           # Vídeos (kaelith-1..3.mp4) + posters
    └── *.svg             # Arte autoral: cenários, emblema, ornamentos
```

## Como configurar os links oficiais (importante)

O site **não exibe links falsos**. Enquanto os URLs reais não forem informados, os botões mostram um estado honesto ("canais serão revelados em breve").

Edite `js/content.js` (valores atuais já são os links oficiais):

```js
window.MV_CONFIG = {
  discordUrl: "https://discord.gg/...",      // botões de Discord
  whatsappUrl: "https://chat.whatsapp.com/...", // botão de WhatsApp
  trailerUrl: "assets/videos/kaelith-1.mp4", // trailer (arquivo local ou YouTube/Vimeo)
  heroImage: "assets/hero-valley.jpg",       // imagem de fundo do topo (null = cena SVG)
  appStoreUrl: null,                          // link real da App Store (null = estado honesto)
  playStoreUrl: null,                         // link real do Google Play (null = estado honesto)
  socials: [                                  // Instagram/Facebook/YouTube/TikTok já listados
    { key: "instagram", label: "Instagram", url: null }, // cole o URL real para ativar
  ]
};
```

- `socials`: YouTube, Instagram, Facebook e TikTok já aparecem nos rodapés comunitários; enquanto `url: null`, o botão abre o aviso honesto de "em breve".
- `appStoreUrl` / `playStoreUrl`: os badges das lojas ficam no rodapé (`assets/store/`); com `url: null`, o clique abre o aviso de app em desenvolvimento.
- `youtube` (em `MV_CONTENT`): vídeos do canal — ao definir `url` (link real do YouTube), o card vira link e redireciona para o vídeo; sem URL, mostra "Em breve" (a miniatura é derivada automaticamente do link quando definido).

- `trailerUrl` aceita links do YouTube/Vimeo **ou** arquivos de vídeo locais (`.mp4`, `.webm`, `.ogg` — player nativo com `controls`).
  Sem URL, o modal exibe "O trailer está sendo forjado".
- `heroImage: null` restaura a cena em camadas SVG do hero automaticamente (com fallback se o arquivo falhar).
- Ícones sociais disponíveis: `discord`, `whatsapp`, `x`, `youtube`, `instagram`, `reddit`.
  Para outro serviço, adicione o SVG em `MV_SOCIAL_ICONS`.

## Como atualizar o conteúdo (RF-09)

Todo o conteúdo dinâmico vive em `js/content.js`, com campos `en` e `pt`:

- **`news`** — notícias; o primeiro item recebe destaque automático. Itens além do 4º são revelados por "View All News".
- **`regions`** — regiões do mundo (`scene`: imagem da região; `map`: `{x,y}` em % posiciona o pino no mapa-múndi).
- **`classes`** — abas de classes (`tone`: cor da aba; `sigil`: `blade`/`shield`/`arcane`/`bow`/`gun`; `images`: galeria; `videos`: `[{src, poster}]`; `stats`: barras de atributos 0–100 por idioma). Sem arte, o painel mostra um brasão honesto.
- **`books`** — livros da lore (`tone`: cor da capa; `icon`: `star`/`beast`/`moon`/`flame`); capa desenhada em CSS + modal com o texto.
- **`armory`** — arsenal (`kind`: `weapon`/`armor`/`item` com filtros; `rarity`: `common`/`rare`/`epic`/`legendary`; `icon` de sigilo; `stats` por item).
- **`shop`** — loja de skins e itens (`kind`: `skin`/`bundle`/`item`; `tone`; `sigil`; `art` opcional com a arte real da skin; `price` em Fragmentos de Lua). O botão Comprar abre um estado honesto de checkout pendente com link real do Discord.
- **Perfil do jogador** — criado/gerenciado na seção #profile; fica no `localStorage` do navegador (`mv-profile`), sem servidor. Textos em `js/i18n.js` (`profile.*`).
- **`features`** — sistemas de gameplay (`icon`: `sword`, `shield`, `compass`, `beast`, `star`, `banner`).
- **`media`** — `kind`: `trailer`, `video` (abrem modal), `screenshot`, `art` (lightbox com navegação). `url` local (`.mp4`) abre com player nativo.
- **`youtube`** — vídeos do canal; card vira link externo quando `url` tem o link do YouTube.
- **Cookies** — banner no rodapé da tela; escolha salva em `localStorage` (`mv-cookies`). Textos em `cookies.*` do `js/i18n.js`.
- Textos da interface (títulos, botões, rodapé) ficam em `js/i18n.js`.

## Substituindo a arte

O site já usa artwork real em JPEG além dos SVGs autorais. Para usar artes finais do jogo:

- **Hero**: substitua `assets/hero-valley.jpg` mantendo o nome (ou altere `MV_CONFIG.heroImage`).
- **Regiões**: substitua os arquivos em `assets/regions/` mantendo os nomes, ou altere `scene` em `content.js`.
- **Classes**: adicione imagens em `assets/classes/` e liste em `images` da classe em `content.js`.
- **Vídeos**: substitua `assets/videos/kaelith-*.mp4` e seus `*-poster.jpg`, ou altere `media`/`classes` em `content.js`.
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

- A loja é um catálogo de prévia: o checkout real exige backend, pagamentos e contas de jogo.
- Termos de uso e política de privacidade exibem aviso de "em elaboração" até o texto jurídico ser fornecido.
- Todo texto provisório (lore, notícias, recursos, descrições das classes) deve ser revisado conforme a história real do jogo, conforme o PRD.
