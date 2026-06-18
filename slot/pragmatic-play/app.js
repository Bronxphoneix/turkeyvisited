const games = [
  {
    id: 'gates-of-olympus',
    name: 'Gates of Olympus',
    code: 'vs20olympgate',
    rtp: 96.50,
    players: 2841,
    tags: ['popular', 'buy-bonus'],
    badges: ['popular', 'bonus'],
    gradient: 'linear-gradient(135deg, #1a0533 0%, #4a0e8f 50%, #7c3aed 100%)',
    maxWin: '5000x',
  },
  {
    id: 'sweet-bonanza',
    name: 'Sweet Bonanza',
    code: 'vs20bonzanz',
    rtp: 96.48,
    players: 3210,
    tags: ['popular', 'buy-bonus'],
    badges: ['popular', 'bonus'],
    gradient: 'linear-gradient(135deg, #ff0080 0%, #ff6ec7 50%, #ffb3e6 100%)',
    maxWin: '21.100x',
  },
  {
    id: 'starlight-princess',
    name: 'Starlight Princess',
    code: 'vs20starlight',
    rtp: 96.50,
    players: 1987,
    tags: ['popular', 'buy-bonus'],
    badges: ['popular'],
    gradient: 'linear-gradient(135deg, #0f0524 0%, #6d28d9 50%, #c4b5fd 100%)',
    maxWin: '5000x',
  },
  {
    id: 'the-dog-house',
    name: 'The Dog House',
    code: 'vs20doghouse',
    rtp: 96.51,
    players: 1654,
    tags: ['popular'],
    badges: ['popular'],
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 50%, #60a5fa 100%)',
    maxWin: '6750x',
  },
  {
    id: 'big-bass-bonanza',
    name: 'Big Bass Bonanza',
    code: 'vs10bbbonanza',
    rtp: 96.71,
    players: 1423,
    tags: ['popular', 'buy-bonus'],
    badges: ['bonus'],
    gradient: 'linear-gradient(135deg, #064e3b 0%, #059669 50%, #34d399 100%)',
    maxWin: '2100x',
  },
  {
    id: 'fruit-party',
    name: 'Fruit Party',
    code: 'vs20fruitparty',
    rtp: 96.47,
    players: 892,
    tags: ['popular'],
    badges: [],
    gradient: 'linear-gradient(135deg, #7c2d12 0%, #ea580c 50%, #fb923c 100%)',
    maxWin: '5000x',
  },
  {
    id: 'wild-west-gold',
    name: 'Wild West Gold',
    code: 'vs40wildwest',
    rtp: 96.51,
    players: 1102,
    tags: ['popular'],
    badges: ['popular'],
    gradient: 'linear-gradient(135deg, #451a03 0%, #92400e 50%, #d97706 100%)',
    maxWin: '5000x',
  },
  {
    id: 'great-rhino-megaways',
    name: 'Great Rhino Megaways',
    code: 'vswaysrhino',
    rtp: 96.58,
    players: 743,
    tags: ['megaways'],
    badges: ['megaways'],
    gradient: 'linear-gradient(135deg, #14532d 0%, #166534 50%, #4ade80 100%)',
    maxWin: '20000x',
  },
  {
    id: 'wolf-gold',
    name: 'Wolf Gold',
    code: 'vs25wolfgold',
    rtp: 96.01,
    players: 561,
    tags: ['popular', 'jackpot'],
    badges: ['jackpot'],
    gradient: 'linear-gradient(135deg, #0c0a1a 0%, #1e1b4b 50%, #4338ca 100%)',
    maxWin: '2500x',
  },
  {
    id: 'mustang-gold',
    name: 'Mustang Gold',
    code: 'vs25mustang',
    rtp: 96.53,
    players: 487,
    tags: ['popular', 'jackpot'],
    badges: ['jackpot'],
    gradient: 'linear-gradient(135deg, #78350f 0%, #b45309 50%, #fbbf24 100%)',
    maxWin: '12500x',
  },
  {
    id: 'buffalo-king-megaways',
    name: 'Buffalo King Megaways',
    code: 'vswaysbufking',
    rtp: 96.52,
    players: 634,
    tags: ['megaways', 'buy-bonus'],
    badges: ['megaways', 'bonus'],
    gradient: 'linear-gradient(135deg, #1c1917 0%, #57534e 50%, #a8a29e 100%)',
    maxWin: '6250x',
  },
  {
    id: 'chilli-heat',
    name: 'Chilli Heat',
    code: 'vs25chilli',
    rtp: 96.47,
    players: 321,
    tags: [],
    badges: [],
    gradient: 'linear-gradient(135deg, #450a0a 0%, #b91c1c 50%, #f87171 100%)',
    maxWin: '3000x',
  },
  {
    id: 'jokers-jewels',
    name: "Joker's Jewels",
    code: 'vs5joker',
    rtp: 96.50,
    players: 412,
    tags: [],
    badges: [],
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #7c3aed 50%, #a78bfa 100%)',
    maxWin: '1000x',
  },
  {
    id: 'pyramid-bonanza',
    name: 'Pyramid Bonanza',
    code: 'vs20pyramid',
    rtp: 96.50,
    players: 298,
    tags: ['buy-bonus'],
    badges: ['bonus'],
    gradient: 'linear-gradient(135deg, #422006 0%, #854d0e 50%, #eab308 100%)',
    maxWin: '5000x',
  },
  {
    id: 'cash-bonanza',
    name: 'Cash Bonanza',
    code: 'vs20cashbonanza',
    rtp: 96.50,
    players: 276,
    tags: ['buy-bonus'],
    badges: ['new', 'bonus'],
    gradient: 'linear-gradient(135deg, #042f2e 0%, #0f766e 50%, #2dd4bf 100%)',
    maxWin: '5000x',
  },
  {
    id: 'big-bass-splash',
    name: 'Big Bass Splash',
    code: 'vs10bbsplash',
    rtp: 96.71,
    players: 489,
    tags: ['new', 'buy-bonus'],
    badges: ['new', 'bonus'],
    gradient: 'linear-gradient(135deg, #0c4a6e 0%, #0284c7 50%, #38bdf8 100%)',
    maxWin: '2000x',
  },
  {
    id: 'hot-to-burn-extreme',
    name: 'Hot to Burn Extreme',
    code: 'vs20hotburnx',
    rtp: 96.72,
    players: 354,
    tags: ['new'],
    badges: ['new'],
    gradient: 'linear-gradient(135deg, #450a0a 0%, #dc2626 50%, #f97316 100%)',
    maxWin: '5000x',
  },
  {
    id: 'emerald-king-rainbow',
    name: 'Emerald King Rainbow',
    code: 'vs20emkingdom',
    rtp: 96.42,
    players: 231,
    tags: ['jackpot'],
    badges: ['jackpot'],
    gradient: 'linear-gradient(135deg, #052e16 0%, #15803d 50%, #86efac 100%)',
    maxWin: '10000x',
  },
  {
    id: 'aztec-gems-deluxe',
    name: 'Aztec Gems Deluxe',
    code: 'vs5aztec',
    rtp: 96.52,
    players: 187,
    tags: [],
    badges: [],
    gradient: 'linear-gradient(135deg, #1a2e05 0%, #3f6212 50%, #a3e635 100%)',
    maxWin: '500x',
  },
  {
    id: 'pirate-gold-deluxe',
    name: 'Pirate Gold Deluxe',
    code: 'vs40pirate',
    rtp: 96.52,
    players: 203,
    tags: [],
    badges: [],
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e40af 50%, #3b82f6 100%)',
    maxWin: '2048x',
  },
  {
    id: 'fire-strike-2',
    name: 'Fire Strike 2',
    code: 'vs10firestrike2',
    rtp: 96.45,
    players: 318,
    tags: [],
    badges: [],
    gradient: 'linear-gradient(135deg, #3b0a0a 0%, #c0392b 50%, #e74c3c 100%)',
    maxWin: '3000x',
  },
  {
    id: 'lucky-lightning',
    name: 'Lucky Lightning',
    code: 'vs20luckylightning',
    rtp: 96.50,
    players: 264,
    tags: ['new'],
    badges: ['new'],
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #4c1d95 50%, #f59e0b 100%)',
    maxWin: '5000x',
  },
  {
    id: 'bronze-age-dragons',
    name: 'Bronze Age Dragons',
    code: 'vs20bronzeagedragons',
    rtp: 96.45,
    players: 156,
    tags: ['new'],
    badges: ['new'],
    gradient: 'linear-gradient(135deg, #431407 0%, #9a3412 50%, #f97316 100%)',
    maxWin: '5000x',
  },
  {
    id: 'sky-queen',
    name: 'Sky Queen',
    code: 'vs20skyqueen',
    rtp: 96.49,
    players: 189,
    tags: ['new', 'buy-bonus'],
    badges: ['new', 'bonus'],
    gradient: 'linear-gradient(135deg, #0c0a20 0%, #1d1160 50%, #818cf8 100%)',
    maxWin: '5000x',
  },
  {
    id: 'hammer-of-vulcan',
    name: 'Hammer of Vulcan',
    code: 'vs10hammer',
    rtp: 96.43,
    players: 142,
    tags: [],
    badges: [],
    gradient: 'linear-gradient(135deg, #1c1917 0%, #44403c 50%, #d97706 100%)',
    maxWin: '2000x',
  },
  {
    id: 'wood-stampede',
    name: 'Wood Stampede Megaways',
    code: 'vswayswoodstampede',
    rtp: 96.44,
    players: 121,
    tags: ['megaways'],
    badges: ['megaways'],
    gradient: 'linear-gradient(135deg, #1a2e05 0%, #365314 50%, #84cc16 100%)',
    maxWin: '10000x',
  },
  {
    id: 'gates-of-olympus-1000',
    name: 'Gates of Olympus 1000',
    code: 'vs20olympgate1000',
    rtp: 96.50,
    players: 1243,
    tags: ['new', 'popular', 'buy-bonus'],
    badges: ['new', 'popular', 'bonus'],
    gradient: 'linear-gradient(135deg, #2e1065 0%, #6d28d9 50%, #ddd6fe 100%)',
    maxWin: '1000x',
  },
  {
    id: 'sweet-bonanza-xmas',
    name: 'Sweet Bonanza Xmas',
    code: 'vs20xmas',
    rtp: 96.47,
    players: 432,
    tags: ['popular'],
    badges: ['popular'],
    gradient: 'linear-gradient(135deg, #0f172a 0%, #991b1b 50%, #fecdd3 100%)',
    maxWin: '21.100x',
  },
  {
    id: 'starlight-christmas',
    name: 'Starlight Christmas',
    code: 'vs20starlightx',
    rtp: 96.50,
    players: 287,
    tags: [],
    badges: [],
    gradient: 'linear-gradient(135deg, #0c0a1a 0%, #1e3a8a 50%, #93c5fd 100%)',
    maxWin: '5000x',
  },
  {
    id: 'the-dog-house-megaways',
    name: 'The Dog House Megaways',
    code: 'vswaysdogs',
    rtp: 96.55,
    players: 873,
    tags: ['popular', 'megaways'],
    badges: ['popular', 'megaways'],
    gradient: 'linear-gradient(135deg, #172554 0%, #1d4ed8 50%, #93c5fd 100%)',
    maxWin: '11000x',
  },
];

const BADGE_LABEL = {
  new: 'YENİ',
  popular: 'POPÜLER',
  bonus: 'BONUS',
  jackpot: 'JACKPOT',
  megaways: 'MEGAWAYS',
};

function formatPlayers(n) {
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
  return n.toString();
}

function buildCard(game) {
  const imgUrl = `https://static.pragmaticplay.net/gamePreviews/${game.code}/en.jpg`;
  const visibleBadges = game.badges.slice(0, 2);

  const badgesHTML = visibleBadges
    .map(b => `<span class="badge badge-${b}">${BADGE_LABEL[b]}</span>`)
    .join('');

  return `
    <div class="game-card" data-tags="${game.tags.join(',')}" data-name="${game.name.toLowerCase()}">
      <div class="game-thumb">
        <img
          src="${imgUrl}"
          alt="${game.name}"
          loading="lazy"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        >
        <div class="game-thumb-placeholder" style="background:${game.gradient}">
          ${game.name}
        </div>
        <div class="game-overlay">
          <button class="btn-play" onclick="launchGame('${game.id}', false)">Oyna</button>
          <button class="btn-demo" onclick="launchGame('${game.id}', true)">Demo</button>
        </div>
        ${badgesHTML ? `<div class="game-badges">${badgesHTML}</div>` : ''}
      </div>
      <div class="game-info">
        <div class="game-name" title="${game.name}">${game.name}</div>
        <div class="game-meta">
          <span class="game-rtp">RTP <span>${game.rtp}%</span></span>
          <span class="game-players">
            <span class="dot-live"></span>
            ${formatPlayers(game.players)}
          </span>
        </div>
      </div>
    </div>
  `;
}

function launchGame(id, demo) {
  alert(demo ? `Demo: ${id}` : `Oynamak için giriş yapınız.`);
}

let currentFilter = 'all';
let currentSearch = '';

function renderGames() {
  const grid = document.getElementById('gamesGrid');
  const noResults = document.getElementById('noResults');
  const countEl = document.getElementById('gamesCount');

  let filtered = games.filter(g => {
    const matchFilter = currentFilter === 'all' || g.tags.includes(currentFilter);
    const matchSearch = g.name.toLowerCase().includes(currentSearch);
    return matchFilter && matchSearch;
  });

  const sortVal = document.getElementById('sortSelect').value;
  if (sortVal === 'newest') {
    filtered = filtered.filter(g => g.tags.includes('new')).concat(
      filtered.filter(g => !g.tags.includes('new'))
    );
  } else if (sortVal === 'az') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    filtered.sort((a, b) => b.players - a.players);
  }

  countEl.textContent = filtered.length;
  grid.innerHTML = filtered.map(buildCard).join('');

  if (filtered.length === 0) {
    noResults.style.display = 'block';
  } else {
    noResults.style.display = 'none';
  }
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderGames();
  });
});

document.getElementById('searchInput').addEventListener('input', e => {
  currentSearch = e.target.value.toLowerCase().trim();
  renderGames();
});

document.getElementById('sortSelect').addEventListener('change', renderGames);

renderGames();
