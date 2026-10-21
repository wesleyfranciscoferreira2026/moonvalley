/* ============================================================
   MOON VALLEY — content.js
   Structured, editable content. Update the data below to change
   the site without touching the layout (RF-09).

   CONFIG
     discordUrl / socials / trailerUrl: replace null with real
     URLs to enable the links. While null, the UI honestly shows
     a "coming soon" state instead of dead links.
   ============================================================ */
window.MV_CONFIG = {
  /* Official community links — set to real URLs before launch. */
  discordUrl: "https://discord.gg/ACGjkDBws",
  whatsappUrl: "https://chat.whatsapp.com/LSHSJq7csQnLDRaF3xKPql",
  trailerUrl: "assets/videos/kaelith-1.mp4",
  /* Hero backdrop shown at the very top of the site. Replace the
     file (keeping the name) or set to null to use the SVG scene. */
  heroImage: "assets/hero-valley.jpg",
  /* Real App Store link of the game. While null, the badge shows
     an honest "app in development" state. */
  appStoreUrl: null,
  /* Real Google Play link of the game (same honest state). */
  playStoreUrl: null,
  socials: [
    /* Add real profile URLs to enable the links. While url is null,
       the button honestly shows a "coming soon" state. */
    { key: "instagram", label: "Instagram", url: null },
    { key: "facebook", label: "Facebook", url: null },
    { key: "youtube", label: "YouTube", url: null },
    { key: "tiktok", label: "TikTok", url: null }
  ]
};

/* ---------- social icons (inline SVG paths) ---------- */
window.MV_SOCIAL_ICONS = {
  whatsapp: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.25-4.36c0-4.53 3.69-8.22 8.23-8.22 2.2 0 4.26.86 5.81 2.42a8.16 8.16 0 0 1 2.41 5.81c0 4.53-3.69 8.21-8.23 8.21z"/></svg>',
  discord: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19.3 5.3A16.7 16.7 0 0 0 15.1 4l-.2.4a15.6 15.6 0 0 1 3.9 1.6 13.5 13.5 0 0 0-11.6 0A15.6 15.6 0 0 1 11 4.4L10.8 4a16.7 16.7 0 0 0-4.2 1.3C3.9 9.4 3.1 13.4 3.5 17.3a16.8 16.8 0 0 0 5.1 2.6l1-1.7a10.9 10.9 0 0 1-1.7-.8l.4-.3a11.9 11.9 0 0 0 10.3 0l.4.3a10.9 10.9 0 0 1-1.7.8l1 1.7a16.8 16.8 0 0 0 5.1-2.6c.5-4.5-.8-8.5-3.1-12zM9.5 14.9c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2zm5 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2z"/></svg>',
  x: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 3h3.1l-6.8 7.8L21.8 21h-6.2l-4.9-6.4L5.1 21H2l7.3-8.3L2.5 3h6.4l4.4 5.8L17.5 3zm-1.1 16.1h1.7L7.7 4.8H5.9l10.5 14.3z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26.3 26.3 0 0 0 2 12a26.3 26.3 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26.3 26.3 0 0 0 22 12a26.3 26.3 0 0 0-.4-4.8zM10 15.1V8.9l5.2 3.1-5.2 3.1z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.3c2.5 0 2.8 0 3.8.1 2.6.1 3.8 1.4 3.9 3.9 0 1 .1 1.3.1 3.8s0 2.8-.1 3.8c-.1 2.5-1.3 3.8-3.9 3.9-1 0-1.3.1-3.8.1s-2.8 0-3.8-.1c-2.6-.1-3.8-1.4-3.9-3.9 0-1-.1-1.3-.1-3.8s0-2.8.1-3.8C4.4 5.8 5.6 4.5 8.2 4.4c1-.1 1.3-.1 3.8-.1zM12 2C9.4 2 9.1 2 8.1 2.1 4.6 2.2 2.2 4.6 2.1 8.1 2 9.1 2 9.4 2 12s0 2.9.1 3.9c.1 3.5 2.5 5.9 6 6 1 .1 1.3.1 3.9.1s2.9 0 3.9-.1c3.5-.1 5.9-2.5 6-6 .1-1 .1-1.3.1-3.9s0-2.9-.1-3.9c-.1-3.5-2.5-5.9-6-6C14.9 2 14.6 2 12 2zm0 4.9a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2zm0 8.4a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6zm5.3-8.6a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z"/></svg>',
  reddit: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M22 12.1a2.2 2.2 0 0 0-3.7-1.6 10.8 10.8 0 0 0-5.4-1.7l1-4.5 3.2.7a1.7 1.7 0 1 0 .2-1.2l-3.8-.8a.6.6 0 0 0-.7.5l-1.1 5.2a10.8 10.8 0 0 0-5.5 1.7A2.2 2.2 0 1 0 4.4 14a4.3 4.3 0 0 0 0 .6c0 3.1 3.6 5.6 8 5.6s8-2.5 8-5.6a4.3 4.3 0 0 0 0-.6A2.2 2.2 0 0 0 22 12.1zm-14.3 2a1.5 1.5 0 1 1 1.5 1.5 1.5 1.5 0 0 1-1.5-1.5zm8.5 3.7a5.7 5.7 0 0 1-4.2 1.3 5.7 5.7 0 0 1-4.2-1.3.5.5 0 0 1 .7-.7 4.8 4.8 0 0 0 3.5 1 4.8 4.8 0 0 0 3.5-1 .5.5 0 1 1 .7.7zm-.3-2.2a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M16.6 2h-3.1v13.6a2.6 2.6 0 1 1-2.2-2.6v-3.2a5.8 5.8 0 1 0 5.3 5.8V9.1a7 7 0 0 0 4 1.3V7.3a4 4 0 0 1-4-4V2z"/></svg>'
};

window.MV_CONTENT = {

  /* ==========================================================
     NEWS — featured is the first item
     ========================================================== */
  news: [
    {
      id: "first-light",
      category: "update",           // update | event | lore
      date: "2026-10-12",
      image: "assets/region-moon.svg",
      en: {
        tag: "Update",
        title: "The Gates of the Moongate Ruins Open",
        excerpt: "A first look at the shattered ring beyond the vale: floating stones, lunar tides and a boss that hunts by starlight.",
        body: [
          "For the first time, the expedition crossed the Silver Bridge and set foot among the Moongate Ruins — the broken ring of stone that once connected Moon Valley to whatever lies beyond the moon.",
          "The region operates on lunar tides: at the silver hour, gravity loosens and whole islands of rock drift between the shards of the gate. Explorers will need to time their crossings with the phases of the moon.",
          "Guarding the inner sanctum stands Vharûn, the Star-Eater — a creature that blinds every torch and lantern within the arena. Only sound and starlight remain. This chronicle will be expanded as the expedition reports return."
        ]
      },
      pt: {
        tag: "Atualização",
        title: "Os Portões das Ruínas Lunares Se Abrem",
        excerpt: "Uma primeira olhada no anel destruído além do vale: pedras flutuantes, marés lunares e um chefe que caça pela luz das estrelas.",
        body: [
          "Pela primeira vez, a expedição atravessou a Ponte de Prata e pisou entre as Ruínas Lunares — o anel de pedra destruído que uma vez conectou Moon Valley ao que existe além da lua.",
          "A região funciona com marés lunares: na hora prata, a gravidade afrouxa e ilhotas inteiras de rocha derivam entre os cacos do portão. Os exploradores precisarão sincronizar suas travessias com as fases da lua.",
          "Guardando o santuário interior está Vharûn, o Devorador de Estrelas — uma criatura que cega toda tocha e lanternada dentro da arena. Restam apenas som e luz estelar. Esta crônica será expandida quando os relatos da expedição retornarem."
        ]
      }
    },
    {
      id: "ashenmaw-teaser",
      category: "update",
      date: "2026-09-28",
      image: "assets/region-ash.svg",
      en: {
        tag: "Update",
        title: "Ashenmaw: Heat, Ash and Old Debts",
        excerpt: "The volcanic south is documented: obsidian spines, rivers of ember and the forges that once armed the vale.",
        body: [
          "The southern charts are complete. Ashenmaw is a land where the mountains breathe: rivers of ember run beneath obsidian spines, and the old forges still burn under the supervision of the Cinder Wardens.",
          "Heat will be a gameplay system, not a decoration. Armor, route and time of day will decide how deep into the caldera a company can go — and what it can carry back."
        ]
      },
      pt: {
        tag: "Atualização",
        title: "Ashenmaw: Calor, Cinzas e Dívidas Antigas",
        excerpt: "O sul vulcânico foi documentado: espinhos de obsidiana, rios de brasa e as forjas que un armaram o vale.",
        body: [
          "Os mapas do sul estão completos. Ashenmaw é uma terra onde as montanhas respiram: rios de brasa correm sob espinhos de obsidiana e as forjas antigas ainda queimam sob a supervisão dos Guardiões das Cinzas.",
          "O calor será um sistema de gameplay, não um enfeite. Armadura, rota e hora do dia decidem quão fundo na caldeira uma companhia pode ir — e o que consegue trazer de volta."
        ]
      }
    },
    {
      id: "eldergrove-bestiary",
      category: "lore",
      date: "2026-09-10",
      image: "assets/region-grove.svg",
      en: {
        tag: "Lore",
        title: "Bestiary Entry: The Antlered Watchers",
        excerpt: "They do not hunt travelers. They follow them — silently, for days, until the forest decides.",
        body: [
          "The first rangers to enter the Eldergrove reported being followed for six days by figures half-hidden among the roots. They never attacked. They only watched.",
          "The Watchers are not beasts in the usual sense. They appear to judge intent: parties carrying axes were turned back at the root-bridge, while those who walked empty-handed were allowed to pass and were later found guided to water and shelter.",
          "Whether they serve the forest or are the forest remains an open question among the lorekeepers of Moon Valley."
        ]
      },
      pt: {
        tag: "Lore",
        title: "Entrada do Bestiário: Os Vigias de Chifres",
        excerpt: "Eles não caçam viajantes. Eles os seguem — em silêncio, por dias, até que a floresta decida.",
        body: [
          "Os primeiros rangeres a entrarem na Floresta Ancestral relataram ser seguidos por seis dias por figuras meio escondidas entre as raízes. Nunca atacaram. Apenas observaram.",
          "Os Vigias não são bestas no sentido comum. Parecem julgar intenção: grupos carregando machados foram devolvidos na ponte-de-raiz, enquanto aqueles que caminharam desarmados foram autorizados a passar e depois foram encontrados guiados até água e abrigo.",
          "Se eles servem à floresta ou são a floresta permanece uma questão aberta entre os guardiões de lore de Moon Valley."
        ]
      }
    },
    {
      id: "frostvale-aurora",
      category: "lore",
      date: "2026-08-22",
      image: "assets/region-frost.svg",
      en: {
        tag: "Lore",
        title: "Why the Aurora Never Sleeps in Frostvale",
        excerpt: "The eternal light above the frozen kingdom is not a phenomenon. It is a signal.",
        body: [
          "Scholars long believed the aurora of Frostvale was a quirk of the atmosphere. The frozen archives suggest otherwise: the light answers the bells of the submerged cathedral, ringing beneath the ice once every moon.",
          "Whatever sleeps below the frozen lake is not dead. It is waiting — and the aurora is its heartbeat, visible for a hundred leagues."
        ]
      },
      pt: {
        tag: "Lore",
        title: "Por Que a Aurora Nunca Dorme no Vale Glacial",
        excerpt: "A luz eterna acima do reino congelado não é um fenômeno. É um sinal.",
        body: [
          "Estudiosos acreditaram por muito tempo que a aurora do Vale Glacial era uma peculiaridade da atmosfera. Os arquivos congelados sugerem o contrário: a luz responde aos sinos da catedral submersa, que soam sob o gelo a cada lua.",
          "O que quer que dorma sob o lago congelado não está morto. Está esperando — e a aurora é seu batimento cardíaco, visível por cem léguas."
        ]
      }
    },
    {
      id: "first-expedition",
      category: "event",
      date: "2026-08-05",
      image: "assets/scene-mountains.svg",
      en: {
        tag: "Event",
        title: "The First Expedition Sets Out from Starfall Harbor",
        excerpt: "A community event: walk the old road with the first companies and name what you find.",
        body: [
          "The first expedition departed from Starfall Harbor at dusk, following the old road toward the valley's heart. Companies were formed, banners were raised, and a journal was given to each captain.",
          "What the expedition finds will be recorded in the public chronicles — and the names players choose for unnamed places may enter the official maps of Moon Valley."
        ]
      },
      pt: {
        tag: "Evento",
        title: "A Primeira Expedição Parte do Porto da Queda Estelar",
        excerpt: "Um evento da comunidade: percorra a estrada antiga com as primeiras companhias e nomeie o que encontrar.",
        body: [
          "A primeira expedição partiu do Porto da Queda Estelar ao anoitecer, seguindo a estrada antiga rumo ao coração do vale. Companhias foram formadas, estandartes hasteados e um diário foi entregue a cada capitão.",
          "O que a expedição encontrar será registrado nas crônicas públicas — e os nomes que os jogadores escolherem para lugares sem nome podem entrar nos mapas oficiais de Moon Valley."
        ]
      }
    },
    {
      id: "closed-chronicle",
      category: "update",
      date: "2026-07-15",
      image: "assets/scene-why.svg",
      en: {
        tag: "Update",
        title: "Combat Stances: The First Closed Chronicle",
        excerpt: "A deep dive into the timing-based stance system, tested with the first invited companies.",
        body: [
          "The first closed tests of the stance system are complete. Combat in Moon Valley rewards reading the enemy: every stance answers another, and raw strength rarely overcomes preparation.",
          "Full results will be shared with the community once the balance sheets are finalized. Thank you to every company that walked into the arena."
        ]
      },
      pt: {
        tag: "Atualização",
        title: "Posturas de Combate: A Primeira Crônica Fechada",
        excerpt: "Uma análise profunda do sistema de posturas baseado em timing, testado com as primeiras companhias convidadas.",
        body: [
          "Os primeiros testes fechados do sistema de posturas estão completos. O combate em Moon Valley recompensa ler o inimigo: cada postura responde a outra, e a força raramente supera a preparação.",
          "Os resultados completos serão compartilhados com a comunidade quando os balancetes de equilíbrio forem finalizados. Obrigado a toda companhia que entrou na arena."
        ]
      }
    }
  ],

  /* ==========================================================
     REGIONS — world section
     ========================================================== */
  regions: [
    {
      id: "frostvale",
      scene: "assets/regions/frostvale.jpg",
      tone: "ice",
      map: { x: 47, y: 12 },
      en: {
        biome: "Frozen Kingdom",
        name: "Frostvale",
        desc: "A kingdom under eternal aurora, where a submerged cathedral still rings its bells beneath the ice and glaciers remember the names of kings.",
        detail: [
          "**Biome:** Glacial tundra, ice caverns, submerged ruins.",
          "**Inhabitants:** The Aurora Wardens, frost-born herds, and something that sleeps under the frozen lake.",
          "**Exploration:** Light is scarce and warmth is a resource. Expeditions must plan routes around the aurora cycles — the ice is safest when the sky burns."
        ]
      },
      pt: {
        biome: "Reino Congelado",
        name: "Vale Glacial",
        desc: "Um reino sob aurora eterna, onde uma catedral submersa ainda faz seus sinos soar sob o gelo e as geleiras lembram os nomes dos reis.",
        detail: [
          "**Bioma:** Tundra glacial, cavernas de gelo, ruínas submersas.",
          "**Habitantes:** Os Guardiões da Aurora, rebanhos nascidos do gelo e algo que dorme sob o lago congelado.",
          "**Exploração:** Luz é escassa e calor é um recurso. As expedições precisam planejar rotas pelos ciclos da aurora — o gelo é mais seguro quando o céu queima."
        ]
      }
    },
    {
      id: "eldergrove",
      scene: "assets/region-grove.svg",
      tone: "forest",
      map: { x: 82, y: 30 },
      en: {
        biome: "Ancient Forest",
        name: "The Eldergrove",
        desc: "Roots older than kingdoms hold up a canopy that never sees noon. The forest remembers every oath sworn beneath its trees.",
        detail: [
          "**Biome:** Primeval forest, root bridges, moss-covered ruins.",
          "**Inhabitants:** The Antlered Watchers, moss herds, and the last speakers of the root-tongue.",
          "**Exploration:** There are no straight roads in the Eldergrove. Travelers navigate by oaths, songs and the direction the Watchers face."
        ]
      },
      pt: {
        biome: "Floresta Ancestral",
        name: "A Floresta Ancestral",
        desc: "Raízes mais antigas que reinos sustentam uma copa que nunca vê o meio-dia. A floresta lembra de todo juramento feito sob suas árvores.",
        detail: [
          "**Bioma:** Floresta primordial, pontes-de-raiz, ruínas cobertas de musgo.",
          "**Habitantes:** Os Vigias de Chifres, rebanhos de musgo e os últimos falantes da língua-raiz.",
          "**Exploração:** Não há estradas retas na Floresta Ancestral. Os viajantes navegam por juramentos, canções e a direção para onde os Vigias olham."
        ]
      }
    },
    {
      id: "ashenmaw",
      scene: "assets/regions/ashenmaw.jpg",
      tone: "fire",
      map: { x: 25, y: 33 },
      en: {
        biome: "Volcanic Lands",
        name: "Ashenmaw",
        desc: "The mountains breathe here. Ember rivers run beneath obsidian spines, and the old forges still burn for anyone able to pay the heat.",
        detail: [
          "**Biome:** Calderas, obsidian badlands, subterranean forges.",
          "**Inhabitants:** The Cinder Wardens, ember-drakes, and the smith-clans who never left.",
          "**Exploration:** Heat is a system: armor, route and hour decide how deep a company can go — and what it can carry back to the vale."
        ]
      },
      pt: {
        biome: "Terras Vulcânicas",
        name: "Ashenmaw",
        desc: "As montanhas respiram aqui. Rios de brasa correm sob espinhos de obsidiana e as forjas antigas ainda queimam para quem consegue pagar o calor.",
        detail: [
          "**Bioma:** Calderas, terras de obsidiana, forjas subterrâneas.",
          "**Habitantes:** Os Guardiões das Cinzas, dracas de brasa e os clãs de ferreiros que nunca partiram.",
          "**Exploração:** O calor é um sistema: armadura, rota e hora decidem quão fundo uma companhia pode ir — e o que consegue trazer de volta ao vale."
        ]
      }
    },
    {
      id: "moongate",
      scene: "assets/regions/moongate.jpg",
      tone: "moon",
      map: { x: 56, y: 49 },
      en: {
        biome: "Lunar Ruins",
        name: "The Moongate Ruins",
        desc: "A shattered ring of stone that once bridged Moon Valley to whatever waits beyond the moon. Gravity loosens when the silver hour comes.",
        detail: [
          "**Biome:** Floating debris fields, silver deserts, broken colonnades.",
          "**Inhabitants:** Star-priests of a vanished court, tide-wraiths, and Vharûn the Star-Eater.",
          "**Exploration:** Crossings must be timed with the lunar phases. At the silver hour, whole islands drift between the shards of the gate."
        ]
      },
      pt: {
        biome: "Ruínas Lunares",
        name: "As Ruínas Lunares",
        desc: "Um anel de pedra destruído que uma vez ligava Moon Valley ao que espera além da lua. A gravidade afrouxa quando chega a hora prata.",
        detail: [
          "**Bioma:** Campos de escombros flutuantes, desertos prateados, colunatas quebradas.",
          "**Habitantes:** Sacerdotes-estrela de uma corte desaparecida, espectros de maré e Vharûn, o Devorador de Estrelas.",
          "**Exploração:** As travessias precisam ser sincronizadas com as fases da lua. Na hora prata, ilhas inteiras derivam entre os cacos do portão."
        ]
      }
    }
  ],

  /* ==========================================================
     FEATURES — gameplay systems
     ========================================================== */
  features: [
    {
      icon: "sword",
      en: {
        title: "Classes & Abilities",
        text: "Paths of war, wildcraft and spellcraft — each class carries a legend, and legends can be remade as you grow."
      },
      pt: {
        title: "Classes e Habilidades",
        text: "Caminhos de guerra, arte selvagem e feitiçaria — cada classe carrega uma lenda, e lendas podem ser refeitas conforme você cresce."
      }
    },
    {
      icon: "shield",
      en: {
        title: "Combat & Equipment",
        text: "A timing-based stance system where reading the enemy matters more than raw strength, and every relic has a history."
      },
      pt: {
        title: "Combate e Equipamentos",
        text: "Um sistema de posturas baseado em timing, onde ler o inimigo importa mais que força bruta, e cada relíquia tem uma história."
      }
    },
    {
      icon: "compass",
      en: {
        title: "Exploration & Quests",
        text: "No straight roads: routes shift with weather, tides and seasons. Quests are chronicles you help write."
      },
      pt: {
        title: "Exploração e Missões",
        text: "Sem estradas retas: as rotas mudam com clima, marés e estações. Missões são crônicas que você ajuda a escrever."
      }
    },
    {
      icon: "beast",
      en: {
        title: "Creatures & Bosses",
        text: "From the Antlered Watchers to Vharûn the Star-Eater — creatures that hunt, judge and remember those who disturb them."
      },
      pt: {
        title: "Criaturas e Chefes",
        text: "Dos Vigias de Chifres a Vharûn, o Devorador de Estrelas — criaturas que caçam, julgam e lembram daqueles que as perturbam."
      }
    },
    {
      icon: "star",
      en: {
        title: "Progression & Customization",
        text: "Grow in the directions you choose. Banners, titles, stances and relics mark the road you walked."
      },
      pt: {
        title: "Progressão e Personalização",
        text: "Cresça nos caminhos que escolher. Estandartes, títulos, posturas e relíquias marcam a estrada que você percorreu."
      }
    },
    {
      icon: "banner",
      en: {
        title: "Group Events",
        text: "Expeditions, sieges and lunar events that ask for companies of players — legends are rarely written alone."
      },
      pt: {
        title: "Eventos em Grupo",
        text: "Expedições, cercos e eventos lunares que pedem companhias de jogadores — lendas raramente são escritas em solidão."
      }
    }
  ],

  /* ==========================================================
     CLASSES — tabs (first tab = Kaelith)
     images: drop files in assets/classes/ (e.g. kaelith-1.jpg)
             and list them here to extend the gallery.
     videos: { src, poster } entries open in the video modal.
     ========================================================== */
  classes: [
    {
      id: "kaelith",
      tone: "blood",
      sigil: "blade",
      images: [
        "assets/classes/kaelith-1.jpg",
        "assets/classes/kaelith-2.jpg",
        "assets/classes/kaelith-3.jpg",
        "assets/classes/kaelith-4.jpg"
      ],
      videos: [
        { src: "assets/videos/kaelith-1.mp4", poster: "assets/videos/kaelith-1-poster.jpg" },
        { src: "assets/videos/kaelith-2.mp4", poster: "assets/videos/kaelith-2-poster.jpg" },
        { src: "assets/videos/kaelith-3.mp4", poster: "assets/videos/kaelith-3-poster.jpg" }
      ],
      en: {
        name: "Kaelith",
        role: "Blood-Gem Duelist",
        text: "Silver-haired and sharp-eyed, Kaelith fights with chains, blades and blood-gems. She turns every wound into leverage — a dueliste who ends the fight the moment her opponent hesitates.",
        stats: [
          { label: "Damage", value: 85 },
          { label: "Survivability", value: 55 },
          { label: "Mobility", value: 90 },
          { label: "Range", value: 30 }
        ],
        traits: [
          { label: "Style", value: "Agile duelist & counters" },
          { label: "Arsenal", value: "Blood-gem chains, twin blades" },
          { label: "Oath", value: "No second chances" }
        ]
      },
      pt: {
        name: "Kaelith",
        role: "Duelista Rubra",
        text: "De cabelos prateados e olhos vermelhos, Kaelith luta com correntes, lâminas e gemas de sangue. Transforma cada ferida em vantagem — uma duelista que encerra a luta no instante em que o oponente hesita.",
        stats: [
          { label: "Dano", value: 85 },
          { label: "Sobrevivência", value: 55 },
          { label: "Mobilidade", value: 90 },
          { label: "Alcance", value: 30 }
        ],
        traits: [
          { label: "Estilo", value: "Duelista ágil e contragolpes" },
          { label: "Arsenal", value: "Correntes de gema e lâminas gêmeas" },
          { label: "Juramento", value: "Sem segundas chances" }
        ]
      }
    },
    {
      id: "theryon",
      tone: "iron",
      sigil: "gun",
      images: [],
      videos: [],
      en: {
        name: "Theryon",
        role: "Oath-Gun Sharpshooter",
        text: "Theryon never misses twice. Bound to an oath-forged rifle, he measures the vale in breaths and trigger pulls — his shot always arrives before the warning.",
        stats: [
          { label: "Damage", value: 90 },
          { label: "Survivability", value: 50 },
          { label: "Mobility", value: 60 },
          { label: "Range", value: 95 }
        ],
        traits: [
          { label: "Style", value: "Ranged precision & burst" },
          { label: "Arsenal", value: "Oath-forged rifle" },
          { label: "Oath", value: "One breath, one bullet" }
        ]
      },
      pt: {
        name: "Theryon",
        role: "Atirador Jurado",
        text: "Theryon nunca erra duas vezes. Ligado a um rifle forjado por juramento, mede o vale em suspiros e disparos — seu tiro sempre chega antes do aviso.",
        stats: [
          { label: "Dano", value: 90 },
          { label: "Sobrevivência", value: 50 },
          { label: "Mobilidade", value: 60 },
          { label: "Alcance", value: 95 }
        ],
        traits: [
          { label: "Estilo", value: "Precisão à distância e rajadas" },
          { label: "Arsenal", value: "Rifle forjado por juramento" },
          { label: "Juramento", value: "Um suspiro, uma bala" }
        ]
      }
    },
    {
      id: "nyfheris",
      tone: "arcane",
      sigil: "arcane",
      images: [],
      videos: [],
      en: {
        name: "Nyfheris",
        role: "Arcane Seer",
        text: "Nyfheris reads the runes the moon left behind. Where they point, the air remembers older laws — and obeys.",
        stats: [
          { label: "Damage", value: 80 },
          { label: "Survivability", value: 45 },
          { label: "Mobility", value: 50 },
          { label: "Range", value: 75 }
        ],
        traits: [
          { label: "Style", value: "Spellcraft & control" },
          { label: "Arsenal", value: "Rune staff, starfire" },
          { label: "Oath", value: "Knowledge before mercy" }
        ]
      },
      pt: {
        name: "Nyfheris",
        role: "Vidente Arcano",
        text: "Nyfheris lê as runas que a lua deixou para trás. Onde aponta, o ar lembra leis mais antigas — e obedece.",
        stats: [
          { label: "Dano", value: 80 },
          { label: "Sobrevivência", value: 45 },
          { label: "Mobilidade", value: 50 },
          { label: "Alcance", value: 75 }
        ],
        traits: [
          { label: "Estilo", value: "Feitiçaria e controle" },
          { label: "Arsenal", value: "Cajado rúnico e fogo estelar" },
          { label: "Juramento", value: "Conhecimento antes da misericórdia" }
        ]
      }
    },
    {
      id: "vaelthor",
      tone: "moon",
      sigil: "bow",
      images: [],
      videos: [],
      en: {
        name: "Vaelthor",
        role: "Moonlit Ranger",
        text: "Vaelthor walks the roads no map keeps. Arrow first, question later — the night owes him nothing, and he collects anyway.",
        stats: [
          { label: "Damage", value: 75 },
          { label: "Survivability", value: 60 },
          { label: "Mobility", value: 80 },
          { label: "Range", value: 85 }
        ],
        traits: [
          { label: "Style", value: "Precision at range" },
          { label: "Arsenal", value: "Longbow & moonsteel" },
          { label: "Oath", value: "One shot, one debt" }
        ]
      },
      pt: {
        name: "Vaelthor",
        role: "Patrulheiro da Lua",
        text: "Vaelthor percorre estradas que nenhum mapa guarda. Primeiro o flecha, depois a pergunta — a noite nada lhe deve, e ele cobra assim mesmo.",
        stats: [
          { label: "Dano", value: 75 },
          { label: "Sobrevivência", value: 60 },
          { label: "Mobilidade", value: 80 },
          { label: "Alcance", value: 85 }
        ],
        traits: [
          { label: "Estilo", value: "Precisão à distância" },
          { label: "Arsenal", value: "Arco longo e aço lunar" },
          { label: "Juramento", value: "Um tiro, uma dívida" }
        ]
      }
    }
  ],

  /* ==========================================================
     BOOKS — lore volumes shown in the Books section.
     icon: star | beast | moon | flame | compass | banner
     tone: ice | forest | fire | moon (cover colors)
     ========================================================== */
  books: [
    {
      id: "aurora-codex",
      tone: "ice",
      icon: "star",
      en: {
        title: "The Aurora Codex",
        kind: "Lore Codex",
        status: "In development",
        text: "The first volume of the Vale's library gathers everything the frost-scribes could confirm about the eternal light above Frostvale: bell-tones beneath the ice, the drowned cathedral, and the signal that answers once every moon. What sleeps below the frozen lake is not dead — the codex is being copied chapter by chapter as the archives are decrypted."
      },
      pt: {
        title: "O Códice da Aurora",
        kind: "Códice de Lore",
        status: "Em desenvolvimento",
        text: "O primeiro volume da biblioteca do Vale reúne tudo o que os escribas do gelo puderam confirmar sobre a luz eterna acima do Frostvale: toques de sino sob o gelo, a catedral submersa e o sinal que responde uma vez a cada lua. O que dorme sob o lago congelado não está morto — o códice está sendo copiado capítulo a capítulo conforme os arquivos são decifrados."
      }
    },
    {
      id: "bestiary-vale",
      tone: "forest",
      icon: "beast",
      en: {
        title: "Bestiary of the Vale",
        kind: "Field Journal",
        status: "In development",
        text: "Pages of sketches, pawprints and half-true warnings gathered by the rangers of Eldergrove. It opens with the Antlered Watchers — figures that follow travelers in silence for days, judging intent before the forest decides — and continues with the beasts of ash, root and starlight. New entries are added whenever an expedition returns with more than it left with."
      },
      pt: {
        title: "Bestiário do Vale",
        kind: "Diário de Campo",
        status: "Em desenvolvimento",
        text: "Páginas de espegas, pegadas e avisos meio verdadeiros reunidos pelos rangeres da Eldergrove. Abre com os Vigias de Chifres — figuras que seguem viajantes em silêncio por dias, julgando a intenção antes de a floresta decidir — e segue com as bestas de cinza, raiz e luz estelar. Novas entradas surgem quando uma expedição volta com mais do que levou."
      }
    },
    {
      id: "debts-of-the-moon",
      tone: "moon",
      icon: "moon",
      en: {
        title: "Debts of the Moon",
        kind: "Forbidden Folio",
        status: "In development",
        text: "A slim, chain-bound folio on the Moongate and whatever stands on the other side of it. It counts the debts the moon keeps: names written in starlight, crossings made at the silver hour, and the price Vharûn, the Star-Eater, collects for every torch that burns inside his arena. Readers are advised to finish it before the next full moon."
      },
      pt: {
        title: "Dívidas da Lua",
        kind: "Fólio Proibido",
        status: "Em desenvolvimento",
        text: "Um fino fólio preso por correntes sobre o Moongate e o que quer que exista do outro lado. Conta as dívidas que a lua guarda: nomes escritos em luz estelar, travessias feitas na hora prata e o preço que Vharûn, o Devorador de Estrelas, cobra de toda tocha que queima dentro de sua arena. Recomenda-se terminá-lo antes da próxima lua cheia."
      }
    },
    {
      id: "ash-and-oaths",
      tone: "fire",
      icon: "flame",
      en: {
        title: "Ash & Oaths",
        kind: "Forge Chronicle",
        status: "In development",
        text: "The story of the forges that once armed the whole vale, told by the Cinder Wardens who still keep them burning. Heat, ash and old debts: which blades were sworn, which were broken, and why the obsidian spines of Ashenmaw remember every promise hammered into them. The final chapter is waiting for a name to be returned to the fire."
      },
      pt: {
        title: "Cinzas e Juramentos",
        kind: "Crônica da Forja",
        status: "Em desenvolvimento",
        text: "A história das forjas que uniram o vale inteiro, contada pelos Guardiões das Cinzas que ainda as mantêm acesas. Calor, cinzas e dívidas antigas: quais lâminas foram juradas, quais foram quebradas e por que os espinhos de obsidiana da Ashenmaw lembram todo promessa martelada nelas. O capítulo final espera um nome de volta ao fogo."
      }
    }
  ],

  /* ==========================================================
     ARMORY — weapons, armor and relics of the Vale.
     kind: weapon | armor | item
     rarity: common | rare | epic | legendary
     icon: sword | gun | bow | staff | shield | helm | ring
           | potion | star | flame | beast | banner
     ========================================================== */
  armory: [
    {
      id: "bloodgem-chains",
      kind: "weapon",
      rarity: "epic",
      icon: "sword",
      en: {
        name: "Blood-Gem Chains",
        type: "Twin blades & chain",
        text: "Kaelith's own weapons: blades strung on chain links set with blood-gems that drink every wound. The gem warms when the duel nears its end — for her opponent, that warmth is the last thing felt.",
        stats: [ { label: "Damage", value: 88 }, { label: "Speed", value: 84 }, { label: "Reach", value: 65 } ]
      },
      pt: {
        name: "Correntes de Gema Rubra",
        type: "Lâminas gêmeas e corrente",
        text: "As próprias armas de Kaelith: lâminas presas a elos com gemas de sangue que bebem cada ferida. A gema esquenta quando o duelo se aproxima do fim — para o oponente, esse calor é a última coisa sentido.",
        stats: [ { label: "Dano", value: 88 }, { label: "Velocidade", value: 84 }, { label: "Alcance", value: 65 } ]
      }
    },
    {
      id: "oath-rifle",
      kind: "weapon",
      rarity: "legendary",
      icon: "gun",
      en: {
        name: "Oath-Forged Rifle",
        type: "Marksman rifle",
        text: "Forged in the Cinder Wardens' pits and sworn on the day Theryon took his oath. Its barrel records every shot fired in its owner's name — and each name must eventually be collected.",
        stats: [ { label: "Damage", value: 95 }, { label: "Speed", value: 55 }, { label: "Reach", value: 98 } ]
      },
      pt: {
        name: "Rifle Forjada por Juramento",
        type: "Rifle de atirador",
        text: "Forjada nas forjas dos Guardiões das Cinzas e jurada no dia em que Theryon fez seu pacto. Seu cano registra cada disparo feito em nome do dono — e todo nome deve ser cobrado um dia.",
        stats: [ { label: "Dano", value: 95 }, { label: "Velocidade", value: 55 }, { label: "Alcance", value: 98 } ]
      }
    },
    {
      id: "moonsteel-longbow",
      kind: "weapon",
      rarity: "rare",
      icon: "bow",
      en: {
        name: "Moonsteel Longbow",
        type: "Longbow",
        text: "Drawn from moonsteel that only answers at night. Vaelthor's bow makes no sound when the string is released — the arrow simply arrives, as if it were always there.",
        stats: [ { label: "Damage", value: 78 }, { label: "Speed", value: 74 }, { label: "Reach", value: 90 } ]
      },
      pt: {
        name: "Arco Longo de Aço Lunar",
        type: "Arco longo",
        text: "Feito de aço lunar que só responde à noite. O arco de Vaelthor não faz som quando a corda se solta — a flecha simplesmente chega, como se sempre estivesse lá.",
        stats: [ { label: "Dano", value: 78 }, { label: "Velocidade", value: 74 }, { label: "Alcance", value: 90 } ]
      }
    },
    {
      id: "runestone-staff",
      kind: "weapon",
      rarity: "epic",
      icon: "staff",
      en: {
        name: "Runestone Staff",
        type: "Arcane focus",
        text: "A focus carved from a fallen Moongate shard. The runes on Nyfheris's staff rewrite themselves between castings — no two spells ever leave it the same way twice.",
        stats: [ { label: "Power", value: 90 }, { label: "Control", value: 88 }, { label: "Reach", value: 70 } ]
      },
      pt: {
        name: "Cajado de Pedra Rúnica",
        type: "Foco arcano",
        text: "Um foco talhado de um caco caído do Moongate. As runas do cajado de Nyfheris se reescrevem entre conjurações — nenhum feitiço sai dele igual ao anterior.",
        stats: [ { label: "Poder", value: 90 }, { label: "Controle", value: 88 }, { label: "Alcance", value: 70 } ]
      }
    },
    {
      id: "aurora-plate",
      kind: "armor",
      rarity: "legendary",
      icon: "shield",
      en: {
        name: "Aurora Plate",
        type: "Heavy plate",
        text: "Forged under Frostvale's eternal aurora so the light itself is sealed between its layers. The plate has never been breached — it has, however, been returned to the forge three times.",
        stats: [ { label: "Defense", value: 94 }, { label: "Weight", value: 80 }, { label: "Warmth", value: 95 } ]
      },
      pt: {
        name: "Placa da Aurora",
        type: "Armadura pesada",
        text: "Forjada sob a aurora eterna do Frostvale para selar a própria luz entre suas camadas. A armadura nunca foi atravessada — mas já voltou à forja três vezes.",
        stats: [ { label: "Defesa", value: 94 }, { label: "Peso", value: 80 }, { label: "Calor", value: 95 } ]
      }
    },
    {
      id: "warden-helm",
      kind: "armor",
      rarity: "rare",
      icon: "helm",
      en: {
        name: "Antlered Warden Helm",
        type: "Light helm",
        text: "Crowned with the antlers of a Watcher that chose not to attack. Wearers report hearing the Eldergrove's silence through it — a silence that sometimes answers questions.",
        stats: [ { label: "Defense", value: 68 }, { label: "Weight", value: 35 }, { label: "Awareness", value: 85 } ]
      },
      pt: {
        name: "Elmo do Guardião de Chifres",
        type: "Elmo leve",
        text: "Coroado com os chifres de um Vigia que escolheu não atacar. Quem usa relata ouvir o silêncio da Eldergrove através dele — um silêncio que às vezes responde perguntas.",
        stats: [ { label: "Defesa", value: 68 }, { label: "Peso", value: 35 }, { label: "Percepção", value: 85 } ]
      }
    },
    {
      id: "cinder-cloak",
      kind: "armor",
      rarity: "epic",
      icon: "flame",
      en: {
        name: "Cinder Warden Cloak",
        type: "Warden cloak",
        text: "A cloak woven from ember-thread that never goes out. It drinks the heat of any flame it touches — Ashenmaw's forges burn a little colder when one of these passes through.",
        stats: [ { label: "Defense", value: 58 }, { label: "Weight", value: 30 }, { label: "Fireward", value: 92 } ]
      },
      pt: {
        name: "Manto do Guardião de Cinzas",
        type: "Manto de guardião",
        text: "Um manto tecido com fio-brasa que jamais se apaga. Bebe o calor de qualquer chama que toca — as forjas da Ashenmaw queimam um pouco mais frias quando um desses passa por lá.",
        stats: [ { label: "Defesa", value: 58 }, { label: "Peso", value: 30 }, { label: "Antichama", value: 92 } ]
      }
    },
    {
      id: "lunar-signet",
      kind: "item",
      rarity: "epic",
      icon: "ring",
      en: {
        name: "Lunar Signet",
        type: "Trinket ring",
        text: "A silver ring worn by Moongate's gatekeepers. Under a full moon its inner face shows the name of whoever last crossed the gate — and it is never the same name twice.",
        stats: [ { label: "Luck", value: 76 }, { label: "Insight", value: 80 }, { label: "Silence", value: 70 } ]
      },
      pt: {
        name: "Selo Lunar",
        type: "Anel talismã",
        text: "Um anel de prata usado pelos guardiões do Moongate. Sob a lua cheia, sua face interna mostra o nome de quem atravessou o portão por último — e nunca é o mesmo nome duas vezes.",
        stats: [ { label: "Sorte", value: 76 }, { label: "Visão", value: 80 }, { label: "Silêncio", value: 70 } ]
      }
    },
    {
      id: "vale-elixir",
      kind: "item",
      rarity: "common",
      icon: "potion",
      en: {
        name: "Vale Elixir",
        type: "Consumable",
        text: "Brewed from Eldergrove roots and frostwater. Tastes like pine and regret, mends what steel and stubbornness cannot — the first item every expedition packs, and the last one they ever run out of.",
        stats: [ { label: "Restoration", value: 70 }, { label: "Duration", value: 45 }, { label: "Weight", value: 10 } ]
      },
      pt: {
        name: "Elixir do Vale",
        type: "Consumível",
        text: "Bebido de raízes da Eldergrove e água de degelo. Tem gosto de pinheiro e arrependimento, conserta o que o aço e a teimosia não consertam — o primeiro item de toda expedição e o último de que acabam.",
        stats: [ { label: "Restauração", value: 70 }, { label: "Duração", value: 45 }, { label: "Peso", value: 10 } ]
      }
    },
    {
      id: "star-eater-shard",
      kind: "item",
      rarity: "legendary",
      icon: "star",
      en: {
        name: "Star-Eater's Shard",
        type: "Forbidden relic",
        text: "A splinter of the black stone Vharûn wears above his arena. It grows warmer the closer its bearer stands to the Moongate — and cold the moment they turn their back on it.",
        stats: [ { label: "Power", value: 96 }, { label: "Risk", value: 90 }, { label: "Hunger", value: 85 } ]
      },
      pt: {
        name: "Caco do Devorador de Estrelas",
        type: "Relíquia proibida",
        text: "Um caco da pedra negra que Vharûn usa acima de sua arena. Esquenta quanto mais perto o portador fica do Moongate — e esfria no momento em que as costas se voltam para ele.",
        stats: [ { label: "Poder", value: 96 }, { label: "Risco", value: 90 }, { label: "Fome", value: 85 } ]
      }
    }
  ],

  /* ==========================================================
     SHOP — skins, bundles and special items (preview catalog).
     kind: skin | bundle | item
     sigil: blade | gun | arcane | bow | star | shield | banner
     tone: blood | iron | arcane | moon | gold | ice
     price: whole numbers in Moon Shards
     ========================================================== */
  shop: [
    {
      id: "skin-ashen-bride",
      kind: "skin",
      tone: "blood",
      sigil: "blade",
      price: 1200,
      en: {
        name: "Kaelith — Ashen Bride",
        text: "A blood-red duelist set veiled in funeral silk. Chains turn to black lace, the blades keep their edge — the dress, somehow, never tears."
      },
      pt: {
        name: "Kaelith — Noiva de Cinzas",
        text: "Um conjunto de duelista rubro envolto em renda fúnebre. As correntes viram renda preta, as lâminas mantêm o fio — o vestido, de alguma forma, jamais rasga."
      }
    },
    {
      id: "skin-ironclad",
      kind: "skin",
      tone: "iron",
      sigil: "gun",
      price: 950,
      en: {
        name: "Theryon — Ironclad Marksman",
        text: "Full plate over the longcoat, rifle stock in gunmetal and ash. Heavier, louder, and completely uninterested in taking cover."
      },
      pt: {
        name: "Theryon — Atirador Blindado",
        text: "Armadura completa sobre o sobretudo, coronha em metal de guarnição e cinza. Mais pesado, mais alto, e completamente desinteressado em cobertura."
      }
    },
    {
      id: "skin-starborn",
      kind: "skin",
      tone: "arcane",
      sigil: "arcane",
      price: 1100,
      en: {
        name: "Nyfheris — Starborn",
        text: "Robes stitched with the night sky of the first moon. Runes drift across the fabric as if the staff, not the cloth, were casting the spells."
      },
      pt: {
        name: "Nyfheris — Filha das Estrelas",
        text: "Túnicas costuradas com o céu noturno da primeira lua. Runas deslizam pelo pano como se fosse o cajado, e não o tecido, conjurando os feitiços."
      }
    },
    {
      id: "skin-moonprowler",
      kind: "skin",
      tone: "moon",
      sigil: "bow",
      price: 950,
      en: {
        name: "Vaelthor — Moonprowler",
        text: "Silent grey leathers with a hood that drinks the moonlight. Arrows leave no trail; neither does he."
      },
      pt: {
        name: "Vaelthor — Caçador da Lua",
        text: "Couro cinza silencioso e capuz que bebe a luz da lua. As flechas não deixam rastro; ele também não."
      }
    },
    {
      id: "bundle-founders",
      kind: "bundle",
      tone: "gold",
      sigil: "star",
      price: 2900,
      en: {
        name: "Founder's Cache",
        text: "A bundle for the first oath-sworn: one skin of choice, the Vale Elixir pack, a profile emblem, and your name carved into the first Moongate ledger."
      },
      pt: {
        name: "Cofre do Fundador",
        text: "Um pacote para os primeiros jurados: uma skin à escolha, o pack Elixir do Vale, um emblema de perfil e seu nome gravado no primeiro livro do Moongate."
      }
    },
    {
      id: "mount-frostvale",
      kind: "item",
      tone: "ice",
      sigil: "banner",
      price: 1500,
      en: {
        name: "Frostvale Charger",
        text: "A glacier-maned warhorse raised beneath the aurora. Leaves no hoofprints in the snow — Frostvale's riders have never explained why."
      },
      pt: {
        name: "Corcel do Frostvale",
        text: "Um cavalo de guerra de crina glaciar criado sob a aurora. Não deixa pegadas na neve — os cavaleiros do Frostvale nunca explicaram por quê."
      }
    }
  ],

  /* ==========================================================
     YOUTUBE — videos of the official channel.
     url: full YouTube link (watch, youtu.be or shorts).
     When url is null the card shows an honest "coming soon"
     state; thumbnails are local files or auto-derived from the
     YouTube link once set.
     ========================================================== */
  youtube: [
    {
      id: "trailer",
      url: null,
      thumb: "assets/hero-valley.jpg",
      en: { title: "Moon Valley — Official Trailer" },
      pt: { title: "Moon Valley — Trailer Oficial" }
    },
    {
      id: "kaelith-motion",
      url: null,
      thumb: "assets/classes/kaelith-1.jpg",
      en: { title: "Kaelith — Blood-Gem Duelist in Motion" },
      pt: { title: "Kaelith — A Duelista Rubra em Movimento" }
    },
    {
      id: "frostvale-chronicle",
      url: null,
      thumb: "assets/regions/frostvale.jpg",
      en: { title: "Frostvale — Chronicle of the Eternal Aurora" },
      pt: { title: "Frostvale — Crônica da Aurora Eterna" }
    },
    {
      id: "moongate-chronicle",
      url: null,
      thumb: "assets/regions/moongate.jpg",
      en: { title: "The Moongate — Where the Stars Are Eaten" },
      pt: { title: "O Moongate — Onde as Estrelas São Devoradas" }
    }
  ],

  /* ==========================================================
     MEDIA — trailer/video items need a real URL in `url`
     to play; without one they show an honest "coming soon" state.
     ========================================================== */
  media: [
    {
      id: "kaelith-showcase",
      kind: "trailer",
      thumb: "assets/videos/kaelith-1-poster.jpg",
      url: "assets/videos/kaelith-1.mp4",
      en: { title: "Kaelith — First Look", sub: "Trailer" },
      pt: { title: "Kaelith — Primeira Olhada", sub: "Trailer" }
    },
    {
      id: "kaelith-motion",
      kind: "video",
      thumb: "assets/videos/kaelith-2-poster.jpg",
      url: "assets/videos/kaelith-2.mp4",
      en: { title: "Kaelith in Motion", sub: "Gameplay" },
      pt: { title: "Kaelith em Movimento", sub: "Gameplay" }
    },
    {
      id: "kaelith-chronicle",
      kind: "video",
      thumb: "assets/videos/kaelith-3-poster.jpg",
      url: "assets/videos/kaelith-3.mp4",
      en: { title: "Combat Chronicle — Kaelith", sub: "Gameplay" },
      pt: { title: "Crônica de Combate — Kaelith", sub: "Gameplay" }
    },
    {
      id: "shot-castle",
      kind: "screenshot",
      thumb: "assets/scene-mountains.svg",
      en: { title: "The Keep at Golden Hour", sub: "Screenshot" },
      pt: { title: "O Castelo na Hora Dourada", sub: "Captura" }
    },
    {
      id: "shot-grove",
      kind: "screenshot",
      thumb: "assets/region-grove.svg",
      en: { title: "Root-Bridge in the Eldergrove", sub: "Screenshot" },
      pt: { title: "Ponte-de-Raiz na Floresta Ancestral", sub: "Captura" }
    },
    {
      id: "art-aurora",
      kind: "art",
      thumb: "assets/scene-why.svg",
      en: { title: "Concept — The Aurora Watcher", sub: "Concept Art" },
      pt: { title: "Conceito — O Vigia da Aurora", sub: "Arte Conceitual" }
    },
    {
      id: "art-moongate",
      kind: "art",
      thumb: "assets/region-moon.svg",
      en: { title: "Concept — The Shattered Ring", sub: "Concept Art" },
      pt: { title: "Conceito — O Anel Destroçado", sub: "Arte Conceitual" }
    },
    {
      id: "art-community",
      kind: "art",
      thumb: "assets/scene-community.svg",
      en: { title: "Concept — Company at Dusk", sub: "Concept Art" },
      pt: { title: "Conceito — Companhia ao Anoitecer", sub: "Arte Conceitual" }
    }
  ]
};
