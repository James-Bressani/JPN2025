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

// Hotels and Transportation Data
const hotels = [
  {
    city: "Yokohama",
    name: "Flexstay Inn Sakuragicho",
    address: "Kanagawa, Yokohama, Naka-ku Hanasaki-cho 2-72-16, Japan",
    coordinates: { lat: 35.4494, lng: 139.6308 },
    checkIn: "December 29, 2025",
    checkOut: "December 30, 2025",
    days: [1],
    nearestStation: {
      name: "Sakuragicho Station",
      address: "1 Chome Sakuragicho, Naka Ward, Yokohama, Kanagawa 231-0062, Japan",
      coordinates: { lat: 35.4510, lng: 139.6304 },
      walkingTime: "5 minutes"
    }
  },
  {
    city: "Osaka",
    name: "Osaka House Sinkan",
    address: "Osaka Prefecture, Osaka, 日本橋東1−5−14, Japan",
    coordinates: { lat: 34.6683, lng: 135.5086 },
    checkIn: "December 30, 2025",
    checkOut: "January 5, 2026",
    days: [2, 3, 4, 5, 6, 7],
    nearestStation: {
      name: "Nipponbashi Station",
      address: "1-chōme-5 Nipponbashi, Chuo Ward, Osaka, 542-0073, Japan",
      coordinates: { lat: 34.6683, lng: 135.5069 },
      walkingTime: "3 minutes"
    },
    nearestYamato: {
      name: "Yamato Transport Nipponbashi",
      address: "1 Chome-14-10 Nipponbashi, Chuo Ward, Osaka, 542-0073, Japan",
      coordinates: { lat: 34.6680, lng: 135.5075 },
      walkingTime: "4 minutes"
    }
  },
  {
    city: "Tokyo",
    name: "Easily to Ikebukuro Asakusa Shibuya for 5",
    address: "Tokyo-to, Tokyo, 東京都田端1-7-16, Japan",
    coordinates: { lat: 35.7380, lng: 139.7606 },
    checkIn: "January 5, 2026",
    checkOut: "January 10, 2026",
    days: [8, 9, 10, 11, 12],
    nearestStation: {
      name: "Tabata Station",
      address: "34 Nishinippori, Arakawa City, Tokyo 116-0013, Japan",
      coordinates: { lat: 35.7380, lng: 139.7610 },
      walkingTime: "2 minutes"
    },
    nearestYamato: {
      name: "Yamato Transport Nishinippori",
      address: "6 Chome-65-1 Nishinippori, Arakawa City, Tokyo 116-0013, Japan",
      coordinates: { lat: 35.7320, lng: 139.7670 },
      walkingTime: "8 minutes"
    }
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
              <!-- Top beam (Kasagi) with elegant curve -->
              <path d="M 2 25 Q 50 15 98 25 L 98 32 Q 50 22 2 32 Z" />
              <!-- Second beam (Shimaki) -->
              <rect x="10" y="35" width="80" height="5" rx="1" />
              <!-- Vertical plaque holder (Gakuzuka) -->
              <rect x="48" y="28" width="4" height="10" />
              <!-- Connecting beam (Nuki) -->
              <rect x="12" y="50" width="76" height="4" rx="1" />
              <!-- Pillars (Hashira) with slight inward taper -->
              <path d="M 22 28 L 18 98 L 28 98 L 26 28 Z" />
              <path d="M 78 28 L 74 98 L 82 98 L 80 28 Z" />
              <!-- Base stones (Kamebara) -->
              <path d="M 14 98 L 32 98 L 30 94 L 16 94 Z" />
              <path d="M 70 98 L 88 98 L 86 94 L 72 94 Z" />
              <!-- Wedges (Kusabi) -->
              <path d="M 20 50 L 18 54 L 28 54 L 26 50 Z" />
              <path d="M 80 50 L 78 54 L 88 54 L 86 50 Z" />
            </svg>`;
}

function getLantern(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 100 150" fill="currentColor">
              <!-- Hanging hook -->
              <path d="M 48 5 L 52 5 L 52 15 L 48 15 Z" />
              <circle cx="50" cy="18" r="3" fill="none" stroke="currentColor" stroke-width="2" />
              <!-- Top cap -->
              <path d="M 30 25 Q 50 15 70 25 L 75 30 L 25 30 Z" />
              <!-- Main body with ribbed texture -->
              <path d="M 28 30 L 25 110 Q 50 120 75 110 L 72 30 Z" fill="currentColor" opacity="0.9" />
              <!-- Ribs -->
              <path d="M 27 50 Q 50 55 73 50" fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="1" />
              <path d="M 26 70 Q 50 75 74 70" fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="1" />
              <path d="M 25 90 Q 50 95 75 90" fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="1" />
              <!-- Bottom cap -->
              <path d="M 30 110 L 70 110 L 65 120 L 35 120 Z" />
              <!-- Tassels -->
              <path d="M 40 120 L 40 140" stroke="currentColor" stroke-width="2" />
              <path d="M 50 120 L 50 145" stroke="currentColor" stroke-width="2" />
              <path d="M 60 120 L 60 140" stroke="currentColor" stroke-width="2" />
              <!-- Glow center -->
              <ellipse cx="50" cy="70" rx="10" ry="20" fill="white" opacity="0.2" filter="blur(2px)" />
            </svg>`;
}

function getMountFuji(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 200 100" fill="currentColor">
              <!-- Main mountain shape with gentle slope -->
              <path d="M 20 100 Q 60 80 80 30 L 100 25 L 120 30 Q 140 80 180 100 Z" />
              <!-- Snow cap with jagged edge -->
              <path d="M 80 30 L 100 25 L 120 30 L 115 45 L 105 40 L 100 50 L 95 40 L 85 45 Z" fill="white" opacity="0.9" />
              <!-- Sun (optional, usually red but using currentColor/opacity) -->
              <circle cx="150" cy="30" r="15" fill="currentColor" opacity="0.2" />
            </svg>`;
}

function getCherryBlossom(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.8" />
              <g transform="translate(50, 50)">
                ${[0, 72, 144, 216, 288].map(angle => `
                  <path d="M 0 0 Q -10 -20 0 -35 Q 10 -20 0 0" transform="rotate(${angle})" fill="currentColor" opacity="0.9" />
                  <path d="M 0 -35 L 0 -25" stroke="white" stroke-width="1" opacity="0.5" transform="rotate(${angle})" />
                `).join('')}
              </g>
            </svg>`;
}

// --- Day-Specific Icons ---

function getTokyoTower(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 100 200" fill="currentColor">
    <!-- Base legs -->
    <path d="M 20 190 L 45 100 L 55 100 L 80 190" fill="none" stroke="currentColor" stroke-width="4" />
    <!-- Central structure -->
    <path d="M 45 100 L 50 10 L 55 100" fill="none" stroke="currentColor" stroke-width="3" />
    <!-- Observation decks -->
    <rect x="35" y="120" width="30" height="10" rx="2" />
    <rect x="42" y="70" width="16" height="8" rx="1" />
    <!-- Cross bracing -->
    <line x1="30" y1="160" x2="70" y2="160" stroke="currentColor" stroke-width="2" />
    <line x1="38" y1="130" x2="62" y2="130" stroke="currentColor" stroke-width="2" />
    <!-- Antenna -->
    <line x1="50" y1="10" x2="50" y2="0" stroke="currentColor" stroke-width="2" />
  </svg>`;
}

function getFerrisWheel(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5">
    <!-- Wheel rim -->
    <circle cx="50" cy="45" r="35" stroke-width="2" />
    <!-- Center hub -->
    <circle cx="50" cy="45" r="4" fill="currentColor" />
    <!-- Spokes -->
    ${[0, 45, 90, 135, 180, 225, 270, 315].map(angle =>
    `<line x1="50" y1="45" x2="50" y2="10" transform="rotate(${angle} 50 45)" />`
  ).join('')}
    <!-- Gondolas -->
    ${[0, 45, 90, 135, 180, 225, 270, 315].map(angle =>
    `<circle cx="50" cy="10" r="3" fill="currentColor" transform="rotate(${angle} 50 45)" />`
  ).join('')}
    <!-- Support legs -->
    <path d="M 50 45 L 20 95" stroke-width="2" />
    <path d="M 50 45 L 80 95" stroke-width="2" />
  </svg>`;
}

function getDeer(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 100 100" fill="currentColor">
    <!-- Body -->
    <path d="M 30 45 Q 30 30 50 30 Q 70 30 75 45 L 75 55 L 85 50 L 90 55 L 75 65 L 75 85 L 65 85 L 65 65 L 45 65 L 45 85 L 35 85 L 35 65 L 20 55 L 25 50 L 30 55 Z" />
    <!-- Spots -->
    <circle cx="45" cy="40" r="1.5" fill="white" opacity="0.8" />
    <circle cx="55" cy="38" r="1.5" fill="white" opacity="0.8" />
    <circle cx="60" cy="45" r="1.5" fill="white" opacity="0.8" />
    <!-- Antlers -->
    <path d="M 48 30 L 42 15 M 42 22 L 38 18 M 52 30 L 58 15 M 58 22 L 62 18" stroke="currentColor" stroke-width="1.5" fill="none" />
  </svg>`;
}

function getPagoda(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 100 150" fill="currentColor">
    <!-- Spire (Sorin) -->
    <rect x="48" y="5" width="4" height="20" />
    <circle cx="50" cy="5" r="2" />
    ${[10, 14, 18, 22].map(y => `<circle cx="50" cy="${y}" r="3" fill="none" stroke="currentColor" stroke-width="1" />`).join('')}
    
    <!-- Roofs (Top to Bottom) -->
    <!-- Roof 1 -->
    <path d="M 30 40 Q 50 25 70 40 L 65 45 L 35 45 Z" />
    <rect x="40" y="45" width="20" height="10" />
    
    <!-- Roof 2 -->
    <path d="M 25 65 Q 50 50 75 65 L 70 70 L 30 70 Z" />
    <rect x="38" y="70" width="24" height="12" />
    
    <!-- Roof 3 -->
    <path d="M 20 95 Q 50 80 80 95 L 75 100 L 25 100 Z" />
    <rect x="36" y="100" width="28" height="14" />
    
    <!-- Roof 4 (Base) -->
    <path d="M 15 125 Q 50 110 85 125 L 80 130 L 20 130 Z" />
    <rect x="34" y="130" width="32" height="15" />
    
    <!-- Base foundation -->
    <rect x="30" y="145" width="40" height="5" />
  </svg>`;
}

function getLuckyBag(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 100 100" fill="currentColor">
    <!-- Bag shape -->
    <path d="M 20 35 L 80 35 L 85 90 Q 85 95 80 95 L 20 95 Q 15 95 15 90 L 20 35 Z" />
    <!-- Handles -->
    <path d="M 35 35 Q 35 15 50 15 Q 65 15 65 35" fill="none" stroke="currentColor" stroke-width="3" />
    <!-- Kanji for Luck (Fuku) -->
    <text x="50" y="75" font-family="'Noto Serif JP', serif" font-size="35" text-anchor="middle" fill="white" font-weight="bold">福</text>
    <!-- Tie knot -->
    <circle cx="50" cy="35" r="4" fill="currentColor" />
  </svg>`;
}

function getRollercoaster(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 100 100" fill="currentColor">
    <!-- Track loop -->
    <path d="M 10 90 C 40 90 40 10 70 10 C 100 10 100 90 100 90" fill="none" stroke="currentColor" stroke-width="4" />
    <path d="M 10 86 C 40 86 40 6 70 6 C 100 6 100 86 100 86" fill="none" stroke="currentColor" stroke-width="1" opacity="0.5" />
    <!-- Supports -->
    <line x1="40" y1="50" x2="40" y2="100" stroke="currentColor" stroke-width="2" />
    <line x1="70" y1="10" x2="70" y2="100" stroke="currentColor" stroke-width="2" />
    <line x1="100" y1="50" x2="100" y2="100" stroke="currentColor" stroke-width="2" />
    <!-- Cart -->
    <rect x="60" y="8" width="20" height="10" rx="2" transform="rotate(10 70 10)" fill="currentColor" />
  </svg>`;
}

function getShinkansen(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 200 60" fill="currentColor">
    <!-- Aerodynamic Nose -->
    <path d="M 10 45 Q 10 15 60 15 L 190 15 L 190 50 L 20 50 Q 10 50 10 45 Z" />
    <!-- Cockpit window -->
    <path d="M 40 25 L 55 25 L 55 30 L 35 30 Z" fill="white" opacity="0.8" />
    <!-- Passenger windows -->
    <rect x="70" y="25" width="20" height="10" rx="1" fill="white" opacity="0.8" />
    <rect x="100" y="25" width="20" height="10" rx="1" fill="white" opacity="0.8" />
    <rect x="130" y="25" width="20" height="10" rx="1" fill="white" opacity="0.8" />
    <rect x="160" y="25" width="20" height="10" rx="1" fill="white" opacity="0.8" />
    <!-- Stripe -->
    <rect x="20" y="40" width="170" height="4" fill="white" opacity="0.6" />
  </svg>`;
}

function getIslandTorii(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 120 100" fill="currentColor">
    <!-- Rocky Island Base -->
    <path d="M 10 90 Q 30 85 50 88 Q 70 92 90 85 L 110 90 L 115 95 L 5 95 Z" fill="currentColor" opacity="0.8" />
    <!-- Waves -->
    <path d="M 0 95 Q 15 90 30 95 T 60 95 T 90 95 T 120 95" fill="none" stroke="white" stroke-width="1" opacity="0.5" />
    
    <!-- Torii Gate (Enoshima Style) -->
    <!-- Top beam (Kasagi) -->
    <path d="M 35 30 Q 60 25 85 30 L 85 35 Q 60 30 35 35 Z" />
    <!-- Second beam (Shimaki) -->
    <rect x="40" y="38" width="40" height="3" rx="0.5" />
    <!-- Vertical plaque -->
    <rect x="58" y="32" width="4" height="8" />
    <!-- Connecting beam (Nuki) -->
    <rect x="42" y="50" width="36" height="3" rx="0.5" />
    <!-- Pillars -->
    <path d="M 45 32 L 43 88 L 48 88 L 47 32 Z" />
    <path d="M 75 32 L 73 88 L 78 88 L 77 32 Z" />
    <!-- Base stones -->
    <rect x="41" y="88" width="8" height="2" />
    <rect x="71" y="88" width="8" height="2" />
    
    <!-- Setting Sun/Moon (Optional background) -->
    <circle cx="90" cy="20" r="10" fill="currentColor" opacity="0.2" />
  </svg>`;
}

function getBuddha(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 100 120" fill="currentColor">
    <!-- Head -->
    <circle cx="50" cy="30" r="15" />
    <!-- Hair bun (Ushnisha) -->
    <circle cx="50" cy="15" r="6" />
    <!-- Body (Robes) -->
    <path d="M 25 110 L 25 60 Q 25 45 50 45 Q 75 45 75 60 L 75 110 Z" />
    <!-- Hands (Dhyana Mudra) -->
    <path d="M 40 90 Q 50 100 60 90" fill="none" stroke="white" stroke-width="2" opacity="0.5" />
    <!-- Base -->
    <path d="M 15 110 L 85 110 L 80 120 L 20 120 Z" />
  </svg>`;
}

function getSnowman(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 100 100" fill="currentColor">
    <!-- Bottom snowball -->
    <circle cx="50" cy="75" r="20" />
    <!-- Middle snowball -->
    <circle cx="50" cy="48" r="15" />
    <!-- Head -->
    <circle cx="50" cy="25" r="12" />
    <!-- Eyes -->
    <circle cx="46" cy="22" r="1.5" fill="white" />
    <circle cx="54" cy="22" r="1.5" fill="white" />
    <!-- Nose -->
    <path d="M 50 26 L 58 28 L 50 30 Z" fill="orange" />
    <!-- Buttons -->
    <circle cx="50" cy="42" r="1.5" fill="white" opacity="0.7" />
    <circle cx="50" cy="48" r="1.5" fill="white" opacity="0.7" />
    <circle cx="50" cy="54" r="1.5" fill="white" opacity="0.7" />
    <!-- Scarf -->
    <path d="M 40 35 Q 50 40 60 35 L 60 38 Q 50 43 40 38 Z" fill="white" opacity="0.8" />
    <path d="M 58 36 L 65 50 L 55 50 Z" fill="white" opacity="0.8" />
  </svg>`;
}

function getCat(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 100 100" fill="currentColor">
    <!-- Head shape with ears -->
    <path d="M 25 40 L 25 20 L 40 30 L 60 30 L 75 20 L 75 40 Q 85 50 85 70 Q 85 95 50 95 Q 15 95 15 70 Q 15 50 25 40 Z" />
    <!-- Eyes -->
    <ellipse cx="35" cy="55" rx="6" ry="8" fill="white" />
    <ellipse cx="65" cy="55" rx="6" ry="8" fill="white" />
    <circle cx="35" cy="55" r="2" fill="currentColor" />
    <circle cx="65" cy="55" r="2" fill="currentColor" />
    <!-- Nose and Mouth -->
    <path d="M 48 65 L 52 65 L 50 68 Z" fill="white" />
    <path d="M 50 68 Q 45 75 40 70 M 50 68 Q 55 75 60 70" stroke="white" stroke-width="1.5" fill="none" />
    <!-- Whiskers -->
    <line x1="20" y1="60" x2="5" y2="55" stroke="currentColor" stroke-width="1" />
    <line x1="20" y1="65" x2="5" y2="65" stroke="currentColor" stroke-width="1" />
    <line x1="80" y1="60" x2="95" y2="55" stroke="currentColor" stroke-width="1" />
    <line x1="80" y1="65" x2="95" y2="65" stroke="currentColor" stroke-width="1" />
  </svg>`;
}

function getSkytree(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 100 280" fill="currentColor">
    <!-- Tripod Base -->
    <path d="M 30 280 L 70 280 L 65 200 L 35 200 Z" />
    <!-- Lattice structure (implied by cross lines) -->
    <path d="M 30 280 L 50 200 L 70 280" fill="none" stroke="white" stroke-width="0.5" opacity="0.3" />
    <!-- Mid-section -->
    <path d="M 35 200 L 65 200 L 60 100 L 40 100 Z" />
    <!-- First Observatory -->
    <rect x="32" y="140" width="36" height="15" rx="2" />
    <rect x="33" y="142" width="34" height="11" rx="1" fill="white" opacity="0.2" />
    <!-- Top Section -->
    <path d="M 40 100 L 60 100 L 56 40 L 44 40 Z" />
    <!-- Second Observatory -->
    <rect x="40" y="70" width="20" height="10" rx="2" />
    <rect x="41" y="72" width="18" height="6" rx="1" fill="white" opacity="0.2" />
    <!-- Spire -->
    <path d="M 44 40 L 56 40 L 52 5 L 48 5 Z" />
    <line x1="50" y1="5" x2="50" y2="0" stroke="currentColor" stroke-width="2" />
  </svg>`;
}

function getPlane(classes = "") {
  return `<svg class="${classes}" viewBox="0 0 140 100" fill="currentColor">
    <!-- Fuselage -->
    <path d="M 20 55 Q 10 55 10 50 Q 10 45 20 45 L 110 45 Q 130 45 135 50 Q 130 55 110 55 Z" />
    <!-- Tail -->
    <path d="M 110 45 L 125 25 L 135 25 L 120 45 Z" />
    <!-- Wings -->
    <path d="M 60 50 L 30 80 L 40 80 L 75 50 Z" />
    <path d="M 60 50 L 80 20 L 90 20 L 75 50 Z" opacity="0.7" />
    <!-- Engine -->
    <ellipse cx="50" cy="60" rx="8" ry="4" opacity="0.8" />
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