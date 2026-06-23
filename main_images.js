window.ER_IMG = {
  WIKI: 'https://eldenring.fandom.com/wiki/',
  STEAM_HERO: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/library_hero.jpg',
  STEAM_HEADER: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg',
  MAP_PHOTO: 'https://static.wikia.nocookie.net/eldenring/images/4/40/Elden_Ring_Map.jpg/revision/latest/scale-to-width-down/1200?cb=20220411151717',
  MAP_LINK: 'https://mapgenie.io/elden-ring/maps/the-lands-between',

  wikiPage(page) {
    return this.WIKI + page.replace(/ /g, '_');
  },

  bossWiki(id) {
    const m = {
      margit: 'Margit,_the_Fell_Omen',
      godrick: 'Godrick_the_Grafted',
      rennala: 'Rennala,_Queen_of_the_Full_Moon',
      radahn: 'Starscourge_Radahn',
      morgott: 'Morgott,_the_Omen_King',
      rykard: 'Rykard,_Lord_of_Blasphemy',
      mohg: 'Mohg,_Lord_of_Blood',
      malenia: 'Malenia,_Blade_of_Miquella',
      maliketh: 'Maliketh,_the_Black_Blade',
      godfrey: 'Godfrey,_First_Elden_Lord',
      radagon: 'Radagon_of_the_Golden_Order',
      'elden-beast': 'Elden_Beast',
      'fire-giant': 'Fire_Giant',
      astel: 'Astel,_Naturalborn_of_the_Void',
      fortissax: 'Lichdragon_Fortissax',
      loretta: 'Loretta,_Knight_of_the_Haligtree',
      placidusax: 'Dragonlord_Placidusax',
      ancestor: 'Ancestor_Spirit',
      mimic: 'Mimic_Tear',
      'golden-godfrey': 'Godfrey,_First_Elden_Lord',
      'grafted-scion': 'Grafted_Scion',
      'red-wolf': 'Red_Wolf_of_Radagon',
      niall: 'Commander_Niall'
    };
    return m[id] ? this.wikiPage(m[id]) : this.WIKI;
  },

  buildPhoto(id) {
    const p = {
      'bloodhound-fang': './img/blood.webp',
      blasphemous: './img/blade.webp',
      moonveil: './img/moon.webp',
      'greatsword-str': './img/great.webp',
      rivers: './img/river.webp',
      'death-poker': './img/death.webp',
      'giant-crusher': './img/one.webp',
    };
    return p[id] || this.STEAM_HERO;
  },

  categoryPhoto(key) {
    const p = {
      all: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/library_hero.jpg',
      shard: './img/shr.webp',
      legend: './img/legend.webp',
      field: './img/mask.webp',
      final: './img/marika.webp'
    };
    return p[key] || this.STEAM_HERO;
  },

  // ─── REGIONS ────────────────────────────────────────────────────────────────
  // Add your own image URLs here for each region key.
  // These are used in boss cards and detail pages.
  regionPhoto(key) {
    
    const p = {
      limgrave:         'https://eldenring.wiki.fextralife.com/file/Elden-Ring/limgrave_location_map_elden_ring_wiki_guide_600px.jpg',
      'stormveil-castle': 'https://static.wikia.nocookie.net/eldenring/images/c/c3/Stormveil_Castle.jpg/revision/latest/scale-to-width-down/1200?cb=20220315180000',
      liurnia:          'https://static.wikia.nocookie.net/eldenring/images/6/6c/Liurnia_of_the_Lakes.jpg/revision/latest/scale-to-width-down/1200?cb=20220315180000',
      caelid:           'https://static.wikia.nocookie.net/eldenring/images/8/8b/Caelid_Overview.jpg/revision/latest/scale-to-width-down/1200?cb=20220315180000',
      altus:            'https://static.wikia.nocookie.net/eldenring/images/0/0e/Altus_Plateau.jpg/revision/latest/scale-to-width-down/1200?cb=20220315180000',
      'mt-gelmir':      'https://static.wikia.nocookie.net/eldenring/images/3/3f/Mt._Gelmir.jpg/revision/latest/scale-to-width-down/1200?cb=20220315180000',
      'leyndell':       'https://static.wikia.nocookie.net/eldenring/images/2/2d/Leyndell_Royal_Capital.jpg/revision/latest/scale-to-width-down/1200?cb=20220315180000',
      'mountaintops':   'https://static.wikia.nocookie.net/eldenring/images/4/41/Mountaintops_of_the_Giants.jpg/revision/latest/scale-to-width-down/1200?cb=20220315180000',
      'farum-azula':    'https://static.wikia.nocookie.net/eldenring/images/a/a3/Crumbling_Farum_Azula.jpg/revision/latest/scale-to-width-down/1200?cb=20220315180000',
      'haligtree':      'https://static.wikia.nocookie.net/eldenring/images/f/f4/Miquella%27s_Haligtree.jpg/revision/latest/scale-to-width-down/1200?cb=20220315180000',
      'nokron':         'https://static.wikia.nocookie.net/eldenring/images/0/08/Nokron%2C_Eternal_City.jpg/revision/latest/scale-to-width-down/1200?cb=20220315180000',
      'siofra':         'https://static.wikia.nocookie.net/eldenring/images/5/58/Siofra_River.jpg/revision/latest/scale-to-width-down/1200?cb=20220315180000',
      'lake-of-rot':    'https://static.wikia.nocookie.net/eldenring/images/e/e4/Lake_of_Rot.jpg/revision/latest/scale-to-width-down/1200?cb=20220315180000'

    };
    return p[key] || this.STEAM_HERO;
  }
};

window.ER_GEAR = {
  'bloodhound-fang': {
    weapon: [{ n: "Bloodhound's Fang +25", w: "Bloodhound's_Fang" }],
    ash: [{ n: "Bloodhound's Finesse", w: "Bloodhound's_Finesse" }],
    helmet: [{ n: "Radahn's Helm", w: "Radahn's_Helm" }],
    armor: [{ n: "Radahn's Armor", w: "Radahn's_Armor" }],
    gloves: [{ n: "Radahn's Gauntlets", w: "Radahn's_Gauntlets" }],
    legs: [{ n: "Radahn's Greaves", w: "Radahn's_Greaves" }],
    talismans: [
      { n: "Rotten Winged Sword Insignia", w: "Rotten_Winged_Sword_Insignia" },
      { n: "Lord of Blood's Exultation", w: "Lord_of_Blood's_Exultation" },
      { n: "Green Turtle Talisman", w: "Green_Turtle_Talisman" },
      { n: "Dragoncrest Greatshield Talisman", w: "Dragoncrest_Greatshield_Talisman" }
    ]
  },
  blasphemous: {
    weapon: [{ n: "Blasphemous Blade +25", w: "Blasphemous_Blade" }],
    ash: [{ n: "Taker's Flames", w: "Taker's_Flames" }],
    helmet: [{ n: "Veteran's Helm", w: "Veteran's_Helm" }],
    armor: [{ n: "Veteran's Armor", w: "Veteran's_Armor" }],
    gloves: [{ n: "Veteran's Gauntlets", w: "Veteran's_Gauntlets" }],
    legs: [{ n: "Veteran's Greaves", w: "Veteran's_Greaves" }],
    talismans: [
      { n: "Faithful's Canvas Talisman", w: "Faithful's_Canvas_Talisman" },
      { n: "Green Turtle Talisman", w: "Green_Turtle_Talisman" },
      { n: "Dragoncrest Greatshield Talisman", w: "Dragoncrest_Greatshield_Talisman" },
      { n: "Erdtree's Favor +2", w: "Erdtree's_Favor_+2" }
    ]
  },
  moonveil: {
    weapon: [{ n: "Moonveil +25", w: "Moonveil" }],
    ash: [{ n: "Transient Moonlight", w: "Transient_Moonlight" }],
    helmet: [{ n: "Azur's Glintstone Crown", w: "Azur's_Glintstone_Crown" }],
    armor: [{ n: "Snow Witch Robe", w: "Snow_Witch_Robe" }],
    gloves: [{ n: "Snow Witch Skirt", w: "Snow_Witch_Skirt" }],
    legs: [{ n: "Snow Witch Skirt", w: "Snow_Witch_Skirt" }],
    talismans: [
      { n: "Radicon Icon", w: "Radicon_Icon" },
      { n: "Magic Scorpion Charm", w: "Magic_Scorpion_Charm" },
      { n: "Graven-School Talisman", w: "Graven-School_Talisman" },
      { n: "Cerulean Hidden Tear", w: "Cerulean_Hidden_Tear" }
    ]
  },
  'greatsword-str': {
    weapon: [{ n: "Greatsword +25", w: "Greatsword" }],
    ash: [
      { n: "Determination", w: "Determination" },
      { n: "Royal Knight's Resolve", w: "Royal_Knight's_Resolve" }
    ],
    helmet: [{ n: "Bull-Goat Helm", w: "Bull-Goat_Helm" }],
    armor: [{ n: "Bull-Goat Armor", w: "Bull-Goat_Armor" }],
    gloves: [{ n: "Bull-Goat Gauntlets", w: "Bull-Goat_Gauntlets" }],
    legs: [{ n: "Bull-Goat Greaves", w: "Bull-Goat_Greaves" }],
    talismans: [
      { n: "Green Turtle Talisman", w: "Green_Turtle_Talisman" },
      { n: "Arsenal Charm", w: "Arsenal_Charm" },
      { n: "Dragoncrest Greatshield Talisman", w: "Dragoncrest_Greatshield_Talisman" },
      { n: "Great-Jar's Arsenal", w: "Great-Jar's_Arsenal" }
    ]
  },
  rivers: {
    weapon: [{ n: "Rivers of Blood +25", w: "Rivers_of_Blood" }],
    ash: [{ n: "Corpse Piler", w: "Corpse_Piler" }],
    helmet: [{ n: "White Mask", w: "White_Mask" }],
    armor: [{ n: "Lord of Blood's Robe", w: "Lord_of_Blood's_Robe" }],
    gloves: [{ n: "Lord of Blood's Gauntlets", w: "Lord_of_Blood's_Gauntlets" }],
    legs: [{ n: "Lord of Blood's Greaves", w: "Lord_of_Blood's_Greaves" }],
    talismans: [
      { n: "Lord of Blood's Exultation", w: "Lord_of_Blood's_Exultation" },
      { n: "Rotten Winged Sword Insignia", w: "Rotten_Winged_Sword_Insignia" },
      { n: "Millicent's Prosthesis", w: "Millicent's_Prosthesis" },
      { n: "Dragoncrest Shield Talisman", w: "Dragoncrest_Shield_Talisman" }
    ]
  },
  'death-poker': {
    weapon: [{ n: "Death's Poker +25", w: "Death's_Poker" }],
    ash: [{ n: "Ghostflame Ignition", w: "Ghostflame_Ignition" }],
    helmet: [{ n: "Azur's Glintstone Crown", w: "Azur's_Glintstone_Crown" }],
    armor: [{ n: "Lusat's Robe", w: "Lusat's_Robe" }],
    gloves: [{ n: "Lusat's Manchettes", w: "Lusat's_Manchettes" }],
    legs: [{ n: "Old Sorcerer's Legwraps", w: "Old_Sorcerer's_Legwraps" }],
    talismans: [
      { n: "Graven-Mass Talisman", w: "Graven-Mass_Talisman" },
      { n: "Magic Scorpion Charm", w: "Magic_Scorpion_Charm" },
      { n: "Radicon Icon", w: "Radicon_Icon" },
      { n: "Cerulean Hidden Tear", w: "Cerulean_Hidden_Tear" }
    ]
  },
  // ─── ONE-SHOT BUILD ────────────────────────────────────────────────────────
  'giant-crusher': {
    weapon: [{ n: "Giant-Crusher +25 (Heavy affinity)", w: "Giant-Crusher" }],
    ash: [{ n: "Royal Knight's Resolve", w: "Royal_Knight's_Resolve" }],
    offhand: [
      { n: "Sacred Seal (any)", w: "Dragon_Communion_Seal" },
      { n: "Dagger with Seppuku Ash of War", w: "Seppuku" }
    ],
    helmet: [{ n: "Black Dumpling (or White Mask)", w: "Black_Dumpling" }],
    armor: [{ n: "Any heavy chest armor", w: "Bull-Goat_Armor" }],
    gloves: [{ n: "Any heavy gauntlets", w: "Bull-Goat_Gauntlets" }],
    legs: [{ n: "Any heavy greaves", w: "Bull-Goat_Greaves" }],
    talismans: [
      { n: "Axe Talisman (boosts charged attacks)", w: "Axe_Talisman" },
      { n: "Lord of Blood's Exultation", w: "Lord_of_Blood's_Exultation" },
      { n: "Two-Handed Sword Talisman", w: "Two-Handed_Sword_Talisman" },
      { n: "Red-Feathered Branchsword", w: "Red-Feathered_Branchsword" }
    ]
  }
};
