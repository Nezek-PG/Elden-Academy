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
        
        // Nowe buildy z podstawki
        'comet-azur-mage': './img/azur.webp',
        'double-curved-bleed': './img/curved.webp',
        
        // Nowe buildy z DLC
        'bloodfiend-arm': './img/bloodfiend.webp',
        'perfume-bottle-spark': './img/perfume.webp'
      };
      return p[id] || this.STEAM_HERO;
  },
  categoryPhoto(key) {
    const p = {
      all: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/library_hero.jpg',
      shard: './img/shr.webp',
      legend: './img/legend.webp',
      field: './img/mask.webp',
      final: './img/marika.webp',
      dlc: './img/shadow.webp'
    };
    return p[key] || this.STEAM_HERO;
  },


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
  },
  // ─── NOWE BUILDY Z PODSTAWKI ───────────────────────────────────────────────
  'comet-azur-mage': {
    weapon: [
      { n: "Lusat's Glintstone Staff +10", w: "Lusat's_Glintstone_Staff" },
      { n: "Carian Regal Scepter", w: "Carian_Regal_Scepter" }
    ],
    ash: [{ n: "No Skill", w: "No_Skill" }],
    helmet: [{ n: "Azur's Glintstone Crown", w: "Azur's_Glintstone_Crown" }],
    armor: [{ n: "Sorcerer Robes", w: "Sorcerer_Robes" }],
    gloves: [{ n: "Battlemage Manchettes", w: "Battlemage_Manchettes" }],
    legs: [{ n: "Sorcerer Leggings", w: "Sorcerer_Leggings" }],
    talismans: [
      { n: "Graven-Mass Talisman", w: "Graven-Mass_Talisman" },
      { n: "Magic Scorpion Charm", w: "Magic_Scorpion_Charm" },
      { n: "Radagon Icon", w: "Radagon_Icon" },
      { n: "Ritual Sword Talisman", w: "Ritual_Sword_Talisman" }
    ]
  },
  'double-curved-bleed': {
    weapon: [{ n: "Scavenger's Curved Sword +25 x2", w: "Scavenger's_Curved_Sword" }],
    ash: [{ n: "Seppuku", w: "Seppuku" }],
    helmet: [{ n: "White Mask", w: "White_Mask" }],
    armor: [{ n: "Raptor's Black Feathers", w: "Raptor's_Black_Feathers" }],
    gloves: [{ n: "Malformed Dragon Gauntlets", w: "Malformed_Dragon_Gauntlets" }],
    legs: [{ n: "Bull-Goat Greaves", w: "Bull-Goat_Greaves" }],
    talismans: [
      { n: "Claw Talisman", w: "Claw_Talisman" },
      { n: "Lord of Blood's Exultation", w: "Lord_of_Blood's_Exultation" },
      { n: "Rotten Winged Sword Insignia", w: "Rotten_Winged_Sword_Insignia" },
      { n: "Millicent's Prosthesis", w: "Millicent's_Prosthesis" }
    ]
  },
  // ─── BUILDY Z DLC ──────────────────────────────────────────────────────────
  'bloodfiend-arm': {
    weapon: [{ n: "Bloodfiend's Arm +25", w: "Bloodfiend's_Arm" }],
    ash: [{ n: "Cragblade", w: "Cragblade" }],
    helmet: [{ n: "White Mask", w: "White_Mask" }],
    armor: [{ n: "Ansbach's Attire", w: "Ansbach's_Attire" }],
    gloves: [{ n: "Verdigris Gauntlets", w: "Verdigris_Gauntlets" }],
    legs: [{ n: "Verdigris Greaves", w: "Verdigris_Greaves" }],
    talismans: [
      { n: "Axe Talisman", w: "Axe_Talisman" },
      { n: "Lord of Blood's Exultation", w: "Lord_of_Blood's_Exultation" },
      { n: "Two-Handed Sword Talisman", w: "Two-Handed_Sword_Talisman" },
      { n: "Dragoncrest Greatshield Talisman", w: "Dragoncrest_Greatshield_Talisman" }
    ]
  },
  'perfume-bottle-spark': {
    weapon: [{ n: "Lightning Perfume Bottle +25", w: "Lightning_Perfume_Bottle" }],
    ash: [{ n: "Rolling Sparks", w: "Rolling_Sparks" }],
    helmet: [{ n: "Rakshasa Helm", w: "Rakshasa_Helm" }],
    armor: [{ n: "Rakshasa Armor", w: "Rakshasa_Armor" }],
    gloves: [{ n: "Rakshasa Gauntlets", w: "Rakshasa_Gauntlets" }],
    legs: [{ n: "Rakshasa Greaves", w: "Rakshasa_Greaves" }],
    talismans: [
      { n: "Perfumer's Talisman", w: "Perfumer's_Talisman" },
      { n: "Lightning Scorpion Charm", w: "Lightning_Scorpion_Charm" },
      { n: "Shard of Alexander", w: "Shard_of_Alexander" },
      { n: "Ritual Sword Talisman", w: "Ritual_Sword_Talisman" }
    ]
  }

};
