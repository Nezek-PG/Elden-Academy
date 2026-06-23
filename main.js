const ER = (function () {
  const MAP_IMG = window.ER_IMG ? ER_IMG.MAP_PHOTO : 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/library_hero.jpg';
  const MAP_LINK = window.ER_IMG ? ER_IMG.MAP_LINK : 'https://mapgenie.io/elden-ring/maps/the-lands-between';
  const FALLBACK_IMG = window.ER_IMG ? ER_IMG.STEAM_HERO : 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/library_hero.jpg';

  function bossImage(b) {
    return b.image || FALLBACK_IMG;
  }

  function buildImage(b) {
    if (window.ER_IMG) return ER_IMG.buildPhoto(b.id);
    return FALLBACK_IMG;
  }

  function photoBlock(src, alt) {
    const url = src || FALLBACK_IMG;
    return `<div class="photo-wrap">
      <img src="${url}" alt="${alt}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
    </div>`;
  }

  function wikiItemLink(item) {
    const url = window.ER_IMG ? ER_IMG.wikiPage(item.w) : '#';
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="wiki-item-link"><span>${item.n}</span><span class="wiki-item-arrow">↗</span></a>`;
  }

  function renderGearRow(labelKey, items) {
    if (!items || !items.length) return '';
    const links = items.map(wikiItemLink).join('');
    return `<div class="build-row build-row-gear"><span class="label">${t(labelKey)}</span><span class="value value-gear">${links}</span></div>`;
  }

  function renderGearSection(buildId) {
    const gear = window.ER_GEAR && ER_GEAR[buildId];
    if (!gear) return '';
    return [
      renderGearRow('weapon', gear.weapon),
      renderGearRow('ash', gear.ash),
      renderGearRow('offhand', gear.offhand),
      renderGearRow('helmet', gear.helmet),
      renderGearRow('armor', gear.armor),
      renderGearRow('gloves', gear.gloves),
      renderGearRow('legs', gear.legs),
      renderGearRow('talismans', gear.talismans)
    ].join('');
  }

  // Render buff sequence steps for one-shot style builds
  function renderBuffSequence(buildData) {
    const seq = buildData.buffSequence;
    if (!seq || !seq.length) return '';
    return `<div class="build-row build-row-gear" style="flex-direction:column;gap:10px;align-items:flex-start">
      <span class="label" style="min-width:unset;margin-bottom:6px">${t('buffSequence')}</span>
      <ol class="buff-sequence-list">
        ${seq.map((s, i) => `<li><span class="buff-step-num">${i + 1}</span><span>${s}</span></li>`).join('')}
      </ol>
    </div>`;
  }

  const i18n = {
    en: {
      siteName: 'Elden Academy', navHome: 'Home', navBosses: 'Bosses', navBuilds: 'Builds', navArchive: 'Archive', navEndings: 'Endings',
      heroLabel: 'Recommended Boss Order', heroTitle1: 'New Boss', heroTitle2: 'Discovered',
      heroSub: 'Explore the Lands Between. Study the demigods. Survive the Night of the Black Knives.',
       catLabel: 'Archive',
      bossSectionTitle: 'Shardbearers & Legends', aboutLabel: 'About', aboutTitle: 'The Lands Between',
      aboutUnlock: 'Archive Entry', aboutEntryTitle: 'The Erdtree',
      aboutQuote: '"The Erdtree governs all. The demigods, each a shard of the Elden Ring, vie for power."',
      aboutText: 'This archive catalogs the greatest threats of the Lands Between — their lore, locations, and strategies for the Tarnished who would become Elden Lord.',
      viewBuilds: 'View Best Builds', footer: 'Elden Ring',
      backBosses: 'Back to Bosses', readMore: 'Read Entry', nextLoot: 'Next Boss',
      lore: 'Lore', location: 'Location', strategy: 'Easiest Strategy', mapTitle: 'Map & Region',
      buildsLabel: 'Armory', buildsTitle1: 'Best', buildsTitle2: 'Builds',
      buildsSub: 'Curated loadouts for every playstyle weapons, talismans, armor, and ashes of war.',
      filterAll: 'All', filterStr: 'Strength', filterDex: 'Dexterity', filterFaith: 'Faith',
      filterInt: 'Intelligence', filterArc: 'Arcane',
      weapon: 'Weapon', talismans: 'Talismans', helmet: 'Helmet', armor: 'Armor', gloves: 'Gloves',
      legs: 'Legs', ash: 'Ash of War', stats: 'Key Stats', playstyle: 'Playstyle', offhand: 'Offhand',
      catShard: 'Shardbearers', catLegend: 'Legends', catField: 'Field Bosses', catFinal: 'Final Bosses',
      featuredUnlock: 'Featured', region: 'Region', wikiLink: 'View on Elden Ring Wiki',
      openPhoto: 'Open Photo', openMap: 'Interactive Map',
      endingsLabel: 'Lore', endingsTitle1: 'All', endingsTitle2: 'Endings',
      endingsSub: 'Every conclusion to the Tarnished\'s journey — and the steps to reach them.',
      endingSteps: 'How to Reach This Ending', backEndings: 'Back to Endings',
      endingDifficulty: 'Difficulty', endingType: 'Ending Type', buffSequence: 'Buff Sequence'
    },
    pl: {
      siteName: 'Elden Academy', navHome: 'Start', navBosses: 'Bossowie', navBuilds: 'Buildy', navArchive: 'Archiwum', navEndings: 'Zakończenia',
      heroLabel: 'Rekomendowana kolejność bossów', heroTitle1: 'Nowy Boss', heroTitle2: 'Odkryty',
      heroSub: 'Odkryj Krainy Pomiędzy. Poznaj półbogów. Przetrwaj Noc Czarnych Noży.',
       catLabel: 'Archiwum',
      bossSectionTitle: 'Nosiciele Odłamków i Legendy', aboutLabel: 'O grze', aboutTitle: 'Krainy Pomiędzy',
      aboutUnlock: 'Wpis Archiwum', aboutEntryTitle: 'Drzewo Erd',
      aboutQuote: '"Drzewo Erd rządzi wszystkim. Półbogowie, każdy odłamkiem Pierścienia Elden, walczą o władzę."',
      aboutText: 'To archiwum kataloguje największe zagrożenia Krain Pomiędzy — ich historię, lokalizacje i strategie dla Zhańbionych, którzy chcą zostać Panem Elden.',
      viewBuilds: 'Zobacz Najlepsze Buildy', footer: 'Elden Ring',
      backBosses: 'Powrót do Bossów', readMore: 'Czytaj Wpis', nextLoot: 'Następny Boss',
      lore: 'Historia', location: 'Lokalizacja', strategy: 'Najłatwiejsza Strategia', mapTitle: 'Mapa i Region',
      buildsLabel: 'Zbrojownia', buildsTitle1: 'Najlepsze', buildsTitle2: 'Buildy',
      buildsSub: 'Wybrane zestawy dla każdego stylu bronie, talizmany, zbroja i popioły wojny.',
      filterAll: 'Wszystkie', filterStr: 'Siła', filterDex: 'Zręczność', filterFaith: 'Wiara',
      filterInt: 'Inteligencja', filterArc: 'Arkana',
      weapon: 'Broń', talismans: 'Talizmany', helmet: 'Hełm', armor: 'Zbroja', gloves: 'Rękawice',
      legs: 'Nogi', ash: 'Popiół Wojny', stats: 'Kluczowe Staty', playstyle: 'Styl Gry', offhand: 'Lewa Ręka',
      catShard: 'Nosiciele Odłamków', catLegend: 'Legendy', catField: 'Bossowie Polowi', catFinal: 'Bossowie Końcowi',
      featuredUnlock: 'Polecany', region: 'Region', wikiLink: 'Zobacz w Elden Ring Wiki',
      openPhoto: 'Otwórz Zdjęcie', openMap: 'Mapa Interaktywna',
      endingsLabel: 'Lore', endingsTitle1: 'Wszystkie', endingsTitle2: 'Zakończenia',
      endingsSub: 'Każde zakończenie podróży Zhańbionego — i kroki potrzebne by je osiągnąć.',
      endingSteps: 'Jak Osiągnąć To Zakończenie', backEndings: 'Powrót do Zakończeń',
      endingDifficulty: 'Trudność', endingType: 'Typ Zakończenia', buffSequence: 'Sekwencja Buffów'
    },
    de: {
      siteName: 'Elden Academy', navHome: 'Start', navBosses: 'Bosse', navBuilds: 'Builds', navArchive: 'Archiv', navEndings: 'Enden',
      heroLabel: 'Empfohlene Boss-Reihenfolge', heroTitle1: 'Neuer Boss', heroTitle2: 'Entdeckt',
      heroSub: 'Erkunde die Zwischenlande. Studiere die Halbgötter. Überlebe die Nacht der Schwarzen Messer.',
       catLabel: 'Archiv',
      bossSectionTitle: 'Scherbenhüter & Legenden', aboutLabel: 'Über', aboutTitle: 'Die Zwischenlande',
      aboutUnlock: 'Archiveintrag', aboutEntryTitle: 'Der Erdbaum',
      aboutQuote: '"Der Erdbaum regiert alles. Die Halbgötter, jeder ein Splitter des Eldenrings, ringen um Macht."',
      aboutText: 'Dieses Archiv katalogisiert die größten Bedrohungen der Zwischenlande — ihre Lore, Standorte und Strategien für die Befleckten, die Eldenherr werden wollen.',
      viewBuilds: 'Beste Builds Ansehen', footer: 'Elden Ring',
      backBosses: 'Zurück zu Bossen', readMore: 'Eintrag Lesen', nextLoot: 'Nächster Boss',
      lore: 'Lore', location: 'Standort', strategy: 'Einfachste Strategie', mapTitle: 'Karte & Region',
      buildsLabel: 'Waffenkammer', buildsTitle1: 'Beste', buildsTitle2: 'Builds',
      buildsSub: 'Kuratierte Loadouts für jeden Spielstil Waffen, Talismane, Rüstung und Kriegsaschen.',
      filterAll: 'Alle', filterStr: 'Stärke', filterDex: 'Geschick', filterFaith: 'Glaube',
      filterInt: 'Intelligenz', filterArc: 'Arkan',
      weapon: 'Waffe', talismans: 'Talismane', helmet: 'Helm', armor: 'Rüstung', gloves: 'Handschuhe',
      legs: 'Beine', ash: 'Kriegsasche', stats: 'Wichtige Werte', playstyle: 'Spielstil', offhand: 'Nebenhand',
      catShard: 'Scherbenhüter', catLegend: 'Legenden', catField: 'Feldbosse', catFinal: 'Endbosse',
      featuredUnlock: 'Empfohlen', region: 'Region', wikiLink: 'Im Elden Ring Wiki ansehen',
      openPhoto: 'Foto Öffnen', openMap: 'Interaktive Karte',
      endingsLabel: 'Lore', endingsTitle1: 'Alle', endingsTitle2: 'Enden',
      endingsSub: 'Jedes Ende der Reise des Befleckten — und die Schritte dorthin.',
      endingSteps: 'So erreichst du dieses Ende', backEndings: 'Zurück zu den Enden',
      endingDifficulty: 'Schwierigkeit', endingType: 'Endtyp', buffSequence: 'Buff-Reihenfolge'
    }
  };

  let lang = localStorage.getItem('er-lang') || 'en';
  let activeCategory = 'all';

  function t(key) { return (i18n[lang] && i18n[lang][key]) || i18n.en[key] || key; }

  function getBosses() { return window.ER_BOSSES || []; }
  function getBuilds() { return window.ER_BUILDS || []; }

  function applyI18n() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (i18n[lang][k]) el.textContent = i18n[lang][k];
    });
    document.documentElement.lang = lang;
  }

  function setupLang() {
    
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
      btn.onclick = () => {
        lang = btn.dataset.lang;
        localStorage.setItem('er-lang', lang);
        applyI18n();
        document.querySelectorAll('.lang-switch button').forEach(b =>
          b.classList.toggle('active', b.dataset.lang === lang));
        if (document.getElementById('bossGrid')) renderBossGrid();
        if (document.getElementById('categoryRow')) renderCategories();
        if (document.getElementById('featuredCard')) renderFeatured();
        if (document.getElementById('bossContent')) renderBossDetailPage();
        if (document.getElementById('buildsGrid')) renderBuildsGrid(activeBuildFilter);
        if (document.getElementById('endingsGrid')) renderEndingsGrid();
      };
    });
  }

  function setupMenu() {
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');
    if (toggle && nav) toggle.onclick = () => nav.classList.toggle('open');
  }

  function setupScrollAnim() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-in,.fade-in-left,.fade-in-right,.scale-in').forEach(el => obs.observe(el));
  }

  function hideLoader() {
    const l = document.getElementById('loader');
    if (l) { setTimeout(() => l.classList.add('hidden-load'), 400); }
  }

  const catKeys = { all: 'filterAll', shard: 'catShard', legend: 'catLegend', field: 'catField', final: 'catFinal' };
  const catLabelKeys = { shard: 'catShard', legend: 'catLegend', field: 'catField', final: 'catFinal' };
  const catImages = window.ER_IMG ? {
    all: ER_IMG.categoryPhoto('all'),
    shard: ER_IMG.categoryPhoto('shard'),
    legend: ER_IMG.categoryPhoto('legend'),
    field: ER_IMG.categoryPhoto('field'),
    final: ER_IMG.categoryPhoto('final')
  } : {};

  function renderCategories() {
    const row = document.getElementById('categoryRow');
    if (!row) return;
    row.innerHTML = Object.keys(catKeys).map((cat, i) =>
      `<div class="category-card fade-in stagger-${i + 1}${activeCategory === cat ? ' active' : ''}" data-cat="${cat}">
        <img src="${catImages[cat]}" alt="" loading="lazy" onerror="this.style.opacity='0.3'">
        <span>${t(catKeys[cat])}</span>
      </div>`
    ).join('');
    row.querySelectorAll('.category-card').forEach(card => {
      card.onclick = () => {
        activeCategory = card.dataset.cat;
        renderCategories();
        renderBossGrid();
      };
    });
    setupScrollAnim();
  }

  function filteredBosses() {
    const bosses = getBosses();
    if (activeCategory === 'all') return bosses;
    return bosses.filter(b => b.category === activeCategory);
  }

  function renderBossGrid() {
    const grid = document.getElementById('bossGrid');
    if (!grid) return;
    const bosses = filteredBosses();
    grid.innerHTML = bosses.map((b, i) => {
      const d = b[lang] || b.en;
      const imgUrl = bossImage(b);
      return `<a href="main2.html?id=${b.id}" class="boss-card fade-in stagger-${(i % 6) + 1}">
        <div class="boss-card-img">
          <img src="${imgUrl}" alt="${d.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
        </div>
        <div class="boss-card-body">
          <p class="cat">${t(catLabelKeys[b.category] || 'catShard')}</p>
          <h3>${d.name}</h3>
        </div>
      </a>`;
    }).join('');
    setupScrollAnim();
  }

  function renderFeatured() {
    const el = document.getElementById('featuredCard');
    if (!el) return;
    const b = getBosses().find(x => x.id === 'malenia') || getBosses()[0];
    const d = b[lang] || b.en;
    const parts = d.name.split(',');
    const imgUrl = bossImage(b);
    el.innerHTML = `<div class="featured-card-inner">
      <div class="featured-content fade-in-left">
        <p class="unlock-label">${t('featuredUnlock')}: ${t('catShard')}</p>
        <h2><span class="gold-text">${parts[0]}</span>${parts[1] ? ',' + parts[1] : ''}</h2>
        <p class="quote">${d.quote}</p>
        <p>${d.lore.substring(0, 220)}...</p>
        <a href="main2.html?id=${b.id}" class="btn-link"><span>${t('readMore')}</span> <span class="arrow">→</span></a>
      </div>
      <div class="featured-image fade-in-right">${photoBlock(imgUrl, d.name)}</div>
    </div>`;
    setupScrollAnim();
  }

function renderBossDetailPage() {
    const wrap = document.getElementById('bossContent');
    if (!wrap) return;
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const b = getBosses().find(x => x.id === id);
    if (!b) {
      wrap.innerHTML = `<p style="color:var(--gray)">Boss not found.</p>`;
      return;
    }
    const d = b[lang] || b.en;
    const parts = d.name.split(',');
    const bosses = getBosses();
    const idx = bosses.findIndex(x => x.id === id);
    const next = bosses[(idx + 1) % bosses.length];
    const nd = next[lang] || next.en;
    const wikiUrl = window.ER_IMG ? ER_IMG.bossWiki(b.id) : '#';
    const photoUrl = bossImage(b);
    
    // 1. Base URL for the cleaner checklist view
    let mapUrl = "https://mapgenie.io/elden-ring/maps/the-lands-between";
    
    // 2. Grab the exact name being used for the site title (d.name)
    // We clean it up by splitting at commas to pass a perfect keyword to MapGenie
    if (d.name) {
      const cleanTitleName = d.name.split(',')[0].trim();
      mapUrl += `?search=${encodeURIComponent(cleanTitleName)}`;
    }

    wrap.innerHTML = `
      <p class="breadcrumb fade-in">${t('catLabel')}: ${t(catKeys[b.category] || 'catShard')}</p>
      <div class="boss-detail-grid">
        <div class="boss-detail-content fade-in-left">
          <h1><span class="gold-text">${parts[0]}</span>${parts[1] ? ',' + parts[1] : ''}</h1>
          <p class="quote">${d.quote}</p>
          <a href="${wikiUrl}" target="_blank" rel="noopener noreferrer" class="wiki-boss-link fade-in">${t('wikiLink')} →</a>
          <div class="info-block"><h3>${t('lore')}</h3><p>${d.lore}</p></div>
          <div class="info-block"><h3>${t('location')}</h3><p>${d.location}</p></div>
          <div class="info-block"><h3>${t('strategy')}</h3><ul>${d.strategy.map(s => `<li>${s}</li>`).join('')}</ul></div>
          <a href="main2.html?id=${next.id}" class="btn-link" style="margin-top:16px"><span>${t('nextLoot')}: ${nd.name.split(',')[0]}</span> <span class="arrow">→</span></a>
        </div>
        <div class="boss-detail-image fade-in-right">${photoBlock(photoUrl, d.name)}</div>
      </div>
      <div class="map-section fade-in scale-in">
        <div class="map-section-header"><h3>${t('mapTitle')}</h3></div>
        <div class="map-section-body">
          <div class="map-img-wrap" style="width: 100%; height: 450px; overflow: hidden; border-radius: 8px;">
            <iframe 
              src="${mapUrl}" 
              title="Elden Ring Map"
              width="100%" 
              height="100%" 
              style="border: none;"
              allow="geolocation"
              loading="lazy">
            </iframe>
          </div>
          <div class="map-info">
            <span class="region-tag">${t('region')}: ${d.region}</span>
            <p style="color:var(--gray);font-size:.88rem;margin-bottom:12px">${d.mapDesc}</p>
            <p style="color:var(--gray);font-size:.82rem">${d.grace}</p>
          </div>
        </div>
      </div>`;
    document.title = d.name;
    setupScrollAnim();
  }

  let activeBuildFilter = 'all';

  function renderBuildsGrid(filter) {
    activeBuildFilter = filter || 'all';
    const grid = document.getElementById('buildsGrid');
    if (!grid) return;
    let builds = getBuilds();
    if (filter && filter !== 'all') builds = builds.filter(b => b.type === filter);
    grid.innerHTML = builds.map(b => {
      const d = b[lang] || b.en;
      const gearHtml = renderGearSection(b.id);
      const statsRow = `<div class="build-row"><span class="label">${t('stats')}</span><span class="value">${d.stats}</span></div>`;
      const imgUrl = buildImage(b);
      const buffSeqHtml = renderBuffSequence(d);
      return `<div class="build-card" data-type="${b.type}">
        <div class="build-card-img">
          <img src="${imgUrl}" alt="${d.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
        </div>
        <div class="build-card-header">
          <p class="type">${d.typeLabel}</p>
          <h3>${d.name}</h3>
        </div>
        <div class="build-card-body">
          <div class="build-row"><span class="label">${t('playstyle')}</span><span class="value">${d.playstyle}</span></div>
          ${gearHtml || `
          <div class="build-row"><span class="label">${t('weapon')}</span><span class="value">${d.weapon}</span></div>
          <div class="build-row"><span class="label">${t('ash')}</span><span class="value">${d.ash}</span></div>
          <div class="build-row"><span class="label">${t('helmet')}</span><span class="value">${d.helmet}</span></div>
          <div class="build-row"><span class="label">${t('armor')}</span><span class="value">${d.armor}</span></div>
          <div class="build-row"><span class="label">${t('gloves')}</span><span class="value">${d.gloves}</span></div>
          <div class="build-row"><span class="label">${t('legs')}</span><span class="value">${d.legs}</span></div>
          <div class="build-row"><span class="label">${t('talismans')}</span><span class="value">${d.talismans}</span></div>`}
          ${statsRow}
          ${buffSeqHtml}
        </div>
      </div>`;
    }).join('');
  }

  function setupBuildFilter() {
    const nav = document.getElementById('buildFilter');
    if (!nav) return;
    nav.querySelectorAll('a').forEach(a => {
      a.onclick = e => {
        e.preventDefault();
        nav.querySelectorAll('a').forEach(x => x.classList.remove('active'));
        a.classList.add('active');
        renderBuildsGrid(a.dataset.filter);
      };
    });
  }

  // ─── ENDINGS DATA ────────────────────────────────────────────────────────────
  const ER_ENDINGS = [
    {
      id: 'elden-lord',
      color: '#c5a059',
      en: {
        name: 'Elden Lord',
        type: 'Default Ending',
        difficulty: 'Easy — available from the start',
        desc: 'The Tarnished mends the Elden Ring and takes the throne as the new Elden Lord, restoring the Golden Order.',
        steps: [
          'Defeat Radagon of the Golden Order and the Elden Beast in Leyndell, Ashen Capital.',
          'After the boss dies, approach Marika\'s shattered body in the Erdtree.',
          'Interact with the fractured Elden Ring to begin mending.',
          'Watch the cutscene — the Tarnished takes the throne as Elden Lord.'
        ]
      },
      pl: {
        name: 'Pan Elden',
        type: 'Domyślne Zakończenie',
        difficulty: 'Łatwe — dostępne od początku',
        desc: 'Zhańbiony naprawia Pierścień Elden i zasiada na tronie jako nowy Pan Elden, przywracając Złoty Porządek.',
        steps: [
          'Pokonaj Radagona Złotego Porządku i Bestię Elden w Leyndell, Spopielałej Stolicy.',
          'Po śmierci bossa podejdź do rozbitego ciała Mariki przy Drzewie Erd.',
          'Wejdź w interakcję z fragmentarycznym Pierścieniem Elden, aby go naprawić.',
          'Obejrzyj przerywnik — Zhańbiony zasiada na tronie jako Pan Elden.'
        ]
      },
      de: {
        name: 'Eldenherr',
        type: 'Standard-Ende',
        difficulty: 'Leicht — von Anfang an verfügbar',
        desc: 'Der Befleckte flickt den Eldenring und besteigt den Thron als neuer Eldenherr, um die Goldene Ordnung wiederherzustellen.',
        steps: [
          'Besiege Radagon der Goldenen Ordnung und die Eldene Bestie in Leyndell, der Aschenen Hauptstadt.',
          'Nach dem Bosskampf gehe zu Marikas zerbrochenem Körper beim Erdbaum.',
          'Interagiere mit dem zerbrochenen Eldenring, um ihn zu flicken.',
          'Schau die Zwischensequenz an — der Befleckte besteigt als Eldenherr den Thron.'
        ]
      }
    },
    {
      id: 'age-of-stars',
      color: '#7b9ccc',
      en: {
        name: 'Age of Stars',
        type: 'Ranni\'s Ending',
        difficulty: 'Long — requires completing Ranni\'s full questline',
        desc: 'Ranni the Witch sends the Elden Ring and the Greater Will away, beginning a cold and distant age governed by the stars and the moon.',
        steps: [
          'Find Ranni at Ranni\'s Rise in Three Sisters (Liurnia). Agree to serve her.',
          'Complete Blaidd\'s questline — follow him to Siofra River and then Nokron.',
          'Defeat Radahn to unlock the falling star and access Nokron, Eternal City.',
          'Retrieve the Fingerslayer Blade from the hidden treasure chest in Nokron.',
          'Give the blade to Ranni. She will give you the Carian Inverted Statue.',
          'Use the statue at the Divine Tower of Liurnia to invert it, then use the Cursemark of Death at the top.',
          'Travel to the Ainsel River Main via the Waygate in Ranni\'s Rise basement.',
          'Defeat Baleful Shadow in Nokstella, Eternal City.',
          'Descend to the Lake of Rot and reach Astel, Naturalborn of the Void — defeat it.',
          'Ride the lift up to the Cathedral of Manus Celes and interact with Ranni\'s body.',
          'Give Ranni the Dark Moon Ring found in the chest here.',
          'After defeating Radagon and the Elden Beast, summon Ranni\'s blue sign on the ground.',
          'Touch Ranni\'s hand — her ending begins.'
        ]
      },
      pl: {
        name: 'Epoka Gwiazd',
        type: 'Zakończenie Ranni',
        difficulty: 'Długie — wymaga ukończenia questliny Ranni',
        desc: 'Czarownica Ranni odrzuca Pierścień Elden i Wyższą Wolę, rozpoczynając zimną erę rządzoną przez gwiazdy i księżyc.',
        steps: [
          'Znajdź Ranni w Ranni\'s Rise w Three Sisters (Liurnia). Zgódź się jej służyć.',
          'Ukończ questlinię Blaiddha — podążaj za nim do Siofra River i Nokron.',
          'Pokonaj Radahna, by odblokować Nokron, Wieczne Miasto.',
          'Zdobądź Ostrze Zabójcy Palców ze skrzyni w Nokron.',
          'Oddaj ostrze Ranni — dostaniesz Odwrócony Posąg Carian.',
          'Użyj posągu w Boskiej Wieży Liurnii, by go odwrócić, potem użyj Piętna Śmierci na szczycie.',
          'Podróżuj do Ainsel River Main przez Waygate w piwnicy Ranni\'s Rise.',
          'Pokonaj Baleful Shadow w Nokstelli, Wiecznym Mieście.',
          'Zejdź do Jeziora Gnicia i pokonaj Astel, Naturalne Narodziny z Pustki.',
          'Wjedź windą do Katedry Manus Celes i wejdź w interakcję z ciałem Ranni.',
          'Daj Ranni Pierścień Ciemnego Księżyca znaleziony w skrzyni.',
          'Po pokonaniu Radagona i Bestii Elden, przywołaj błękitny znak Ranni na ziemi.',
          'Dotknij dłoni Ranni — jej zakończenie się zaczyna.'
        ]
      },
      de: {
        name: 'Zeitalter der Sterne',
        type: 'Rannis Ende',
        difficulty: 'Lang — erfordert Rannis komplette Questreihe',
        desc: 'Hexe Ranni schickt den Eldenring und den Größeren Willen fort und beginnt ein kaltes Zeitalter unter dem Licht der Sterne.',
        steps: [
          'Finde Ranni in Rannis Aufstieg in Den Drei Schwestern (Liurnia). Stimme zu, ihr zu dienen.',
          'Schließe Blaidds Questreihe ab — folge ihm zum Siofra-Fluss und Nokron.',
          'Besiege Radahn, um Nokron, die Ewige Stadt zu öffnen.',
          'Hole die Fingerschlächterklinge aus dem versteckten Schatz in Nokron.',
          'Gib Ranni die Klinge — sie gibt dir die Carian-Umkehrstatue.',
          'Nutze die Statue im Göttlichen Turm von Liurnia, dann nutze das Todesmal oben.',
          'Reise über das Waygate im Keller von Rannis Aufstieg zum Ainsel-Fluss.',
          'Besiege den Bösartigen Schatten in Nokstella, der Ewigen Stadt.',
          'Steige zum See der Fäulnis ab und besiege Astel, Natürlichgeboren der Leere.',
          'Fahre mit dem Lift zur Kathedrale von Manus Celes und interagiere mit Rannis Körper.',
          'Gib Ranni den Dunkelmondring aus der Truhe hier.',
          'Nach dem Sieg über Radagon und die Eldene Bestie, beschwöre Rannis blaues Zeichen am Boden.',
          'Berühre Rannis Hand — ihr Ende beginnt.'
        ]
      }
    },
    {
      id: 'frenzied-flame',
      color: '#d4612a',
      en: {
        name: 'Lord of Frenzied Flame',
        type: 'Hyetta / Three Fingers Ending',
        difficulty: 'Medium — missable, requires specific steps before final boss',
        desc: 'The Tarnished becomes the Lord of Frenzied Flame, consigned by the Three Fingers to burn away all of existence and end the curse of separation.',
        steps: [
          'Optionally: complete Hyetta\'s questline across Liurnia (give her Shabriri Grapes at each location).',
          'Travel to the Subterranean Shunning Grounds beneath Leyndell (enter via the sewers below the Avenue Balcony Site of Grace).',
          'Navigate deep into the area until you find the hidden coffin room. Interact with the coffin to descend further.',
          'Remove ALL of your armor and equipment (you must be completely unequipped).',
          'Open the large door ahead to meet the Three Fingers — they will mark you with the Frenzied Flame.',
          'You can now defeat Radagon and the Elden Beast.',
          'After the final bosses, interact with Marika\'s body — you will release the Frenzied Flame ending.',
          'Optional: use Miquella\'s Needle (from Malenia\'s arena) to reverse the marking if you change your mind.'
        ]
      },
      pl: {
        name: 'Pan Szalonego Płomienia',
        type: 'Zakończenie Hyetty / Trzech Palców',
        difficulty: 'Średnie — można przegapić, wymaga kroków przed finałowym bossem',
        desc: 'Zhańbiony staje się Panem Szalonego Płomienia, naznaczony przez Trzy Palce, by spalić całe istnienie i zakończyć klątwę rozdzielenia.',
        steps: [
          'Opcjonalnie: ukończ questlinię Hyetty przez Liurnię (dawaj jej Winogrona Shabriri).',
          'Podróżuj do Podziemnych Terenów pod Leyndell (wejście przez kanały pod Balkonem Alei).',
          'Przejdź głęboko do ukrytego pokoju z trumną. Wejdź w interakcję z trumną, by zejść niżej.',
          'Zdejmij CAŁE uzbrojenie i ekwipunek (musisz być zupełnie bez wyposażenia).',
          'Otwórz duże drzwi, by spotkać Trzy Palce — naznaczą cię Szalonym Płomieniem.',
          'Możesz teraz pokonać Radagona i Bestię Elden.',
          'Po finałowych bossach wejdź w interakcję z ciałem Mariki — zakończenie Szalonego Płomienia się aktywuje.',
          'Opcjonalnie: użyj Igły Miquelli (z areny Malenii), by cofnąć naznaczenie.'
        ]
      },
      de: {
        name: 'Lord des Wahnsinnslichts',
        type: 'Hyettas / Drei-Finger-Ende',
        difficulty: 'Mittel — kann verpasst werden, bestimmte Schritte vor dem Endkampf nötig',
        desc: 'Der Befleckte wird zum Lord des Wahnsinnslichts, gebrandmarkt von den Drei Fingern, um alle Existenz zu verbrennen.',
        steps: [
          'Optional: Schließe Hyettas Questreihe durch Liurnia ab (gib ihr Shabriri-Trauben).',
          'Reise in die Unterirdischen Verbannnungsgründe unter Leyndell (über die Kanalisation).',
          'Navigiere tief in das Gebiet zum versteckten Sarg-Zimmer und interagiere mit dem Sarg.',
          'Lege ALLE Rüstungen und Ausrüstungen ab (du musst komplett unausgerüstet sein).',
          'Öffne die große Tür, um die Drei Finger zu treffen — sie brandmarken dich mit dem Wahnsinnsfeuer.',
          'Besiege nun Radagon und die Eldene Bestie.',
          'Interagiere nach den Endbossen mit Marikas Körper — das Wahnsinnsfeuer-Ende beginnt.',
          'Optional: Nutze Miquellas Nadel (aus Malenias Arena), um die Brandmarkung rückgängig zu machen.'
        ]
      }
    },
    {
      id: 'dung-eater',
      color: '#6e3b2a',
      en: {
        name: 'Blessing of Despair',
        type: 'Dung Eater\'s Ending',
        difficulty: 'Medium — requires Dung Eater questline',
        desc: 'The Tarnished uses the Mending Rune of the Fell Curse to mend the Elden Ring, spreading the Fell Curse of the Dung Eater across all living things.',
        steps: [
          'Find the Dung Eater as a spirit in the Roundtable Hold (appears after getting two Great Runes).',
          'Read his letter to unlock his cell in the Subterranean Shunning Grounds.',
          'Give him a Seedbed Curse found in the Shunning Grounds to free his body.',
          'Collect four more Seedbed Curses from locations across the Lands Between (Leyndell, Volcano Manor, etc.).',
          'Give all five Seedbed Curses to the Dung Eater in his cell.',
          'He will give you the Mending Rune of the Fell Curse.',
          'Defeat Radagon and the Elden Beast.',
          'After the bosses, use the Mending Rune of the Fell Curse on Marika\'s body.'
        ]
      },
      pl: {
        name: 'Błogosławieństwo Rozpaczy',
        type: 'Zakończenie Pożeracza Łajna',
        difficulty: 'Średnie — wymaga questliny Pożeracza',
        desc: 'Zhańbiony używa Runu Naprawy Straszliwej Klątwy, rozprzestrzeniając klątwę Pożeracza na wszystkie żywe istoty.',
        steps: [
          'Znajdź Pożeracza Łajna jako ducha w Roundtable Hold (pojawia się po zdobyciu dwóch Wielkich Runów).',
          'Przeczytaj jego list, by odblokować celę w Podziemnych Terenach.',
          'Daj mu Klątwę Łożyska znalezioną w terenie, by uwolnić jego ciało.',
          'Zbierz jeszcze cztery Klątwy Łożyska z lokacji w Krainach Pomiędzy.',
          'Oddaj wszystkie pięć kląt Pożeraczowi w jego celi.',
          'Da ci Runę Naprawy Straszliwej Klątwy.',
          'Pokonaj Radagona i Bestię Elden.',
          'Po bossach użyj Runy Naprawy na ciele Mariki.'
        ]
      },
      de: {
        name: 'Segen der Verzweiflung',
        type: 'Mistfressers Ende',
        difficulty: 'Mittel — erfordert Mistfressers Questreihe',
        desc: 'Der Befleckte nutzt die Flickrune des Üblen Fluchs, um den Eldenring zu flicken und den Fluch des Mistfressers zu verbreiten.',
        steps: [
          'Finde den Mistfresser als Geist in der Tafelrunde (erscheint nach zwei Großen Runen).',
          'Lies seinen Brief, um seine Zelle in den Unterirdischen Verbannungsgründen zu öffnen.',
          'Gib ihm einen Saatbett-Fluch aus dem Gebiet, um seinen Körper zu befreien.',
          'Sammle vier weitere Saatbett-Flüche in den Zwischenlanden.',
          'Gib alle fünf Flüche dem Mistfresser in seiner Zelle.',
          'Er gibt dir die Flickrune des Üblen Fluchs.',
          'Besiege Radagon und die Eldene Bestie.',
          'Nutze die Flickrune nach den Bossen an Marikas Körper.'
        ]
      }
    },
    {
      id: 'goldmask',
      color: '#d4b87a',
      en: {
        name: 'Blessing of Order',
        type: 'Goldmask\'s Ending',
        difficulty: 'Hard — requires completing Brother Corhyn + Goldmask questline',
        desc: 'The Tarnished uses the Mending Rune of Perfect Order to mend the Elden Ring, founding a new age of absolute golden order without the influence of the Two Fingers.',
        steps: [
          'Find Brother Corhyn at the Roundtable Hold and exhaust his dialogue.',
          'After getting the Altus Plateau, Corhyn moves to the Altus Highway Junction. Find Goldmask nearby on a broken bridge.',
          'Tell Corhyn about Goldmask — they begin traveling together.',
          'Find them again near the Erdtree Sanctuary in Leyndell.',
          'Solve Goldmask\'s riddle: you need the Incantation Discus of Light, then show it to Goldmask at the colosseum outside Leyndell.',
          'Find them again at the Mountaintops of the Giants, near the Stargazer\'s Ruins.',
          'At Farum Azula (after Maliketh), find Goldmask\'s body on a broken arch — loot it for the Mending Rune of Perfect Order.',
          'Defeat Radagon and the Elden Beast.',
          'Use the Mending Rune of Perfect Order on Marika\'s body.'
        ]
      },
      pl: {
        name: 'Błogosławieństwo Porządku',
        type: 'Zakończenie Złotej Maski',
        difficulty: 'Trudne — wymaga questliny Brata Corhyna i Złotej Maski',
        desc: 'Zhańbiony używa Runy Doskonałego Porządku, by naprawić Pierścień Elden i zapoczątkować erę absolutnego złotego ładu.',
        steps: [
          'Znajdź Brata Corhyna w Roundtable Hold i wyczerpaj jego dialogi.',
          'Po dostaniu się na Wyżynę Altus, Corhyn przenosi się na Skrzyżowanie. Znajdź Złotą Maskę na pobliskim moście.',
          'Powiedz Corhynowi o Złotej Masce — zaczną podróżować razem.',
          'Znajdź ich ponownie w pobliżu Sanktuarium Drzewa Erd w Leyndell.',
          'Rozwiąż zagadkę Złotej Maski: potrzebujesz Inkantacji Dysk Światła, pokaż ją Złotej Masce przy koloseum.',
          'Znajdź ich na Szczytach Gigantów, w pobliżu Ruin Obserwatora.',
          'W Farum Azula znajdź ciało Złotej Maski na złamanym łuku — zdobądź Runę Doskonałego Porządku.',
          'Pokonaj Radagona i Bestię Elden.',
          'Użyj Runy Doskonałego Porządku na ciele Mariki.'
        ]
      },
      de: {
        name: 'Segen der Ordnung',
        type: 'Goldmaskes Ende',
        difficulty: 'Schwer — erfordert Bruder Corhyns + Goldmaskes Questreihe',
        desc: 'Der Befleckte flickt den Eldenring mit der Flickrune der Vollkommenen Ordnung und begründet ein neues goldenes Zeitalter.',
        steps: [
          'Finde Bruder Corhyn in der Tafelrunde und erschöpfe seinen Dialog.',
          'Nach dem Altus-Plateau zieht Corhyn zur Altus-Kreuzung. Finde Goldmaske auf einer Brücke.',
          'Erzähle Corhyn von Goldmaske — sie reisen zusammen.',
          'Finde sie wieder im Erdbaum-Heiligtum in Leyndell.',
          'Löse Goldmaskes Rätsel: du brauchst die Inkantation Lichtscheibe, zeige sie Goldmaske beim Kolosseum.',
          'Finde sie erneut an den Bergspitzen der Giganten bei den Sterngucker-Ruinen.',
          'In Farum Azula: finde Goldmaskes Körper auf einem Bogen — bekomme die Flickrune der Vollkommenen Ordnung.',
          'Besiege Radagon und die Eldene Bestie.',
          'Nutze die Flickrune der Vollkommenen Ordnung an Marikas Körper.'
        ]
      }
    },
    {
      id: 'elden-lord-queen',
      color: '#a0c5a0',
      en: {
        name: 'Elden Lord (with Nepheli / Dung Eater / Kenneth)',
        type: 'Variant Default Ending',
        difficulty: 'Easy — just complete any of these NPC questlines',
        desc: 'If you completed certain NPC quests, you may see different characters on the throne alongside the Tarnished in the credits.',
        steps: [
          'For Nepheli Loux: Give her the Stormhawk King ashes and complete her questline through Gideon Ofnir\'s library.',
          'For Kenneth Haight: Complete his quest in East Limgrave and re-meet him in Stormveil post-Godrick.',
          'For Dung Eater: Do NOT give him Seedbed Curses (those lead to his own ending).',
          'Then simply proceed with the default Elden Lord ending.',
          'The credits will show your chosen NPC on the throne.'
        ]
      },
      pl: {
        name: 'Pan Elden (z Nepheli / Dung Eater / Kennethem)',
        type: 'Wariant Domyślnego Zakończenia',
        difficulty: 'Łatwe — ukończ dowolną z tych questlinii NPC',
        desc: 'Jeśli ukończyłeś questliny określonych NPC, zobaczysz ich na tronie razem z Zhańbionym w napisach końcowych.',
        steps: [
          'Dla Nepheli Loux: Daj jej prochy Stormhawk King i ukończ jej questlinię.',
          'Dla Kennetha Haighta: Ukończ jego questa i spotkaj go w Zamku Burzowym po Godricku.',
          'Dla Pożeracza Łajna: NIE dawaj mu Kląt Łożyska.',
          'Następnie po prostu kontynuuj domyślne zakończenie Pana Elden.',
          'Napisy końcowe pokażą wybranego NPC na tronie.'
        ]
      },
      de: {
        name: 'Eldenherr (mit Nepheli / Mistfresser / Kenneth)',
        type: 'Variante des Standard-Endes',
        difficulty: 'Leicht — schließe eine dieser NPC-Questreihen ab',
        desc: 'Bei bestimmten NPC-Quests siehst du im Abspann andere Charaktere auf dem Thron.',
        steps: [
          'Für Nepheli Loux: Gib ihr die Sturmfalke-König-Asche und schließe ihre Quest ab.',
          'Für Kenneth Haight: Schließe seine Quest ab und triff ihn in Sturmwindfeste nach Godrick.',
          'Für Mistfresser: Gib ihm KEINE Saatbett-Flüche.',
          'Fahre dann mit dem Standard-Eldenherr-Ende fort.',
          'Der Abspann zeigt den gewählten NPC auf dem Thron.'
        ]
      }
    }
  ];

  function renderEndingsGrid() {
    const grid = document.getElementById('endingsGrid');
    if (!grid) return;
    grid.innerHTML = ER_ENDINGS.map(e => {
      const d = e[lang] || e.en;
      return `<div class="ending-card fade-in" data-id="${e.id}" style="--ending-color:${e.color}" tabindex="0" role="button">
        <div class="ending-card-accent"></div>
        <div class="ending-card-body">
          <p class="ending-type">${d.type}</p>
          <h3 class="ending-name">${d.name}</h3>
          <p class="ending-difficulty"><span>${t('endingDifficulty')}:</span> ${d.difficulty}</p>
          <p class="ending-desc">${d.desc}</p>
          <span class="ending-cta">${t('endingSteps')} <span class="arrow">→</span></span>
        </div>
      </div>`;
    }).join('');

    grid.querySelectorAll('.ending-card').forEach(card => {
      const activate = () => showEndingDetail(card.dataset.id);
      card.onclick = activate;
      card.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') activate(); };
    });
    setupScrollAnim();
  }

  function showEndingDetail(id) {
    const ending = ER_ENDINGS.find(e => e.id === id);
    if (!ending) return;
    const d = ending[lang] || ending.en;
    const overlay = document.getElementById('endingOverlay');
    const content = document.getElementById('endingOverlayContent');
    if (!overlay || !content) return;

    content.innerHTML = `
      <div class="ending-overlay-header" style="border-left:3px solid ${ending.color}">
        <p class="ending-type">${d.type}</p>
        <h2 class="ending-overlay-title" style="color:${ending.color}">${d.name}</h2>
        <p class="ending-difficulty-full"><span>${t('endingDifficulty')}:</span> ${d.difficulty}</p>
        <p class="ending-overlay-desc">${d.desc}</p>
      </div>
      <div class="ending-steps-section">
        <h3>${t('endingSteps')}</h3>
        <ol class="ending-steps-list">
          ${d.steps.map((s, i) => `<li>
            <span class="step-num" style="background:${ending.color};color:#000">${i + 1}</span>
            <span class="step-text">${s}</span>
          </li>`).join('')}
        </ol>
      </div>`;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeEndingOverlay() {
    const overlay = document.getElementById('endingOverlay');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function initEndings() {
    applyI18n(); setupLang(); setupMenu(); hideLoader();
    renderEndingsGrid();
    const closeBtn = document.getElementById('endingOverlayClose');
    const overlay = document.getElementById('endingOverlay');
    if (closeBtn) closeBtn.onclick = closeEndingOverlay;
    if (overlay) overlay.onclick = e => { if (e.target === overlay) closeEndingOverlay(); };
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeEndingOverlay(); });
    setTimeout(setupScrollAnim, 100);
  }

  function initHome() {
    applyI18n(); setupLang(); setupMenu(); hideLoader();
    renderCategories(); renderFeatured(); renderBossGrid();
    setTimeout(setupScrollAnim, 100);
  }

  function initBossDetail() {
    applyI18n(); setupLang(); setupMenu(); hideLoader();
    renderBossDetailPage();
    setTimeout(setupScrollAnim, 100);
  }

  function initBuilds() {
    applyI18n(); setupLang(); setupMenu(); hideLoader();
    setupBuildFilter(); renderBuildsGrid('all');
    setTimeout(setupScrollAnim, 100);
  }

  return { initHome, initBossDetail, initBuilds, initEndings };
})();
