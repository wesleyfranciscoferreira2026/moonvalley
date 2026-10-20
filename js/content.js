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
  discordUrl: null,          // e.g. "https://discord.gg/your-server"
  trailerUrl: null,          // e.g. "https://www.youtube.com/watch?v=VIDEO_ID" (YouTube/Vimeo embeds supported)
  socials: [
    /* { key: "x", label: "X", url: "https://x.com/yourprofile", icon: "..." }, */
  ]
};

/* ---------- social icons (inline SVG paths) ---------- */
window.MV_SOCIAL_ICONS = {
  discord: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19.3 5.3A16.7 16.7 0 0 0 15.1 4l-.2.4a15.6 15.6 0 0 1 3.9 1.6 13.5 13.5 0 0 0-11.6 0A15.6 15.6 0 0 1 11 4.4L10.8 4a16.7 16.7 0 0 0-4.2 1.3C3.9 9.4 3.1 13.4 3.5 17.3a16.8 16.8 0 0 0 5.1 2.6l1-1.7a10.9 10.9 0 0 1-1.7-.8l.4-.3a11.9 11.9 0 0 0 10.3 0l.4.3a10.9 10.9 0 0 1-1.7.8l1 1.7a16.8 16.8 0 0 0 5.1-2.6c.5-4.5-.8-8.5-3.1-12zM9.5 14.9c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2zm5 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2z"/></svg>',
  x: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 3h3.1l-6.8 7.8L21.8 21h-6.2l-4.9-6.4L5.1 21H2l7.3-8.3L2.5 3h6.4l4.4 5.8L17.5 3zm-1.1 16.1h1.7L7.7 4.8H5.9l10.5 14.3z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26.3 26.3 0 0 0 2 12a26.3 26.3 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26.3 26.3 0 0 0 22 12a26.3 26.3 0 0 0-.4-4.8zM10 15.1V8.9l5.2 3.1-5.2 3.1z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.3c2.5 0 2.8 0 3.8.1 2.6.1 3.8 1.4 3.9 3.9 0 1 .1 1.3.1 3.8s0 2.8-.1 3.8c-.1 2.5-1.3 3.8-3.9 3.9-1 0-1.3.1-3.8.1s-2.8 0-3.8-.1c-2.6-.1-3.8-1.4-3.9-3.9 0-1-.1-1.3-.1-3.8s0-2.8.1-3.8C4.4 5.8 5.6 4.5 8.2 4.4c1-.1 1.3-.1 3.8-.1zM12 2C9.4 2 9.1 2 8.1 2.1 4.6 2.2 2.2 4.6 2.1 8.1 2 9.1 2 9.4 2 12s0 2.9.1 3.9c.1 3.5 2.5 5.9 6 6 1 .1 1.3.1 3.9.1s2.9 0 3.9-.1c3.5-.1 5.9-2.5 6-6 .1-1 .1-1.3.1-3.9s0-2.9-.1-3.9c-.1-3.5-2.5-5.9-6-6C14.9 2 14.6 2 12 2zm0 4.9a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2zm0 8.4a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6zm5.3-8.6a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z"/></svg>',
  reddit: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M22 12.1a2.2 2.2 0 0 0-3.7-1.6 10.8 10.8 0 0 0-5.4-1.7l1-4.5 3.2.7a1.7 1.7 0 1 0 .2-1.2l-3.8-.8a.6.6 0 0 0-.7.5l-1.1 5.2a10.8 10.8 0 0 0-5.5 1.7A2.2 2.2 0 1 0 4.4 14a4.3 4.3 0 0 0 0 .6c0 3.1 3.6 5.6 8 5.6s8-2.5 8-5.6a4.3 4.3 0 0 0 0-.6A2.2 2.2 0 0 0 22 12.1zm-14.3 2a1.5 1.5 0 1 1 1.5 1.5 1.5 1.5 0 0 1-1.5-1.5zm8.5 3.7a5.7 5.7 0 0 1-4.2 1.3 5.7 5.7 0 0 1-4.2-1.3.5.5 0 0 1 .7-.7 4.8 4.8 0 0 0 3.5 1 4.8 4.8 0 0 0 3.5-1 .5.5 0 1 1 .7.7zm-.3-2.2a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z"/></svg>'
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
      scene: "assets/region-frost.svg",
      tone: "ice",
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
      scene: "assets/region-ash.svg",
      tone: "fire",
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
      scene: "assets/region-moon.svg",
      tone: "moon",
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
     MEDIA — trailer/video items need a real URL in `url`
     to play; without one they show an honest "coming soon" state.
     ========================================================== */
  media: [
    {
      id: "trailer-announce",
      kind: "trailer",
      thumb: "assets/scene-castle.svg",
      url: null,
      en: { title: "Announce Trailer", sub: "Trailer" },
      pt: { title: "Trailer de Anúncio", sub: "Trailer" }
    },
    {
      id: "world-tour",
      kind: "video",
      thumb: "assets/region-frost.svg",
      url: null,
      en: { title: "World Tour — Frostvale", sub: "Video" },
      pt: { title: "Tour pelo Mundo — Vale Glacial", sub: "Vídeo" }
    },
    {
      id: "combat-chronicle",
      kind: "video",
      thumb: "assets/region-ash.svg",
      url: null,
      en: { title: "Combat Chronicle — Stances", sub: "Video" },
      pt: { title: "Crônica de Combate — Posturas", sub: "Vídeo" }
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
