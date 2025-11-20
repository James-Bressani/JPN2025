const days = [
  {
    day: 1,
    date: "December 29",
    location: "Haneda & Yokohama",
    title: "Arrival",
    theme: "from-slate-900 to-blue-900",
    images: ['public/images/1_Yokohama.jpg'],
    highlights: [
      { name: "Land at Haneda Airport", location: "Tokyo" },
      { name: "Get Suica card & Wi-Fi", location: "Haneda Airport" },
      { name: "Send luggage to Osaka via Yamato", location: "Haneda Airport" },
      { name: "Travel to Yokohama", location: "Yokohama" }
    ]
  },
  {
    day: 2,
    date: "December 30",
    location: "Yokohama & Osaka",
    title: "Journey to Osaka Bay",
    theme: "from-blue-900 to-cyan-900",
    images: ['public/images/osakaaquarium.jpg', 'public/images/ghiblistore.jpg'],
    highlights: [
      { name: "Yokohama exploration", location: "Yokohama" },
      { name: "Shinkansen to Shin-Osaka", location: "Shin-Osaka" },
      { name: "Osaka Aquarium Kaiyukan", location: "Osaka Bay" },
      { name: "Tempozan Ferris Wheel", location: "Osaka Bay" },
      { name: "Dinner at Grand Front Osaka", location: "Umeda" },
      { name: "Ghibli Store", location: "Umeda" }
    ]
  },
  {
    day: 3,
    date: "December 31",
    location: "Kobe & Osaka",
    title: "New Year's Eve",
    theme: "from-slate-900 via-purple-900 to-slate-900",
    images: ['public/images/kobenunubokiropeway.jpg', 'public/images/Kobe Harbor.jpg', 'public/images/kobeharbornight.jpg', 'public/images/Namba Yasaka.jpg', 'public/images/dotonbori.jpg'],
    highlights: [
      { name: "Nunobiki Ropeway", location: "Kobe" },
      { name: "Kobe Harbor exploration", location: "Kobe" },
      { name: "Kobe beef dinner", location: "Kobe" },
      { name: "Namba Yasaka Shrine", location: "Namba" },
      { name: "New Year's Eve countdown", location: "Dotonbori" }
    ]
  },
  {
    day: 4,
    date: "January 1",
    location: "Nara & Osaka",
    title: "New Year's Day",
    theme: "from-red-900 via-orange-900 to-slate-900",
    images: ['public/images/naradeer.webp', 'public/images/Tōdai-ji Temple.jpg', 'public/images/Osaka Castle illuminations.jpg'],
    highlights: [
      { name: "Hatsumōde at Nara Park", location: "Nara" },
      { name: "Tōdai-ji Temple", location: "Nara" },
      { name: "Kasuga Taisha Shrine", location: "Nara" },
      { name: "Osaka Castle illuminations", location: "Osaka" }
    ]
  },
  {
    day: 5,
    date: "January 2",
    location: "Kyoto",
    title: "Full Kyoto Day",
    theme: "from-green-900 to-emerald-900",
    images: ['public/images/fushimiinaraishrine.jpeg', 'public/images/teamLab Biovortex.webp', 'public/images/Yasaka Pagoda.webp', 'public/images/Gion district at night.jpg'],
    highlights: [
      { name: "Fushimi Inari Shrine hike", location: "Kyoto" },
      { name: "teamLab Biovortex", location: "Kyoto" },
      { name: "Yasaka Pagoda", location: "Gion" },
      { name: "Gion district at night", location: "Kyoto" }
    ]
  },
  {
    day: 6,
    date: "January 3",
    location: "Osaka",
    title: "Lucky Bags & Osaka Exploration",
    theme: "from-red-900 to-orange-900",
    images: ['public/images/grandfrontosakaluckybag.jpg', 'public/images/Shinsekai neighborhood.webp'],
    highlights: [
      { name: "Fukubukuro (Lucky Bag) shopping", location: "Grand Front Osaka" },
      { name: "Kuromon Ichiba Market lunch", location: "Osaka" },
      { name: "Shinsekai neighborhood", location: "Osaka" }
    ]
  },
  {
    day: 7,
    date: "January 4",
    location: "Osaka",
    title: "Universal Studios Japan",
    theme: "from-indigo-900 to-purple-900",
    images: ['public/images/universalstudiojapannintendoworld.jpg'],
    highlights: [
      { name: "Full day at Universal Studios Japan", location: "Osaka" }
    ]
  },
  {
    day: 8,
    date: "January 5",
    location: "Tokyo",
    title: "Travel to Tokyo, Ginza & Akihabara",
    theme: "from-gray-900 to-slate-800",
    images: ['public/images/ginza.jpg', 'public/images/akihabara.jpg'],
    highlights: [
      { name: "Shinkansen to Shinagawa", location: "Tokyo" },
      { name: "Ginza shopping district", location: "Ginza" },
      { name: "Akihabara arcades", location: "Akihabara" }
    ]
  },
  {
    day: 9,
    date: "January 6",
    location: "Kamakura & Enoshima",
    title: "Kamakura & Enoshima",
    theme: "from-teal-900 to-cyan-900",
    images: ['public/images/Great Buddha (Daibutsu).jpg', 'public/images/Enoden streetcar ride.webp', 'public/images/Jewel of Shonan illumination.png'],
    highlights: [
      { name: "Great Buddha (Daibutsu)", location: "Kamakura" },
      { name: "Enoden streetcar ride", location: "Kamakura-Enoshima" },
      { name: "Jewel of Shonan illumination", location: "Enoshima Island" }
    ]
  },
  {
    day: 10,
    date: "January 7",
    location: "Gala Yuzawa",
    title: "Snowy Day Trip",
    theme: "from-slate-900 to-sky-900",
    images: ['public/images/Gala Yuzawa ski resort.jpg'],
    highlights: [
      { name: "Shinkansen to Echigo-Yuzawa", location: "Tokyo Station" },
      { name: "Gala Yuzawa ski resort", location: "Niigata" }
    ]
  },
  {
    day: 11,
    date: "January 8",
    location: "Tokyo",
    title: "West Tokyo Mega-Day",
    theme: "from-fuchsia-900 to-purple-900",
    images: ['public/images/Giant cat billboard.jpg', 'public/images/shibuyacrossing.jpg'],
    highlights: [
      { name: "Takeshita-dori shopping", location: "Harajuku" },
      { name: "Giant cat billboard", location: "Shinjuku" },
      { name: "Shibuya Sky sunset", location: "Shibuya" },
      { name: "Shibuya Crossing", location: "Shibuya" }
    ]
  },
  {
    day: 12,
    date: "January 9",
    location: "Tokyo",
    title: "East/Bay Tokyo Day",
    theme: "from-sky-900 to-blue-900",
    images: ['public/images/teamlabplanets.webp', 'public/images/tokyoskytree.jpg'],
    highlights: [
      { name: "teamLab Planets", location: "Toyosu" },
      { name: "Tokyo Skytree", location: "Sumida" },
      { name: "Pokemon Center", location: "Solamachi" }
    ]
  },
  {
    day: 13,
    date: "January 10",
    location: "Tokyo",
    title: "Departure Day",
    theme: "from-orange-900 to-red-900",
    images: ['public/images/Odaiba.jpg', 'public/images/odaiba gundam.jpg'],
    highlights: [
      { name: "Odaiba exploration", location: "Odaiba" },
      { name: "Depart from Haneda Airport", location: "Tokyo" }
    ]
  }
];

// --- SHARED UI HELPERS ---

function getIcon(name, classes = "") {
  const icons = {
    home: `<svg class="${classes}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    chevronLeft: `<svg class="${classes}" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
    chevronRight: `<svg class="${classes}" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
    calendar: `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`,
    location: `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
    chevronDown: `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" /></svg>`,
    arrowRight: `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>`
  };
  return icons[name] || '';
}

function getToriiGate(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 100 100" fill="currentColor">
              <!-- Top crossbar with upward curves (kasagi) -->
              <path d="M 0 25 Q 5 18 12 20 L 88 20 Q 95 18 100 25 L 100 30 L 95 28 Q 90 26 88 27 L 12 27 Q 10 26 5 28 L 0 30 Z" />
              <!-- Secondary crossbar (shimaki) -->
              <rect x="5" y="32" width="90" height="3" rx="1" />
              <!-- Middle crossbar (nuki) -->
              <rect x="8" y="45" width="84" height="6" rx="1" />
              <!-- Left pillar (hashira) with slight taper -->
              <path d="M 20 27 L 18 95 L 28 95 L 26 27 Z" />
              <!-- Right pillar (hashira) with slight taper -->
              <path d="M 74 27 L 72 95 L 82 95 L 80 27 Z" />
              <!-- Base supports -->
              <rect x="16" y="95" width="14" height="3" rx="1" />
              <rect x="70" y="95" width="14" height="3" rx="1" />
            </svg>`;
}

function getLantern(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 100 150" fill="currentColor">
              <rect x="40" y="10" width="20" height="5" rx="2" />
              <path d="M 35 15 L 35 45 Q 35 50 40 50 L 60 50 Q 65 50 65 45 L 65 15 Z" />
              <rect x="30" y="50" width="40" height="60" rx="3" />
              <rect x="40" y="110" width="20" height="8" />
              <path d="M 45 118 L 45 135 M 55 118 L 55 135" stroke-width="2" stroke="currentColor" fill="none" />
              <ellipse cx="50" cy="80" rx="8" ry="12" fill="white" opacity="0.3" />
            </svg>`;
}

function getMountFuji(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 200 100" fill="currentColor">
              <path d="M 0 100 L 100 20 L 200 100 Z" />
              <path d="M 70 45 L 100 20 L 130 45 Z" fill="white" opacity="0.9" />
            </svg>`;
}

function getCherryBlossom(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="8" />
              <g transform="translate(50, 50)">
                ${[0, 72, 144, 216, 288].map(angle => `
                  <ellipse cx="0" cy="-20" rx="8" ry="15" transform="rotate(${angle})" />
                `).join('')}
              </g>
            </svg>`;
}

// --- Day-Specific Icons ---

function getTokyoTower(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 100 200" fill="currentColor">
    <path d="M50 10 L80 190 L20 190 Z" fill="none" stroke="currentColor" stroke-width="4"/>
    <line x1="50" y1="10" x2="50" y2="190" stroke="currentColor" stroke-width="2"/>
    <line x1="35" y1="100" x2="65" y2="100" stroke="currentColor" stroke-width="3"/>
    <line x1="28" y1="140" x2="72" y2="140" stroke="currentColor" stroke-width="4"/>
    <rect x="45" y="40" width="10" height="10" fill="currentColor"/>
  </svg>`;
}

function getFerrisWheel(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="50" cy="50" r="40" />
    <circle cx="50" cy="50" r="5" fill="currentColor"/>
    <path d="M50 50 L50 10 M50 50 L90 50 M50 50 L50 90 M50 50 L10 50 M50 50 L78 22 M50 50 L78 78 M50 50 L22 78 M50 50 L22 22" />
    <path d="M40 90 L50 50 L60 90" stroke-width="3"/>
  </svg>`;
}

function getDeer(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 100 100" fill="currentColor">
    <path d="M30 40 Q30 20 50 20 Q70 20 70 40 L70 50 L80 45 L85 50 L70 60 L70 80 L60 80 L60 60 L40 60 L40 80 L30 80 L30 60 L15 50 L20 45 L30 50 Z" />
    <circle cx="40" cy="35" r="2" fill="white"/>
    <path d="M45 20 L40 10 M55 20 L60 10" stroke="currentColor" stroke-width="2"/>
  </svg>`;
}

function getPagoda(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 100 150" fill="currentColor">
    <rect x="40" y="130" width="20" height="20" />
    <path d="M20 130 L50 110 L80 130" fill="none" stroke="currentColor" stroke-width="3"/>
    <rect x="42" y="100" width="16" height="10" />
    <path d="M25 100 L50 85 L75 100" fill="none" stroke="currentColor" stroke-width="3"/>
    <rect x="44" y="75" width="12" height="10" />
    <path d="M30 75 L50 60 L70 75" fill="none" stroke="currentColor" stroke-width="3"/>
    <rect x="46" y="50" width="8" height="10" />
    <path d="M35 50 L50 35 L65 50" fill="none" stroke="currentColor" stroke-width="3"/>
    <line x1="50" y1="35" x2="50" y2="10" stroke="currentColor" stroke-width="2"/>
  </svg>`;
}

function getLuckyBag(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 100 100" fill="currentColor">
    <path d="M20 30 L80 30 L90 90 L10 90 Z" />
    <path d="M30 30 Q30 10 50 10 Q70 10 70 30" fill="none" stroke="currentColor" stroke-width="3"/>
    <text x="50" y="65" font-family="serif" font-size="30" text-anchor="middle" fill="white" font-weight="bold">福</text>
  </svg>`;
}

function getRollercoaster(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 100 100" fill="currentColor">
    <!-- Track rails (double line for realism) -->
    <path d="M 5 85 L 15 65 Q 25 45 35 55 Q 45 65 55 45 Q 65 25 75 35 L 85 55 L 95 60" fill="none" stroke="currentColor" stroke-width="4" />
    <path d="M 5 82 L 15 62 Q 25 42 35 52 Q 45 62 55 42 Q 65 22 75 32 L 85 52 L 95 57" fill="none" stroke="currentColor" stroke-width="2" opacity="0.7" />
    <!-- Support beams with cross bracing -->
    <line x1="15" y1="65" x2="15" y2="95" stroke="currentColor" stroke-width="3" />
    <line x1="35" y1="55" x2="35" y2="95" stroke="currentColor" stroke-width="3" />
    <line x1="55" y1="45" x2="55" y2="95" stroke="currentColor" stroke-width="3" />
    <line x1="75" y1="35" x2="75" y2="95" stroke="currentColor" stroke-width="3" />
    <!-- Cross bracing for structure -->
    <line x1="15" y1="80" x2="35" y2="70" stroke="currentColor" stroke-width="1.5" opacity="0.6" />
    <line x1="35" y1="80" x2="55" y2="65" stroke="currentColor" stroke-width="1.5" opacity="0.6" />
    <line x1="55" y1="70" x2="75" y2="55" stroke="currentColor" stroke-width="1.5" opacity="0.6" />
  </svg>`;
}

function getShinkansen(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 200 60" fill="currentColor">
    <path d="M10 40 Q10 10 50 10 L180 10 L180 50 L20 50 Q10 50 10 40 Z" />
    <rect x="60" y="20" width="30" height="15" fill="white" opacity="0.8"/>
    <rect x="100" y="20" width="30" height="15" fill="white" opacity="0.8"/>
    <rect x="140" y="20" width="30" height="15" fill="white" opacity="0.8"/>
    <path d="M10 40 L180 40" stroke="white" stroke-width="2" opacity="0.5"/>
  </svg>`;
}

function getBuddha(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 100 120" fill="currentColor">
    <!-- Island torii gate for Enoshima -->
    <!-- Top crossbar with upward curves -->
    <path d="M 10 30 Q 15 25 20 27 L 80 27 Q 85 25 90 30 L 90 34 L 85 32 L 20 32 L 15 34 Z" />
    <!-- Middle crossbar -->
    <rect x="15" y="42" width="70" height="5" rx="1" />
    <!-- Left pillar -->
    <path d="M 28 27 L 26 85 L 34 85 L 32 27 Z" />
    <!-- Right pillar -->
    <path d="M 68 27 L 66 85 L 74 85 L 72 27 Z" />
    <!-- Water/island base -->
    <ellipse cx="50" cy="88" rx="40" ry="8" opacity="0.6" />
    <path d="M 20 92 Q 50 95 80 92" fill="none" stroke="currentColor" stroke-width="2" opacity="0.4"/>
  </svg>`;
}

function getSnowman(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 120 100" fill="currentColor">
    <!-- Mountain peaks -->
    <path d="M 0 70 L 30 30 L 50 50 L 70 20 L 90 45 L 120 55 L 120 100 L 0 100 Z" />
    <!-- Snow cap on main peak -->
    <path d="M 55 35 L 70 20 L 85 35 Z" fill="white" opacity="0.9" />
    <path d="M 20 45 L 30 30 L 40 45 Z" fill="white" opacity="0.8" />
    <!-- Ski slopes (diagonal lines) -->
    <line x1="75" y1="25" x2="95" y2="60" stroke="white" stroke-width="1.5" opacity="0.6" stroke-dasharray="3,2" />
    <line x1="65" y1="30" x2="75" y2="55" stroke="white" stroke-width="1.5" opacity="0.6" stroke-dasharray="3,2" />
    <!-- Skier silhouette -->
    <g transform="translate(85, 40)">
      <circle cx="0" cy="0" r="2" />
      <line x1="0" y1="2" x2="0" y2="8" stroke="currentColor" stroke-width="1" />
      <line x1="0" y1="4" x2="-3" y2="6" stroke="currentColor" stroke-width="1" />
      <line x1="0" y1="8" x2="-2" y2="12" stroke="currentColor" stroke-width="1" />
      <line x1="0" y1="8" x2="3" y2="11" stroke="currentColor" stroke-width="1" />
      <line x1="-3" y1="6" x2="-6" y2="5" stroke="currentColor" stroke-width="1" />
    </g>
  </svg>`;
}

function getCat(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 100 100" fill="currentColor">
    <path d="M20 30 L30 10 L40 30 L60 30 L70 10 L80 30 Q90 40 90 60 Q90 90 50 90 Q10 90 10 60 Q10 40 20 30 Z" />
    <circle cx="35" cy="50" r="5" fill="white"/>
    <circle cx="65" cy="50" r="5" fill="white"/>
    <path d="M45 65 Q50 70 55 65" stroke="white" stroke-width="2" fill="none"/>
  </svg>`;
}

function getSkytree(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 100 280" fill="currentColor">
    <!-- Wider base section -->
    <path d="M30 280 L70 280 L65 180 L35 180 Z" />
    <!-- Middle section with observation deck -->
    <path d="M35 180 L65 180 L60 100 L40 100 Z" />
    <rect x="35" y="140" width="30" height="15" rx="2" opacity="0.9"/>
    <!-- Upper section -->
    <path d="M40 100 L60 100 L57 40 L43 40 Z" />
    <rect x="42" y="70" width="16" height="10" rx="2" opacity="0.9"/>
    <!-- Spire -->
    <path d="M43 40 L57 40 L52 10 L48 10 Z" />
    <line x1="50" y1="10" x2="50" y2="0" stroke="currentColor" stroke-width="3"/>
    <!-- Antenna with small flag -->
    <circle cx="50" cy="0" r="2" />
    <!-- Structure details -->
    <line x1="35" y1="220" x2="65" y2="220" stroke="white" stroke-width="1" opacity="0.3"/>
    <line x1="40" y1="150" x2="60" y2="150" stroke="white" stroke-width="1" opacity="0.3"/>
  </svg>`;
}

function getPlane(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 140 100" fill="currentColor">
    <!-- Main body/fuselage -->
    <ellipse cx="70" cy="50" rx="45" ry="12" />
    <!-- Cockpit nose -->
    <path d="M 25 50 Q 15 50 12 50 Q 10 48 12 46 Q 15 46 25 46 Z" />
    <!-- Main wings -->
    <path d="M 55 50 L 20 70 L 20 75 L 25 75 L 60 55 Z" />
    <path d="M 85 50 L 120 70 L 120 75 L 115 75 L 80 55 Z" />
    <!-- Tail wing -->
    <path d="M 105 48 L 125 30 L 128 32 L 110 52 Z" />
    <!-- Tail stabilizer -->
    <path d="M 110 50 L 130 50 L 128 55 L 110 55 Z" />
    <!-- Windows row -->
    <circle cx="40" cy="48" r="2.5" fill="white" opacity="0.7"/>
    <circle cx="50" cy="48" r="2.5" fill="white" opacity="0.7"/>
    <circle cx="60" cy="48" r="2.5" fill="white" opacity="0.7"/>
    <circle cx="70" cy="48" r="2.5" fill="white" opacity="0.7"/>
    <circle cx="80" cy="48" r="2.5" fill="white" opacity="0.7"/>
    <!-- Engine details -->
    <ellipse cx="55" cy="62" rx="6" ry="4" opacity="0.8" />
    <ellipse cx="85" cy="62" rx="6" ry="4" opacity="0.8" />
  </svg>`;
}

function generateSnowflakes(count) {
  return [...Array(count)].map(() => {
    const left = Math.random() * 100;
    const delay = Math.random() * 20; // Increased range
    const duration = 10 + Math.random() * 10;
    const size = Math.random() * 3 + 2;
    // Use negative delay to start animation mid-cycle
    return `<div class="snowflake" style="left: ${left}%; animation-delay: -${delay}s; animation-duration: ${duration}s; width: ${size}px; height: ${size}px; opacity: ${Math.random() * 0.5}"></div>`;
  }).join('');
}

/**
 * Generates HTML for floating cherry blossom petals.
 * @param {number} count - Number of petals to generate.
 * @returns {string} HTML string containing petal elements.
 */
function generatePetals(count = 20) {
  let html = '';
  for (let i = 0; i < count; i++) {
    const left = Math.random() * 100;
    const animationDuration = 10 + Math.random() * 15; // 10-25s
    const delay = Math.random() * 10;
    const size = 10 + Math.random() * 15; // 10-25px
    const opacity = 0.4 + Math.random() * 0.4;

    // Random rotation for starting position
    const rotation = Math.random() * 360;

    html += `
            <div class="absolute top-[-20px] pointer-events-none animate-sakura-fall"
                style="
                    left: ${left}%;
                    width: ${size}px;
                    height: ${size}px;
                    animation-duration: ${animationDuration}s;
                    animation-delay: -${delay}s;
                    opacity: ${opacity};
                    transform: rotate(${rotation}deg);
                ">
                ${getCherryBlossom('w-full h-full text-pink-300/80')}
            </div>
        `;
  }
  return html;
}

function generateFireworksCanvas() {
  return `<canvas id="fireworks-canvas" class="fixed inset-0 pointer-events-none z-0"></canvas>`;
}

function startFireworks(canvasId, intensity = 1) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  });

  class Particle {
    constructor(x, y, color, velocity) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.velocity = velocity;
      this.alpha = 1;
      this.friction = 0.995; // Extremely high friction = almost weightless
      this.gravity = 0.005; // Extremely low gravity = floating effect
    }

    draw() {
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, 2, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    update() {
      this.velocity.x *= this.friction;
      this.velocity.y *= this.friction;
      this.velocity.y += this.gravity;
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.alpha -= 0.003; // Very slow fade out
    }
  }

  class Firework {
    constructor(x, y, targetY, color) {
      this.x = x;
      this.y = y;
      this.targetY = targetY;
      this.color = color;
      this.velocity = { x: 0, y: -6 - Math.random() * 3 }; // Slow launch speed
      this.particles = [];
      this.exploded = false;
    }

    draw() {
      if (!this.exploded) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      this.particles.forEach(particle => particle.draw());
    }

    update() {
      if (!this.exploded) {
        this.velocity.y += 0.05; // Low gravity on rocket
        this.y += this.velocity.y;

        if (this.velocity.y >= 0 || this.y <= this.targetY) {
          this.explode();
        }
      }

      this.particles.forEach((particle, index) => {
        particle.update();
        if (particle.alpha <= 0) {
          this.particles.splice(index, 1);
        }
      });
    }

    explode() {
      this.exploded = true;
      const particleCount = 80; // More particles for realism
      const angleIncrement = (Math.PI * 2) / particleCount;

      for (let i = 0; i < particleCount; i++) {
        const speed = Math.random() * 2 + 1; // Slow explosion speed
        const velocity = {
          x: Math.cos(angleIncrement * i) * speed + (Math.random() - 0.5) * 0.5,
          y: Math.sin(angleIncrement * i) * speed + (Math.random() - 0.5) * 0.5
        };
        this.particles.push(new Particle(this.x, this.y, this.color, velocity));
      }
    }
  }

  let fireworks = [];
  let timer = 0;

  function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'rgba(26, 32, 44, 0.2)'; // Trail effect (bg color with opacity)
    ctx.fillRect(0, 0, width, height);

    // Spawn fireworks
    // Much slower spawn rate: ~2-3 seconds between fireworks
    if (timer % (200 - intensity * 10) === 0) {
      const x = Math.random() * width;
      const targetY = height * 0.2 + Math.random() * (height * 0.3);
      const colors = ['#FFD700', '#FF4500', '#00BFFF', '#32CD32', '#FF69B4'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      fireworks.push(new Firework(x, height, targetY, color));
    }
    timer++;

    fireworks.forEach((firework, index) => {
      firework.update();
      firework.draw();
      if (firework.exploded && firework.particles.length === 0) {
        fireworks.splice(index, 1);
      }
    });
  }

  animate();
}