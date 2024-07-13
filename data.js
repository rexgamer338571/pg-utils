const cpms = [0.094,0.1351374318,0.16639787,0.192650919,0.21573247,0.2365726613,0.25572005,0.235303812,0.29024988,0.3060573775,0.3210876,0.3354450362,0.34921268,0.3624577511,0.3752356,0.387592416,0.39956728,0.4111935514,0.4225,0.4329264091,0.44310755,0.4530599591,0.4627984,0.472336093,0.48168495,0.4908558003,0.49985844,0.508701765,0.51739395,0.5259425113,0.5343543,0.5426357375,0.5507927,0.5588305862,0.5667545,0.5745691333,0.5822789,0.5898879072,0.5974,0.6048236651,0.6121573,0.6194041216,0.6265671,0.6336491432,0.64065295,0.6475809666,0.65443563,0.6612192524,0.667934,0.6745818959,0.6811649,0.6876849038,0.69414365,0.70054287,0.7068842,0.7131691091,0.7193991,0.7255756136,0.7317,0.7347410093,0.7377695,0.7407855938,0.74378943,0.7467812109,0.74976104,0.7527290867,0.7556855,0.7586303683,0.76156384,0.7644860647,0.76739717,0.7702972656,0.7731865,0.7760649616,0.77893275,0.7817900548,0.784637,0.7874736075,0.7903,0.792803968,0.79530001,0.797800015,0.8003,0.802799995,0.8053,0.8078,0.81029999,0.812799985,0.81529999,0.81779999,0.82029999,0.82279999,0.82529999,0.82779999,0.83029999,0.83279999,0.83529999,0.83779999,0.84029999,0.84279999,0.84529999]
const bcrs = {
    "Bulbasaur": 20.0,
    "Ivysaur": 10.0,
    "Venusaur": 5.0,
    "Charmander": 20.0,
    "Charmeleon": 10.0,
    "Charizard": 5.0,
    "Squirtle": 20.0,
    "Wartortle": 10.0,
    "Blastoise": 5.0,
    "Caterpie": 50.0,
    "Metapod": 25.0,
    "Butterfree": 12.5,
    "Weedle": 50.0,
    "Kakuna": 25.0,
    "Beedrill": 12.5,
    "Pidgey": 50.0,
    "Pidgeotto": 25.0,
    "Pidgeot": 12.5,
    "Rattata": 50.0,
    "Rattata(Alolan Form)": 50.0,
    "Raticate": 20.0,
    "Raticate(Alolan Form)": 20.0,
    "Spearow": 50.0,
    "Fearow": 20.0,
    "Ekans": 50.0,
    "Arbok": 20.0,
    "Pikachu": 20.0,
    "Raichu": 10.0,
    "Raichu(Alolan Form)": 10.0,
    "Sandshrew": 50.0,
    "Sandshrew(Alolan Form)": 50.0,
    "Sandslash": 20.0,
    "Sandslash(Alolan Form)": 20.0,
    "Nidoran\u2640": 50.0,
    "Nidorina": 25.0,
    "Nidoqueen": 12.5,
    "Nidoran\u2642": 50.0,
    "Nidorino": 25.0,
    "Nidoking": 12.5,
    "Clefairy": 30.0,
    "Clefable": 10.0,
    "Vulpix": 30.0,
    "Vulpix(Alolan Form)": 30.0,
    "Ninetales": 10.0,
    "Ninetales(Alolan Form)": 10.0,
    "Jigglypuff": 50.0,
    "Wigglytuff": 20.0,
    "Zubat": 50.0,
    "Golbat": 20.0,
    "Oddish": 60.0,
    "Gloom": 30.0,
    "Vileplume": 15.0,
    "Paras": 40.0,
    "Parasect": 20.0,
    "Venonat": 50.0,
    "Venomoth": 20.0,
    "Diglett": 50.0,
    "Diglett(Alolan Form)": 50.0,
    "Dugtrio": 20.0,
    "Dugtrio(Alolan Form)": 20.0,
    "Meowth": 50.0,
    "Meowth(Alolan Form)": 50.0,
    "Meowth(Galarian Form)": 45.0,
    "Persian": 20.0,
    "Persian(Alolan Form)": 20.0,
    "Psyduck": 50.0,
    "Golduck": 20.0,
    "Mankey": 50.0,
    "Primeape": 20.0,
    "Growlithe": 30.0,
    "Growlithe(Hisuian Form)": 30.0,
    "Arcanine": 10.0,
    "Arcanine(Hisuian Form)": 10.0,
    "Poliwag": 50.0,
    "Poliwhirl": 25.0,
    "Poliwrath": 12.5,
    "Abra": 50.0,
    "Kadabra": 25.0,
    "Alakazam": 10.0,
    "Machop": 50.0,
    "Machoke": 25.0,
    "Machamp": 10.0,
    "Bellsprout": 50.0,
    "Weepinbell": 25.0,
    "Victreebel": 12.5,
    "Tentacool": 50.0,
    "Tentacruel": 20.0,
    "Geodude": 50.0,
    "Geodude(Alolan Form)": 50.0,
    "Graveler": 25.0,
    "Graveler(Alolan Form)": 25.0,
    "Golem": 12.5,
    "Golem(Alolan Form)": 12.5,
    "Ponyta": 40.0,
    "Ponyta(Galarian Form)": 40.0,
    "Rapidash": 15.0,
    "Rapidash(Galarian Form)": 15.0,
    "Slowpoke": 50.0,
    "Slowpoke(Galarian Form)": 50.0,
    "Slowbro": 20.0,
    "Slowbro(Galarian Form)": 20.0,
    "Magnemite": 50.0,
    "Magneton": 20.0,
    "Farfetch'd": 30.0,
    "Farfetch'd(Galarian Form)": 30.0,
    "Doduo": 50.0,
    "Dodrio": 20.0,
    "Seel": 50.0,
    "Dewgong": 20.0,
    "Grimer": 50.0,
    "Grimer(Alolan Form)": 50.0,
    "Muk": 20.0,
    "Muk(Alolan Form)": 20.0,
    "Shellder": 50.0,
    "Cloyster": 20.0,
    "Gastly": 40.0,
    "Haunter": 20.0,
    "Gengar": 10.0,
    "Onix": 20.0,
    "Drowzee": 50.0,
    "Hypno": 20.0,
    "Krabby": 50.0,
    "Kingler": 20.0,
    "Voltorb": 50.0,
    "Voltorb(Hisuian Form)": 50.0,
    "Electrode": 20.0,
    "Electrode(Hisuian Form)": 20.0,
    "Exeggcute": 50.0,
    "Exeggutor": 20.0,
    "Exeggutor(Alolan Form)": 20.0,
    "Cubone": 40.0,
    "Marowak": 15.0,
    "Marowak(Alolan Form)": 15.0,
    "Hitmonlee": 20.0,
    "Hitmonchan": 20.0,
    "Lickitung": 20.0,
    "Koffing": 50.0,
    "Weezing": 20.0,
    "Weezing(Galarian Form)": 20.0,
    "Rhyhorn": 50.0,
    "Rhydon": 5.0,
    "Chansey": 20.0,
    "Tangela": 40.0,
    "Kangaskhan": 20.0,
    "Horsea": 50.0,
    "Seadra": 20.0,
    "Goldeen": 50.0,
    "Seaking": 20.0,
    "Staryu": 50.0,
    "Starmie": 20.0,
    "Mr. Mime": 30.0,
    "Mr. Mime(Galarian Form)": 30.0,
    "Scyther": 30.0,
    "Jynx": 30.0,
    "Electabuzz": 20.0,
    "Magmar": 20.0,
    "Pinsir": 30.0,
    "Tauros": 30.0,
    "Magikarp": 70.0,
    "Gyarados": 10.0,
    "Lapras": 5.0,
    "Ditto": 20.0,
    "Eevee": 40.0,
    "Vaporeon": 12.5,
    "Jolteon": 12.5,
    "Flareon": 12.5,
    "Porygon": 40.0,
    "Omanyte": 40.0,
    "Omastar": 15.0,
    "Kabuto": 40.0,
    "Kabutops": 15.0,
    "Aerodactyl": 20.0,
    "Snorlax": 5.0,
    "Articuno": 3.0,
    "Articuno(Galarian Form)": 0.3,
    "Zapdos": 3.0,
    "Zapdos(Galarian Form)": 0.3,
    "Moltres": 3.0,
    "Moltres(Galarian Form)": 0.3,
    "Dratini": 40.0,
    "Dragonair": 10.0,
    "Dragonite": 5.0,
    "Mewtwo": 2.0,
    "Mew": 10000.0,
    "Chikorita": 20.0,
    "Bayleef": 12.5,
    "Meganium": 5.0,
    "Cyndaquil": 20.0,
    "Quilava": 12.5,
    "Typhlosion": 5.0,
    "Totodile": 20.0,
    "Croconaw": 12.5,
    "Feraligatr": 5.0,
    "Sentret": 50.0,
    "Furret": 15.0,
    "Hoothoot": 50.0,
    "Noctowl": 15.0,
    "Ledyba": 50.0,
    "Ledian": 15.0,
    "Spinarak": 50.0,
    "Ariados": 15.0,
    "Crobat": 10.0,
    "Chinchou": 40.0,
    "Lanturn": 15.0,
    "Pichu": 25.0,
    "Cleffa": 25.0,
    "Igglybuff": 25.0,
    "Togepi": 25.0,
    "Togetic": 20.0,
    "Natu": 40.0,
    "Xatu": 15.0,
    "Mareep": 50.0,
    "Flaaffy": 25.0,
    "Ampharos": 12.5,
    "Bellossom": 5.0,
    "Marill": 50.0,
    "Azumarill": 15.0,
    "Sudowoodo": 12.5,
    "Politoed": 10.0,
    "Hoppip": 50.0,
    "Skiploom": 25.0,
    "Jumpluff": 12.5,
    "Aipom": 20.0,
    "Sunkern": 50.0,
    "Sunflora": 10.0,
    "Yanma": 30.0,
    "Wooper": 40.0,
    "Quagsire": 15.0,
    "Espeon": 12.5,
    "Umbreon": 12.5,
    "Murkrow": 20.0,
    "Slowking": 10.0,
    "Slowking(Galarian Form)": 10.0,
    "Misdreavus": 30.0,
    "Unown": 30.0,
    "Wobbuffet": 25.0,
    "Girafarig": 30.0,
    "Pineco": 40.0,
    "Forretress": 15.0,
    "Dunsparce": 30.0,
    "Gligar": 20.0,
    "Steelix": 10.0,
    "Snubbull": 40.0,
    "Granbull": 15.0,
    "Qwilfish": 30.0,
    "Qwilfish(Hisuian Form)": 30.0,
    "Scizor": 5.0,
    "Shuckle": 30.0,
    "Heracross": 30.0,
    "Sneasel": 20.0,
    "Sneasel(Hisuian Form)": 20.0,
    "Teddiursa": 50.0,
    "Ursaring": 15.0,
    "Slugma": 30.0,
    "Magcargo": 12.5,
    "Swinub": 30.0,
    "Piloswine": 12.5,
    "Corsola": 30.0,
    "Remoraid": 50.0,
    "Octillery": 15.0,
    "Delibird": 20.0,
    "Mantine": 30.0,
    "Skarmory": 20.0,
    "Houndour": 40.0,
    "Houndoom": 15.0,
    "Kingdra": 10.0,
    "Phanpy": 50.0,
    "Donphan": 12.5,
    "Porygon2": 5.0,
    "Stantler": 30.0,
    "Smeargle": 25.0,
    "Tyrogue": 25.0,
    "Hitmontop": 10.0,
    "Smoochum": 25.0,
    "Elekid": 25.0,
    "Magby": 25.0,
    "Miltank": 20.0,
    "Blissey": 5.0,
    "Raikou": 2.0,
    "Entei": 2.0,
    "Suicune": 2.0,
    "Larvitar": 40.0,
    "Pupitar": 10.0,
    "Tyranitar": 5.0,
    "Lugia": 2.0,
    "Ho-Oh": 2.0,
    "Celebi": 10000.0,
    "Treecko": 20.0,
    "Grovyle": 10.0,
    "Sceptile": 5.0,
    "Torchic": 20.0,
    "Combusken": 10.0,
    "Blaziken": 5.0,
    "Mudkip": 20.0,
    "Marshtomp": 10.0,
    "Swampert": 5.0,
    "Poochyena": 50.0,
    "Mightyena": 20.0,
    "Zigzagoon": 50.0,
    "Zigzagoon(Galarian Form)": 50.0,
    "Linoone": 20.0,
    "Linoone(Galarian Form)": 20.0,
    "Wurmple": 50.0,
    "Silcoon": 25.0,
    "Beautifly": 12.5,
    "Cascoon": 25.0,
    "Dustox": 12.5,
    "Lotad": 50.0,
    "Lombre": 25.0,
    "Ludicolo": 12.5,
    "Seedot": 50.0,
    "Nuzleaf": 25.0,
    "Shiftry": 12.5,
    "Taillow": 50.0,
    "Swellow": 20.0,
    "Wingull": 50.0,
    "Pelipper": 20.0,
    "Ralts": 40.0,
    "Kirlia": 10.0,
    "Gardevoir": 5.0,
    "Surskit": 50.0,
    "Masquerain": 20.0,
    "Shroomish": 50.0,
    "Breloom": 20.0,
    "Slakoth": 40.0,
    "Vigoroth": 10.0,
    "Slaking": 5.0,
    "Nincada": 20.0,
    "Ninjask": 10.0,
    "Shedinja": 5.0,
    "Whismur": 50.0,
    "Loudred": 25.0,
    "Exploud": 12.5,
    "Makuhita": 50.0,
    "Hariyama": 20.0,
    "Azurill": 10.0,
    "Nosepass": 20.0,
    "Skitty": 50.0,
    "Delcatty": 20.0,
    "Sableye": 20.0,
    "Mawile": 50.0,
    "Aron": 50.0,
    "Lairon": 25.0,
    "Aggron": 12.5,
    "Meditite": 50.0,
    "Medicham": 20.0,
    "Electrike": 50.0,
    "Manectric": 20.0,
    "Plusle": 30.0,
    "Minun": 30.0,
    "Volbeat": 30.0,
    "Illumise": 30.0,
    "Roselia": 30.0,
    "Gulpin": 50.0,
    "Swalot": 20.0,
    "Carvanha": 50.0,
    "Sharpedo": 20.0,
    "Wailmer": 50.0,
    "Wailord": 20.0,
    "Numel": 50.0,
    "Camerupt": 20.0,
    "Torkoal": 30.0,
    "Spoink": 50.0,
    "Grumpig": 20.0,
    "Spinda": 30.0,
    "Trapinch": 40.0,
    "Vibrava": 10.0,
    "Flygon": 5.0,
    "Cacnea": 50.0,
    "Cacturne": 20.0,
    "Swablu": 50.0,
    "Altaria": 20.0,
    "Zangoose": 30.0,
    "Seviper": 30.0,
    "Lunatone": 30.0,
    "Solrock": 30.0,
    "Barboach": 50.0,
    "Whiscash": 20.0,
    "Corphish": 50.0,
    "Crawdaunt": 20.0,
    "Baltoy": 50.0,
    "Claydol": 20.0,
    "Lileep": 50.0,
    "Cradily": 20.0,
    "Anorith": 50.0,
    "Armaldo": 20.0,
    "Feebas": 70.0,
    "Milotic": 10.0,
    "Castform": 30.0,
    "Castform(Rainy Form)": 30.0,
    "Castform(Snowy Form)": 30.0,
    "Castform(Sunny Form)": 30.0,
    "Kecleon": 30.0,
    "Shuppet": 40.0,
    "Banette": 20.0,
    "Duskull": 40.0,
    "Dusclops": 20.0,
    "Tropius": 30.0,
    "Chimecho": 30.0,
    "Absol": 50.0,
    "Wynaut": 30.0,
    "Snorunt": 50.0,
    "Glalie": 20.0,
    "Spheal": 50.0,
    "Sealeo": 25.0,
    "Walrein": 12.5,
    "Clamperl": 50.0,
    "Huntail": 20.0,
    "Gorebyss": 20.0,
    "Relicanth": 90.0,
    "Luvdisc": 30.0,
    "Bagon": 40.0,
    "Shelgon": 10.0,
    "Salamence": 5.0,
    "Beldum": 40.0,
    "Metang": 10.0,
    "Metagross": 5.0,
    "Regirock": 2.0,
    "Regice": 2.0,
    "Registeel": 2.0,
    "Latias": 2.0,
    "Latios": 2.0,
    "Kyogre": 2.0,
    "Groudon": 2.0,
    "Rayquaza": 2.0,
    "Jirachi": 10000.0,
    "Deoxys(Normal Forme)": 2.0,
    "Deoxys(Attack Forme)": 2.0,
    "Deoxys(Defense Forme)": 6.0,
    "Deoxys(Speed Forme)": 2.0,
    "Turtwig": 20.0,
    "Grotle": 10.0,
    "Torterra": 5.0,
    "Chimchar": 20.0,
    "Monferno": 10.0,
    "Infernape": 5.0,
    "Piplup": 20.0,
    "Prinplup": 10.0,
    "Empoleon": 5.0,
    "Starly": 50.0,
    "Staravia": 25.0,
    "Staraptor": 12.5,
    "Bidoof": 50.0,
    "Bibarel": 20.0,
    "Kricketot": 50.0,
    "Kricketune": 20.0,
    "Shinx": 50.0,
    "Luxio": 25.0,
    "Luxray": 12.5,
    "Budew": 10.0,
    "Roserade": 15.0,
    "Cranidos": 50.0,
    "Rampardos": 20.0,
    "Shieldon": 50.0,
    "Bastiodon": 20.0,
    "Burmy(Plant Cloak)": 50.0,
    "Burmy(Sandy Cloak)": 50.0,
    "Burmy(Trash Cloak)": 50.0,
    "Wormadam(Plant Cloak)": 15.0,
    "Wormadam(Sandy Cloak)": 15.0,
    "Wormadam(Trash Cloak)": 15.0,
    "Mothim": 15.0,
    "Combee": 15.0,
    "Vespiquen": 15.0,
    "Pachirisu": 30.0,
    "Buizel": 50.0,
    "Floatzel": 20.0,
    "Cherubi": 50.0,
    "Cherrim(Overcast Form)": 10.0,
    "Cherrim(Sunshine Form)": 10.0,
    "Shellos(West Sea)": 50.0,
    "Shellos(East Sea)": 50.0,
    "Gastrodon(West Sea)": 20.0,
    "Gastrodon(East Sea)": 20.0,
    "Ambipom": 20.0,
    "Drifloon": 40.0,
    "Drifblim": 20.0,
    "Buneary": 50.0,
    "Lopunny": 20.0,
    "Mismagius": 10.0,
    "Honchkrow": 10.0,
    "Glameow": 40.0,
    "Purugly": 15.0,
    "Chingling": 10.0,
    "Stunky": 50.0,
    "Skuntank": 20.0,
    "Bronzor": 50.0,
    "Bronzong": 20.0,
    "Bonsly": 10.0,
    "Mime Jr.": 10.0,
    "Happiny": 10.0,
    "Chatot": 30.0,
    "Spiritomb": 10.0,
    "Gible": 40.0,
    "Gabite": 10.0,
    "Garchomp": 5.0,
    "Munchlax": 10.0,
    "Riolu": 25.0,
    "Lucario": 10.0,
    "Hippopotas": 40.0,
    "Hippowdon": 15.0,
    "Skorupi": 40.0,
    "Drapion": 15.0,
    "Croagunk": 40.0,
    "Toxicroak": 15.0,
    "Carnivine": 90.0,
    "Finneon": 50.0,
    "Lumineon": 20.0,
    "Mantyke": 10.0,
    "Snover": 30.0,
    "Abomasnow": 12.5,
    "Weavile": 15.0,
    "Magnezone": 12.5,
    "Lickilicky": 15.0,
    "Rhyperior": 5.0,
    "Tangrowth": 15.0,
    "Electivire": 15.0,
    "Magmortar": 15.0,
    "Togekiss": 1.0,
    "Yanmega": 17.5,
    "Leafeon": 12.5,
    "Glaceon": 12.5,
    "Gliscor": 12.5,
    "Mamoswine": 5.0,
    "Porygon-Z": 5.0,
    "Gallade": 50.0,
    "Probopass": 10.0,
    "Dusknoir": 10.0,
    "Froslass": 20.0,
    "Rotom": 30.0,
    "Rotom(Fan Rotom)": 30.0,
    "Rotom(Frost Rotom)": 30.0,
    "Rotom(Heat Rotom)": 30.0,
    "Rotom(Mow Rotom)": 30.0,
    "Rotom(Wash Rotom)": 30.0,
    "Uxie": 2.0,
    "Mesprit": 2.0,
    "Azelf": 2.0,
    "Dialga": 2.0,
    "Palkia": 2.0,
    "Heatran": 2.0,
    "Regigigas": 2.0,
    "Giratina(Altered Forme)": 2.0,
    "Giratina(Origin Forme)": 2.0,
    "Cresselia": 2.0,
    "Phione": 2.0,
    "Manaphy": 2.0,
    "Darkrai": 2.0,
    "Shaymin(Land Forme)": 10000.0,
    "Shaymin(Sky Forme)": 10000.0,
    "Arceus": 2.0,
    "Victini": 10000.0,
    "Snivy": 20.0,
    "Servine": 10.0,
    "Serperior": 5.0,
    "Tepig": 20.0,
    "Pignite": 10.0,
    "Emboar": 5.0,
    "Oshawott": 20.0,
    "Dewott": 10.0,
    "Samurott": 5.0,
    "Patrat": 50.0,
    "Watchog": 20.0,
    "Lillipup": 50.0,
    "Herdier": 25.0,
    "Stoutland": 12.5,
    "Purrloin": 50.0,
    "Liepard": 20.0,
    "Pansage": 50.0,
    "Simisage": 20.0,
    "Pansear": 50.0,
    "Simisear": 20.0,
    "Panpour": 50.0,
    "Simipour": 20.0,
    "Munna": 50.0,
    "Musharna": 20.0,
    "Pidove": 50.0,
    "Tranquill": 25.0,
    "Unfezant": 12.5,
    "Blitzle": 30.0,
    "Zebstrika": 10.0,
    "Roggenrola": 50.0,
    "Boldore": 25.0,
    "Gigalith": 12.5,
    "Woobat": 50.0,
    "Swoobat": 20.0,
    "Drilbur": 50.0,
    "Excadrill": 20.0,
    "Audino": 5.0,
    "Timburr": 50.0,
    "Gurdurr": 25.0,
    "Conkeldurr": 12.5,
    "Tympole": 50.0,
    "Palpitoad": 25.0,
    "Seismitoad": 12.5,
    "Throh": 20.0,
    "Sawk": 20.0,
    "Sewaddle": 50.0,
    "Swadloon": 25.0,
    "Leavanny": 12.5,
    "Venipede": 30.0,
    "Whirlipede": 15.0,
    "Scolipede": 20.0,
    "Cottonee": 30.0,
    "Whimsicott": 15.0,
    "Petilil": 30.0,
    "Lilligant": 15.0,
    "Basculin(Red-Striped Form)": 20.0,
    "Basculin(Blue-Striped Form)": 20.0,
    "Sandile": 50.0,
    "Krokorok": 25.0,
    "Krookodile": 12.5,
    "Darumaka": 30.0,
    "Darumaka(Galarian Form)": 30.0,
    "Darmanitan": 10.0,
    "Darmanitan(Zen Mode)": 10.0,
    "Darmanitan(Galarian Form)": 10.0,
    "Darmanitan(Galarian Form Zen Mode)": 10.0,
    "Maractus": 20.0,
    "Dwebble": 30.0,
    "Crustle": 10.0,
    "Scraggy": 30.0,
    "Scrafty": 10.0,
    "Sigilyph": 20.0,
    "Yamask": 30.0,
    "Yamask(Galarian Form)": 30.0,
    "Cofagrigus": 10.0,
    "Tirtouga": 30.0,
    "Carracosta": 10.0,
    "Archen": 30.0,
    "Archeops": 10.0,
    "Trubbish": 30.0,
    "Garbodor": 10.0,
    "Zorua": 30.0,
    "Zoroark": 10.0,
    "Minccino": 30.0,
    "Cinccino": 10.0,
    "Gothita": 50.0,
    "Gothorita": 25.0,
    "Gothitelle": 12.5,
    "Solosis": 50.0,
    "Duosion": 25.0,
    "Reuniclus": 12.5,
    "Ducklett": 50.0,
    "Swanna": 40.0,
    "Vanillite": 40.0,
    "Vanillish": 5.0,
    "Vanilluxe": 12.5,
    "Deerling(Spring Form)": 30.0,
    "Deerling(Summer Form)": 30.0,
    "Deerling(Autumn Form)": 30.0,
    "Deerling(Winter Form)": 30.0,
    "Sawsbuck(Spring Form)": 15.0,
    "Sawsbuck(Summer Form)": 15.0,
    "Sawsbuck(Autumn Form)": 15.0,
    "Sawsbuck(Winter Form)": 20.0,
    "Emolga": 20.0,
    "Karrablast": 30.0,
    "Escavalier": 12.5,
    "Foongus": 30.0,
    "Amoonguss": 12.5,
    "Frillish": 30.0,
    "Jellicent": 12.5,
    "Alomomola": 20.0,
    "Joltik": 30.0,
    "Galvantula": 12.5,
    "Ferroseed": 30.0,
    "Ferrothorn": 12.5,
    "Klink": 40.0,
    "Klang": 10.0,
    "Klinklang": 5.0,
    "Tynamo": 40.0,
    "Eelektrik": 10.0,
    "Eelektross": 5.0,
    "Elgyem": 30.0,
    "Beheeyem": 15.0,
    "Litwick": 40.0,
    "Lampent": 10.0,
    "Chandelure": 5.0,
    "Axew": 40.0,
    "Fraxure": 10.0,
    "Haxorus": 5.0,
    "Cubchoo": 30.0,
    "Beartic": 15.0,
    "Cryogonal": 20.0,
    "Shelmet": 30.0,
    "Accelgor": 15.0,
    "Stunfisk": 20.0,
    "Stunfisk(Galarian Form)": 20.0,
    "Mienfoo": 30.0,
    "Mienshao": 15.0,
    "Druddigon": 20.0,
    "Golett": 30.0,
    "Golurk": 15.0,
    "Pawniard": 30.0,
    "Bisharp": 15.0,
    "Bouffalant": 20.0,
    "Rufflet": 30.0,
    "Braviary": 15.0,
    "Braviary(Hisuian Form)": 15.0,
    "Vullaby": 30.0,
    "Mandibuzz": 15.0,
    "Heatmor": 20.0,
    "Durant": 20.0,
    "Deino": 40.0,
    "Zweilous": 10.0,
    "Hydreigon": 5.0,
    "Larvesta": 70.0,
    "Volcarona": 10.0,
    "Cobalion": 2.0,
    "Terrakion": 2.0,
    "Virizion": 2.0,
    "Tornadus(Incarnate Forme)": 2.0,
    "Tornadus(Therian Forme)": 2.0,
    "Thundurus(Incarnate Forme)": 2.0,
    "Thundurus(Therian Forme)": 2.0,
    "Reshiram": 2.0,
    "Zekrom": 2.0,
    "Landorus(Incarnate Forme)": 2.0,
    "Landorus(Therian Forme)": 2.0,
    "Kyurem": 2.0,
    "Kyurem(Black Kyurem)": 2.0,
    "Kyurem(White Kyurem)": 2.0,
    "Keldeo": 2.0,
    "Keldeo(Resolute Form)": 2.0,
    "Meloetta(Aria Forme)": 10000.0,
    "Meloetta(Pirouette Forme)": 10000.0,
    "Genesect": 2.0,
    "Chespin": 20.0,
    "Quilladin": 10.0,
    "Chesnaught": 5.0,
    "Fennekin": 20.0,
    "Braixen": 10.0,
    "Delphox": 5.0,
    "Froakie": 20.0,
    "Frogadier": 10.0,
    "Greninja": 5.0,
    "Bunnelby": 50.0,
    "Diggersby": 20.0,
    "Fletchling": 50.0,
    "Fletchinder": 25.0,
    "Talonflame": 12.5,
    "Scatterbug": 50.0,
    "Spewpa": 25.0,
    "Vivillon": 12.5,
    "Litleo": 50.0,
    "Pyroar": 20.0,
    "Flab\u00e9b\u00e9": 50.0,
    "Floette": 25.0,
    "Florges": 12.5,
    "Skiddo": 20.0,
    "Gogoat": 20.0,
    "Pancham": 30.0,
    "Pangoro": 10.0,
    "Furfrou": 20.0,
    "Espurr": 40.0,
    "Meowstic": 20.0,
    "Honedge": 20.0,
    "Doublade": 20.0,
    "Aegislash": 20.0,
    "Spritzee": 20.0,
    "Aromatisse": 20.0,
    "Swirlix": 20.0,
    "Slurpuff": 20.0,
    "Inkay": 20.0,
    "Malamar": 20.0,
    "Binacle": 20.0,
    "Barbaracle": 20.0,
    "Skrelp": 20.0,
    "Dragalge": 20.0,
    "Clauncher": 20.0,
    "Clawitzer": 20.0,
    "Helioptile": 20.0,
    "Heliolisk": 20.0,
    "Tyrunt": 20.0,
    "Tyrantrum": 20.0,
    "Amaura": 20.0,
    "Aurorus": 20.0,
    "Sylveon": 12.5,
    "Hawlucha": 20.0,
    "Dedenne": 20.0,
    "Carbink": 20.0,
    "Goomy": 40.0,
    "Sliggoo": 10.0,
    "Goodra": 5.0,
    "Klefki": 20.0,
    "Phantump": 30.0,
    "Trevenant": 15.0,
    "Pumpkaboo": 30.0,
    "Gourgeist": 12.5,
    "Bergmite": 20.0,
    "Avalugg": 20.0,
    "Noibat": 40.0,
    "Noivern": 15.0,
    "Xerneas": 2.0,
    "Yveltal": 2.0,
    "Zygarde": 2.0,
    "Diancie": 2.0,
    "Hoopa": 100.0,
    "Hoopa(Unbound)": 100.0,
    "Volcanion": 2.0,
    "Rowlet": 20.0,
    "Dartrix": 10.0,
    "Decidueye": 5.0,
    "Litten": 20.0,
    "Torracat": 10.0,
    "Incineroar": 5.0,
    "Popplio": 20.0,
    "Brionne": 10.0,
    "Primarina": 5.0,
    "Pikipek": 50.0,
    "Trumbeak": 25.0,
    "Toucannon": 12.5,
    "Yungoos": 50.0,
    "Gumshoos": 20.0,
    "Grubbin": 50.0,
    "Charjabug": 25.0,
    "Vikavolt": 12.5,
    "Crabrawler": 20.0,
    "Crabominable": 20.0,
    "Oricorio": 20.0,
    "Cutiefly": 50.0,
    "Ribombee": 15.0,
    "Rockruff": 20.0,
    "Lycanroc": 20.0,
    "Wishiwashi": 20.0,
    "Mareanie": 20.0,
    "Toxapex": 20.0,
    "Mudbray": 20.0,
    "Mudsdale": 20.0,
    "Dewpider": 20.0,
    "Araquanid": 20.0,
    "Fomantis": 20.0,
    "Lurantis": 20.0,
    "Morelull": 20.0,
    "Shiinotic": 20.0,
    "Salandit": 20.0,
    "Salazzle": 20.0,
    "Stufful": 50.0,
    "Bewear": 20.0,
    "Bounsweet": 50.0,
    "Steenee": 25.0,
    "Tsareena": 12.5,
    "Comfey": 20.0,
    "Oranguru": 20.0,
    "Passimian": 20.0,
    "Wimpod": 50.0,
    "Golisopod": 20.0,
    "Sandygast": 20.0,
    "Palossand": 20.0,
    "Pyukumuku": 20.0,
    "Type: Null": 30.0,
    "Silvally": 30.0,
    "Minior": 20.0,
    "Komala": 20.0,
    "Turtonator": 20.0,
    "Togedemaru": 20.0,
    "Mimikyu": 20.0,
    "Bruxish": 20.0,
    "Drampa": 20.0,
    "Dhelmise": 20.0,
    "Jangmo-o": 40.0,
    "Hakamo-o": 10.0,
    "Kommo-o": 5.0,
    "Tapu Koko": 2.0,
    "Tapu Lele": 2.0,
    "Tapu Bulu": 2.0,
    "Tapu Fini": 2.0,
    "Cosmog": 90.0,
    "Cosmoem": 50.0,
    "Solgaleo": 2.0,
    "Lunala": 2.0,
    "Nihilego": 2.0,
    "Buzzwole": 2.0,
    "Pheromosa": 2.0,
    "Xurkitree": 2.0,
    "Celesteela": 2.0,
    "Kartana": 2.0,
    "Guzzlord": 2.0,
    "Necrozma": 2.0,
    "Magearna": 2.0,
    "Marshadow": 2.0,
    "Poipole": 30.0,
    "Naganadel": 30.0,
    "Stakataka": 2.0,
    "Blacephalon": 2.0,
    "Zeraora": 2.0,
    "Meltan": 30.0,
    "Melmetal": 30.0,
    "Grookey": 20.0,
    "Thwackey": 10.0,
    "Rillaboom": 6.0,
    "Scorbunny": 20.0,
    "Raboot": 10.0,
    "Cinderace": 5.0,
    "Drizzile": 10.0,
    "Inteleon": 5.0,
    "Skwovet": 60.0,
    "Greedent": 30.0,
    "Rookidee": 50.0,
    "Corvisquire": 20.0,
    "Corviknight": 12.5,
    "Blipbug": 50.0,
    "Dottler": 25.0,
    "Orbeetle": 12.5,
    "Nickit": 50.0,
    "Thievul": 20.0,
    "Gossifleur": 50.0,
    "Eldegoss": 20.0,
    "Wooloo": 50.0,
    "Dubwool": 20.0,
    "Chewtle": 50.0,
    "Drednaw": 20.0,
    "Yamper": 50.0,
    "Boltund": 20.0,
    "Rolycoly": 50.0,
    "Carkol": 25.0,
    "Coalossal": 12.5,
    "Applin": 40.0,
    "Flapple": 10.0,
    "Appletun": 10.0,
    "Silicobra": 50.0,
    "Sandaconda": 20.0,
    "Cramorant": 20.0,
    "Arrokuda": 50.0,
    "Barraskewda": 20.0,
    "Toxel": 25.0,
    "Toxtricity": 10.0,
    "Sizzlipede": 50.0,
    "Centiskorch": 20.0,
    "Clobbopus": 50.0,
    "Grapploct": 20.0,
    "Sinistea": 50.0,
    "Polteageist": 20.0,
    "Hatenna": 50.0,
    "Hattrem": 25.0,
    "Hatterene": 50.0,
    "Impidimp": 50.0,
    "Morgrem": 25.0,
    "Grimmsnarl": 12.5,
    "Obstagoon": 4.0,
    "Perrserker": 10.0,
    "Cursola": 10.0,
    "Sirfetch'd": 10.0,
    "Mr. Rime": 30.0,
    "Runerigus": 10.0,
    "Milcery": 50.0,
    "Alcremie": 20.0,
    "Falinks": 20.0,
    "Pincurchin": 20.0,
    "Snom": 50.0,
    "Frosmoth": 20.0,
    "Stonjourner": 20.0,
    "Eiscue": 20.0,
    "Indeedee": 20.0,
    "Morpeko": 20.0,
    "Cufant": 50.0,
    "Copperajah": 20.0,
    "Dracozolt": 20.0,
    "Arctozolt": 20.0,
    "Dracovish": 20.0,
    "Arctovish": 20.0,
    "Duraludon": 20.0,
    "Dreepy": 40.0,
    "Drakloak": 10.0,
    "Dragapult": 5.0,
    "Zacian": 2.0,
    "Zamazenta": 2.0,
    "Eternatus": 2.0,
    "Kubfu": 2.0,
    "Urshifu": 2.0,
    "Zarude": 10.0,
    "Regieleki": 2.0,
    "Regidrago": 2.0,
    "Glastrier": 2.0,
    "Spectrier": 2.0,
    "Calyrex": 2.0,
    "Calyrex(Ice Rider)": 2.0,
    "Calyrex(Shadow Rider)": 2.0,
    "Sneasler": 30.0,
    "Overqwil": 30.0
}
const baseStats = {
    "Bulbasaur": [
        128,
        118,
        111
    ],
    "Ivysaur": [
        155,
        151,
        143
    ],
    "Venusaur": [
        190,
        198,
        189
    ],
    "VenusaurMega Venusaur": [
        190,
        241,
        246
    ],
    "Charmander": [
        118,
        116,
        93
    ],
    "Charmeleon": [
        151,
        158,
        126
    ],
    "Charizard": [
        186,
        223,
        173
    ],
    "CharizardMega Charizard X": [
        186,
        273,
        213
    ],
    "CharizardMega Charizard Y": [
        186,
        319,
        212
    ],
    "Squirtle": [
        127,
        94,
        121
    ],
    "Wartortle": [
        153,
        126,
        155
    ],
    "Blastoise": [
        188,
        171,
        207
    ],
    "BlastoiseMega Blastoise": [
        188,
        264,
        237
    ],
    "Caterpie": [
        128,
        55,
        55
    ],
    "Metapod": [
        137,
        45,
        80
    ],
    "Butterfree": [
        155,
        167,
        137
    ],
    "Weedle": [
        120,
        63,
        50
    ],
    "Kakuna": [
        128,
        46,
        75
    ],
    "Beedrill": [
        163,
        169,
        130
    ],
    "BeedrillMega Beedrill": [
        163,
        303,
        148
    ],
    "Pidgey": [
        120,
        85,
        73
    ],
    "Pidgeotto": [
        160,
        117,
        105
    ],
    "Pidgeot": [
        195,
        166,
        154
    ],
    "PidgeotMega Pidgeot": [
        195,
        280,
        175
    ],
    "Rattata": [
        102,
        103,
        70
    ],
    "RattataAlolan Form": [
        102,
        103,
        70
    ],
    "Raticate": [
        146,
        161,
        139
    ],
    "RaticateAlolan Form": [
        181,
        135,
        154
    ],
    "Spearow": [
        120,
        112,
        60
    ],
    "Fearow": [
        163,
        182,
        133
    ],
    "Ekans": [
        111,
        110,
        97
    ],
    "Arbok": [
        155,
        167,
        153
    ],
    "Pikachu": [
        111,
        112,
        96
    ],
    "Raichu": [
        155,
        193,
        151
    ],
    "RaichuAlolan Form": [
        155,
        201,
        154
    ],
    "Sandshrew": [
        137,
        126,
        120
    ],
    "SandshrewAlolan Form": [
        137,
        125,
        129
    ],
    "Sandslash": [
        181,
        182,
        175
    ],
    "SandslashAlolan Form": [
        181,
        177,
        195
    ],
    "Nidoran\u2640": [
        146,
        86,
        89
    ],
    "Nidorina": [
        172,
        117,
        120
    ],
    "Nidoqueen": [
        207,
        180,
        173
    ],
    "Nidoran\u2642": [
        130,
        105,
        76
    ],
    "Nidorino": [
        156,
        137,
        111
    ],
    "Nidoking": [
        191,
        204,
        156
    ],
    "Clefairy": [
        172,
        107,
        108
    ],
    "Clefable": [
        216,
        178,
        162
    ],
    "Vulpix": [
        116,
        96,
        109
    ],
    "VulpixAlolan Form": [
        116,
        96,
        109
    ],
    "Ninetales": [
        177,
        169,
        190
    ],
    "NinetalesAlolan Form": [
        177,
        170,
        193
    ],
    "Jigglypuff": [
        251,
        80,
        41
    ],
    "Wigglytuff": [
        295,
        156,
        90
    ],
    "Zubat": [
        120,
        83,
        73
    ],
    "Golbat": [
        181,
        161,
        150
    ],
    "Oddish": [
        128,
        131,
        112
    ],
    "Gloom": [
        155,
        153,
        136
    ],
    "Vileplume": [
        181,
        202,
        167
    ],
    "Paras": [
        111,
        121,
        99
    ],
    "Parasect": [
        155,
        165,
        146
    ],
    "Venonat": [
        155,
        100,
        100
    ],
    "Venomoth": [
        172,
        179,
        143
    ],
    "Diglett": [
        67,
        109,
        78
    ],
    "DiglettAlolan Form": [
        67,
        108,
        81
    ],
    "Dugtrio": [
        111,
        167,
        136
    ],
    "DugtrioAlolan Form": [
        111,
        201,
        142
    ],
    "Meowth": [
        120,
        92,
        78
    ],
    "MeowthAlolan Form": [
        120,
        99,
        78
    ],
    "MeowthGalarian Form": [
        137,
        115,
        92
    ],
    "Persian": [
        163,
        150,
        136
    ],
    "PersianAlolan Form": [
        163,
        158,
        136
    ],
    "Psyduck": [
        137,
        122,
        95
    ],
    "Golduck": [
        190,
        191,
        162
    ],
    "Mankey": [
        120,
        148,
        82
    ],
    "Primeape": [
        163,
        207,
        138
    ],
    "Growlithe": [
        146,
        136,
        93
    ],
    "GrowlitheHisuian From": [
        155,
        142,
        92
    ],
    "Arcanine": [
        207,
        227,
        166
    ],
    "ArcanineHisuian Form": [
        216,
        232,
        165
    ],
    "Poliwag": [
        120,
        101,
        82
    ],
    "Poliwhirl": [
        163,
        130,
        123
    ],
    "Poliwrath": [
        207,
        182,
        184
    ],
    "Abra": [
        93,
        195,
        82
    ],
    "Kadabra": [
        120,
        232,
        117
    ],
    "Alakazam": [
        146,
        271,
        167
    ],
    "AlakazamMega Alakazam": [
        146,
        367,
        207
    ],
    "Machop": [
        172,
        137,
        82
    ],
    "Machoke": [
        190,
        177,
        125
    ],
    "Machamp": [
        207,
        234,
        159
    ],
    "Bellsprout": [
        137,
        139,
        61
    ],
    "Weepinbell": [
        163,
        172,
        92
    ],
    "Victreebel": [
        190,
        207,
        135
    ],
    "Tentacool": [
        120,
        97,
        149
    ],
    "Tentacruel": [
        190,
        166,
        209
    ],
    "Geodude": [
        120,
        132,
        132
    ],
    "GeodudeAlolan Form": [
        120,
        132,
        132
    ],
    "Graveler": [
        146,
        164,
        164
    ],
    "GravelerAlolan Form": [
        146,
        164,
        164
    ],
    "Golem": [
        190,
        211,
        198
    ],
    "GolemAlolan Form": [
        190,
        211,
        198
    ],
    "Ponyta": [
        137,
        170,
        127
    ],
    "PonytaGalarian Form": [
        137,
        170,
        127
    ],
    "Rapidash": [
        163,
        207,
        162
    ],
    "RapidashGalarian Form": [
        163,
        207,
        162
    ],
    "Slowpoke": [
        207,
        109,
        98
    ],
    "Slowbro": [
        216,
        177,
        180
    ],
    "SlowbroMega Slowbro": [
        216,
        224,
        259
    ],
    "SlowbroGalarian Form": [
        216,
        182,
        156
    ],
    "Magnemite": [
        93,
        165,
        121
    ],
    "Magneton": [
        137,
        223,
        169
    ],
    "Farfetch'd": [
        141,
        124,
        115
    ],
    "Farfetch'dGalarian Form": [
        141,
        174,
        114
    ],
    "Doduo": [
        111,
        158,
        83
    ],
    "Dodrio": [
        155,
        218,
        140
    ],
    "Seel": [
        163,
        85,
        121
    ],
    "Dewgong": [
        207,
        139,
        177
    ],
    "Grimer": [
        190,
        135,
        90
    ],
    "GrimerAlolan Form": [
        190,
        135,
        90
    ],
    "Muk": [
        233,
        190,
        172
    ],
    "MukAlolan Form": [
        233,
        190,
        172
    ],
    "Shellder": [
        102,
        116,
        134
    ],
    "Cloyster": [
        137,
        186,
        256
    ],
    "Gastly": [
        102,
        186,
        67
    ],
    "Haunter": [
        128,
        223,
        107
    ],
    "Gengar": [
        155,
        261,
        149
    ],
    "GengarMega Gengar": [
        155,
        349,
        199
    ],
    "Onix": [
        111,
        85,
        232
    ],
    "Drowzee": [
        155,
        89,
        136
    ],
    "Hypno": [
        198,
        144,
        193
    ],
    "Krabby": [
        102,
        181,
        124
    ],
    "Kingler": [
        146,
        240,
        181
    ],
    "Voltorb": [
        120,
        109,
        111
    ],
    "VoltorbHisuian Form": [
        120,
        109,
        111
    ],
    "Electrode": [
        155,
        173,
        173
    ],
    "ElectrodeHisuian Form": [
        155,
        176,
        176
    ],
    "Exeggcute": [
        155,
        107,
        125
    ],
    "Exeggutor": [
        216,
        233,
        149
    ],
    "ExeggutorAlolan Form": [
        216,
        230,
        153
    ],
    "Cubone": [
        137,
        90,
        144
    ],
    "Marowak": [
        155,
        144,
        186
    ],
    "MarowakAlolan Form": [
        155,
        144,
        186
    ],
    "Hitmonlee": [
        137,
        224,
        181
    ],
    "Hitmonchan": [
        137,
        193,
        197
    ],
    "Lickitung": [
        207,
        108,
        137
    ],
    "Koffing": [
        120,
        119,
        141
    ],
    "Weezing": [
        163,
        174,
        197
    ],
    "WeezingGalarian Form": [
        163,
        174,
        197
    ],
    "Rhyhorn": [
        190,
        140,
        127
    ],
    "Rhydon": [
        233,
        222,
        171
    ],
    "Chansey": [
        487,
        60,
        128
    ],
    "Tangela": [
        163,
        183,
        169
    ],
    "Kangaskhan": [
        233,
        181,
        165
    ],
    "KangaskhanMega Kangaskhan": [
        233,
        246,
        210
    ],
    "Horsea": [
        102,
        129,
        103
    ],
    "Seadra": [
        146,
        187,
        156
    ],
    "Goldeen": [
        128,
        123,
        110
    ],
    "Seaking": [
        190,
        175,
        147
    ],
    "Staryu": [
        102,
        137,
        112
    ],
    "Starmie": [
        155,
        210,
        184
    ],
    "Mr. Mime": [
        120,
        192,
        205
    ],
    "Mr. MimeGalarian Form": [
        137,
        183,
        169
    ],
    "Scyther": [
        172,
        218,
        170
    ],
    "Jynx": [
        163,
        223,
        151
    ],
    "Electabuzz": [
        163,
        198,
        158
    ],
    "Magmar": [
        163,
        206,
        154
    ],
    "Pinsir": [
        163,
        238,
        182
    ],
    "PinsirMega Pinsir": [
        163,
        305,
        231
    ],
    "Tauros": [
        181,
        198,
        183
    ],
    "Magikarp": [
        85,
        29,
        85
    ],
    "Gyarados": [
        216,
        237,
        186
    ],
    "GyaradosMega Gyarados": [
        216,
        292,
        247
    ],
    "Lapras": [
        277,
        165,
        174
    ],
    "Ditto": [
        134,
        91,
        91
    ],
    "Eevee": [
        146,
        104,
        114
    ],
    "Vaporeon": [
        277,
        205,
        161
    ],
    "Jolteon": [
        163,
        232,
        182
    ],
    "Flareon": [
        163,
        246,
        179
    ],
    "Porygon": [
        163,
        153,
        136
    ],
    "Omanyte": [
        111,
        155,
        153
    ],
    "Omastar": [
        172,
        207,
        201
    ],
    "Kabuto": [
        102,
        148,
        140
    ],
    "Kabutops": [
        155,
        220,
        186
    ],
    "Aerodactyl": [
        190,
        221,
        159
    ],
    "AerodactylMega Aerodactyl": [
        190,
        292,
        210
    ],
    "Snorlax": [
        330,
        190,
        169
    ],
    "Articuno": [
        207,
        192,
        236
    ],
    "ArticunoGalarian Form": [
        207,
        250,
        197
    ],
    "Zapdos": [
        207,
        253,
        185
    ],
    "ZapdosGalarian Form": [
        207,
        252,
        189
    ],
    "Moltres": [
        207,
        251,
        181
    ],
    "MoltresGalarian Form": [
        207,
        202,
        231
    ],
    "Dratini": [
        121,
        119,
        91
    ],
    "Dragonair": [
        156,
        163,
        135
    ],
    "Dragonite": [
        209,
        263,
        198
    ],
    "Mewtwo": [
        214,
        300,
        182
    ],
    "MewtwoArmored Mewtwo": [
        214,
        182,
        278
    ],
    "Mew": [
        225,
        210,
        210
    ],
    "Chikorita": [
        128,
        92,
        122
    ],
    "Bayleef": [
        155,
        122,
        155
    ],
    "Meganium": [
        190,
        168,
        202
    ],
    "Cyndaquil": [
        118,
        116,
        93
    ],
    "Quilava": [
        151,
        158,
        126
    ],
    "Typhlosion": [
        186,
        223,
        173
    ],
    "TyphlosionHisuian Form": [
        177,
        238,
        172
    ],
    "Totodile": [
        137,
        117,
        109
    ],
    "Croconaw": [
        163,
        150,
        142
    ],
    "Feraligatr": [
        198,
        205,
        188
    ],
    "Sentret": [
        111,
        79,
        73
    ],
    "Furret": [
        198,
        148,
        125
    ],
    "Hoothoot": [
        155,
        67,
        88
    ],
    "Noctowl": [
        225,
        145,
        156
    ],
    "Ledyba": [
        120,
        72,
        118
    ],
    "Ledian": [
        146,
        107,
        179
    ],
    "Spinarak": [
        120,
        105,
        73
    ],
    "Ariados": [
        172,
        161,
        124
    ],
    "Crobat": [
        198,
        194,
        178
    ],
    "Chinchou": [
        181,
        106,
        97
    ],
    "Lanturn": [
        268,
        146,
        137
    ],
    "Pichu": [
        85,
        77,
        53
    ],
    "Cleffa": [
        137,
        75,
        79
    ],
    "Igglybuff": [
        207,
        69,
        32
    ],
    "Togepi": [
        111,
        67,
        116
    ],
    "Togetic": [
        146,
        139,
        181
    ],
    "Natu": [
        120,
        134,
        89
    ],
    "Xatu": [
        163,
        192,
        146
    ],
    "Mareep": [
        146,
        114,
        79
    ],
    "Flaaffy": [
        172,
        145,
        109
    ],
    "Ampharos": [
        207,
        211,
        169
    ],
    "AmpharosMega Ampharos": [
        207,
        294,
        203
    ],
    "Bellossom": [
        181,
        169,
        186
    ],
    "Marill": [
        172,
        37,
        93
    ],
    "Azumarill": [
        225,
        112,
        152
    ],
    "Sudowoodo": [
        172,
        167,
        176
    ],
    "Politoed": [
        207,
        174,
        179
    ],
    "Hoppip": [
        111,
        67,
        94
    ],
    "Skiploom": [
        146,
        91,
        120
    ],
    "Jumpluff": [
        181,
        118,
        183
    ],
    "Aipom": [
        146,
        136,
        112
    ],
    "Sunkern": [
        102,
        55,
        55
    ],
    "Sunflora": [
        181,
        185,
        135
    ],
    "Yanma": [
        163,
        154,
        94
    ],
    "Wooper": [
        146,
        75,
        66
    ],
    "WooperPaldean Form": [
        146,
        75,
        66
    ],
    "Quagsire": [
        216,
        152,
        143
    ],
    "Espeon": [
        163,
        261,
        175
    ],
    "Umbreon": [
        216,
        126,
        240
    ],
    "Murkrow": [
        155,
        175,
        87
    ],
    "Slowking": [
        216,
        177,
        180
    ],
    "SlowkingGalarian Form": [
        216,
        190,
        180
    ],
    "Misdreavus": [
        155,
        167,
        154
    ],
    "Unown": [
        134,
        136,
        91
    ],
    "Wobbuffet": [
        382,
        60,
        106
    ],
    "Girafarig": [
        172,
        182,
        133
    ],
    "Pineco": [
        137,
        108,
        122
    ],
    "Forretress": [
        181,
        161,
        205
    ],
    "Dunsparce": [
        225,
        131,
        128
    ],
    "Gligar": [
        163,
        143,
        184
    ],
    "Steelix": [
        181,
        148,
        272
    ],
    "SteelixMega Steelix": [
        181,
        212,
        327
    ],
    "Snubbull": [
        155,
        137,
        85
    ],
    "Granbull": [
        207,
        212,
        131
    ],
    "Qwilfish": [
        163,
        184,
        138
    ],
    "QwilfishHisuian Form": [
        163,
        184,
        151
    ],
    "Scizor": [
        172,
        236,
        181
    ],
    "ScizorMega Scizor": [
        172,
        279,
        250
    ],
    "Shuckle": [
        85,
        17,
        396
    ],
    "Heracross": [
        190,
        234,
        179
    ],
    "HeracrossMega Heracross": [
        190,
        334,
        223
    ],
    "Sneasel": [
        146,
        189,
        146
    ],
    "SneaselHisuian Form": [
        146,
        189,
        146
    ],
    "Teddiursa": [
        155,
        142,
        93
    ],
    "Ursaring": [
        207,
        236,
        144
    ],
    "Slugma": [
        120,
        118,
        71
    ],
    "Magcargo": [
        137,
        139,
        191
    ],
    "Swinub": [
        137,
        90,
        69
    ],
    "Piloswine": [
        225,
        181,
        138
    ],
    "Corsola": [
        146,
        118,
        156
    ],
    "Remoraid": [
        111,
        127,
        69
    ],
    "Octillery": [
        181,
        197,
        141
    ],
    "Delibird": [
        128,
        128,
        90
    ],
    "Mantine": [
        163,
        148,
        226
    ],
    "Skarmory": [
        163,
        148,
        226
    ],
    "Houndour": [
        128,
        152,
        83
    ],
    "Houndoom": [
        181,
        224,
        144
    ],
    "HoundoomMega Houndoom": [
        181,
        289,
        194
    ],
    "Kingdra": [
        181,
        194,
        194
    ],
    "Phanpy": [
        207,
        107,
        98
    ],
    "Donphan": [
        207,
        214,
        185
    ],
    "Porygon2": [
        198,
        198,
        180
    ],
    "Stantler": [
        177,
        192,
        131
    ],
    "Smeargle": [
        146,
        40,
        83
    ],
    "Tyrogue": [
        111,
        64,
        64
    ],
    "Hitmontop": [
        137,
        173,
        207
    ],
    "Smoochum": [
        128,
        153,
        91
    ],
    "Elekid": [
        128,
        135,
        101
    ],
    "Magby": [
        128,
        151,
        99
    ],
    "Miltank": [
        216,
        157,
        193
    ],
    "Blissey": [
        496,
        129,
        169
    ],
    "Raikou": [
        207,
        241,
        195
    ],
    "Entei": [
        251,
        235,
        171
    ],
    "Suicune": [
        225,
        180,
        235
    ],
    "Larvitar": [
        137,
        115,
        93
    ],
    "Pupitar": [
        172,
        155,
        133
    ],
    "Tyranitar": [
        225,
        251,
        207
    ],
    "TyranitarMega Tyranitar": [
        225,
        309,
        276
    ],
    "Lugia": [
        235,
        193,
        310
    ],
    "Ho-Oh": [
        214,
        239,
        244
    ],
    "Celebi": [
        225,
        210,
        210
    ],
    "Treecko": [
        120,
        124,
        94
    ],
    "Grovyle": [
        137,
        172,
        120
    ],
    "Sceptile": [
        172,
        223,
        169
    ],
    "SceptileMega Sceptile": [
        172,
        320,
        186
    ],
    "Torchic": [
        128,
        130,
        87
    ],
    "Combusken": [
        155,
        163,
        115
    ],
    "Blaziken": [
        190,
        240,
        141
    ],
    "BlazikenMega Blaziken": [
        190,
        329,
        168
    ],
    "Mudkip": [
        137,
        126,
        93
    ],
    "Marshtomp": [
        172,
        156,
        133
    ],
    "Swampert": [
        225,
        208,
        175
    ],
    "SwampertMega Swampert": [
        225,
        283,
        218
    ],
    "Poochyena": [
        111,
        96,
        61
    ],
    "Mightyena": [
        172,
        171,
        132
    ],
    "Zigzagoon": [
        116,
        58,
        80
    ],
    "ZigzagoonGalarian Form": [
        116,
        58,
        80
    ],
    "Linoone": [
        186,
        142,
        128
    ],
    "LinooneGalarian Form": [
        186,
        142,
        128
    ],
    "Wurmple": [
        128,
        75,
        59
    ],
    "Silcoon": [
        137,
        60,
        77
    ],
    "Beautifly": [
        155,
        189,
        98
    ],
    "Cascoon": [
        137,
        60,
        77
    ],
    "Dustox": [
        155,
        98,
        162
    ],
    "Lotad": [
        120,
        71,
        77
    ],
    "Lombre": [
        155,
        112,
        119
    ],
    "Ludicolo": [
        190,
        173,
        176
    ],
    "Seedot": [
        120,
        71,
        77
    ],
    "Nuzleaf": [
        172,
        134,
        78
    ],
    "Shiftry": [
        207,
        200,
        121
    ],
    "Taillow": [
        120,
        106,
        61
    ],
    "Swellow": [
        155,
        185,
        124
    ],
    "Wingull": [
        120,
        106,
        61
    ],
    "Pelipper": [
        155,
        175,
        174
    ],
    "Ralts": [
        99,
        79,
        59
    ],
    "Kirlia": [
        116,
        117,
        90
    ],
    "Gardevoir": [
        169,
        237,
        195
    ],
    "GardevoirMega Gardevoir": [
        169,
        326,
        229
    ],
    "Surskit": [
        120,
        93,
        87
    ],
    "Masquerain": [
        172,
        192,
        150
    ],
    "Shroomish": [
        155,
        74,
        110
    ],
    "Breloom": [
        155,
        241,
        144
    ],
    "Slakoth": [
        155,
        104,
        92
    ],
    "Vigoroth": [
        190,
        159,
        145
    ],
    "Slaking": [
        284,
        290,
        166
    ],
    "Nincada": [
        104,
        80,
        126
    ],
    "Ninjask": [
        156,
        199,
        112
    ],
    "Shedinja": [
        1,
        153,
        73
    ],
    "Whismur": [
        162,
        92,
        42
    ],
    "Loudred": [
        197,
        134,
        81
    ],
    "Exploud": [
        232,
        179,
        137
    ],
    "Makuhita": [
        176,
        99,
        54
    ],
    "Hariyama": [
        302,
        209,
        114
    ],
    "Azurill": [
        137,
        36,
        71
    ],
    "Nosepass": [
        102,
        82,
        215
    ],
    "Skitty": [
        137,
        84,
        79
    ],
    "Delcatty": [
        172,
        132,
        127
    ],
    "Sableye": [
        137,
        141,
        136
    ],
    "SableyeMega Sableye": [
        137,
        151,
        216
    ],
    "Mawile": [
        137,
        155,
        141
    ],
    "Aron": [
        137,
        121,
        141
    ],
    "Lairon": [
        155,
        158,
        198
    ],
    "Aggron": [
        172,
        198,
        257
    ],
    "AggronMega Aggron": [
        172,
        247,
        331
    ],
    "Meditite": [
        102,
        78,
        107
    ],
    "Medicham": [
        155,
        121,
        152
    ],
    "MedichamMega Medicham": [
        155,
        205,
        179
    ],
    "Electrike": [
        120,
        123,
        78
    ],
    "Manectric": [
        172,
        215,
        127
    ],
    "ManectricMega Manectric": [
        172,
        286,
        179
    ],
    "Plusle": [
        155,
        167,
        129
    ],
    "Minun": [
        155,
        147,
        150
    ],
    "Volbeat": [
        163,
        143,
        166
    ],
    "Illumise": [
        163,
        143,
        166
    ],
    "Roselia": [
        137,
        186,
        131
    ],
    "Gulpin": [
        172,
        80,
        99
    ],
    "Swalot": [
        225,
        140,
        159
    ],
    "Carvanha": [
        128,
        171,
        39
    ],
    "Sharpedo": [
        172,
        243,
        83
    ],
    "Wailmer": [
        277,
        136,
        68
    ],
    "Wailord": [
        347,
        175,
        87
    ],
    "Numel": [
        155,
        119,
        79
    ],
    "Camerupt": [
        172,
        194,
        136
    ],
    "Torkoal": [
        172,
        151,
        203
    ],
    "Spoink": [
        155,
        125,
        122
    ],
    "Grumpig": [
        190,
        171,
        188
    ],
    "Spinda": [
        155,
        116,
        116
    ],
    "Trapinch": [
        128,
        162,
        78
    ],
    "Vibrava": [
        137,
        134,
        99
    ],
    "Flygon": [
        190,
        205,
        168
    ],
    "Cacnea": [
        137,
        156,
        74
    ],
    "Cacturne": [
        172,
        221,
        115
    ],
    "Swablu": [
        128,
        76,
        132
    ],
    "Altaria": [
        181,
        141,
        201
    ],
    "AltariaMega Altaria": [
        181,
        222,
        218
    ],
    "Zangoose": [
        177,
        222,
        124
    ],
    "Seviper": [
        177,
        196,
        118
    ],
    "Lunatone": [
        207,
        178,
        153
    ],
    "Solrock": [
        207,
        178,
        153
    ],
    "Barboach": [
        137,
        93,
        82
    ],
    "Whiscash": [
        242,
        151,
        141
    ],
    "Corphish": [
        125,
        141,
        99
    ],
    "Crawdaunt": [
        160,
        224,
        142
    ],
    "Baltoy": [
        120,
        77,
        124
    ],
    "Claydol": [
        155,
        140,
        229
    ],
    "Lileep": [
        165,
        105,
        150
    ],
    "Cradily": [
        200,
        152,
        194
    ],
    "Anorith": [
        128,
        176,
        100
    ],
    "Armaldo": [
        181,
        222,
        174
    ],
    "Feebas": [
        85,
        29,
        85
    ],
    "Milotic": [
        216,
        192,
        219
    ],
    "Castform": [
        172,
        139,
        139
    ],
    "CastformRainy Form": [
        172,
        139,
        139
    ],
    "CastformSnowy Form": [
        172,
        139,
        139
    ],
    "CastformSunny Form": [
        172,
        139,
        139
    ],
    "Kecleon": [
        155,
        161,
        189
    ],
    "Shuppet": [
        127,
        138,
        65
    ],
    "Banette": [
        162,
        218,
        126
    ],
    "BanetteMega Banette": [
        162,
        312,
        160
    ],
    "Duskull": [
        85,
        70,
        162
    ],
    "Dusclops": [
        120,
        124,
        234
    ],
    "Tropius": [
        223,
        136,
        163
    ],
    "Chimecho": [
        181,
        175,
        170
    ],
    "Absol": [
        163,
        246,
        120
    ],
    "AbsolMega Absol": [
        163,
        314,
        130
    ],
    "Wynaut": [
        216,
        41,
        86
    ],
    "Snorunt": [
        137,
        95,
        95
    ],
    "Glalie": [
        190,
        162,
        162
    ],
    "GlalieMega Glalie": [
        190,
        252,
        168
    ],
    "Spheal": [
        172,
        95,
        90
    ],
    "Sealeo": [
        207,
        137,
        132
    ],
    "Walrein": [
        242,
        182,
        176
    ],
    "Clamperl": [
        111,
        133,
        135
    ],
    "Huntail": [
        146,
        197,
        179
    ],
    "Gorebyss": [
        146,
        211,
        179
    ],
    "Relicanth": [
        225,
        162,
        203
    ],
    "Luvdisc": [
        125,
        81,
        128
    ],
    "Bagon": [
        128,
        134,
        93
    ],
    "Shelgon": [
        163,
        172,
        155
    ],
    "Salamence": [
        216,
        277,
        168
    ],
    "SalamenceMega Salamence": [
        216,
        310,
        251
    ],
    "Beldum": [
        120,
        96,
        132
    ],
    "Metang": [
        155,
        138,
        176
    ],
    "Metagross": [
        190,
        257,
        228
    ],
    "Regirock": [
        190,
        179,
        309
    ],
    "Regice": [
        190,
        179,
        309
    ],
    "Registeel": [
        190,
        143,
        285
    ],
    "Latias": [
        190,
        228,
        246
    ],
    "LatiasMega Latias": [
        190,
        289,
        297
    ],
    "Latios": [
        190,
        268,
        212
    ],
    "LatiosMega Latios": [
        190,
        335,
        241
    ],
    "Kyogre": [
        205,
        270,
        228
    ],
    "KyogrePrimal Kyogre": [
        218,
        353,
        268
    ],
    "Groudon": [
        205,
        270,
        228
    ],
    "GroudonPrimal Groudon": [
        218,
        353,
        268
    ],
    "Rayquaza": [
        213,
        284,
        170
    ],
    "RayquazaMega Rayquaza": [
        227,
        377,
        210
    ],
    "Jirachi": [
        225,
        210,
        210
    ],
    "DeoxysNormal Forme": [
        137,
        345,
        115
    ],
    "DeoxysAttack Forme": [
        137,
        414,
        46
    ],
    "DeoxysDefense Forme": [
        137,
        144,
        330
    ],
    "DeoxysSpeed Forme": [
        137,
        230,
        218
    ],
    "Turtwig": [
        146,
        119,
        110
    ],
    "Grotle": [
        181,
        157,
        143
    ],
    "Torterra": [
        216,
        202,
        188
    ],
    "Chimchar": [
        127,
        113,
        86
    ],
    "Monferno": [
        162,
        158,
        105
    ],
    "Infernape": [
        183,
        222,
        151
    ],
    "Piplup": [
        142,
        112,
        102
    ],
    "Prinplup": [
        162,
        150,
        139
    ],
    "Empoleon": [
        197,
        210,
        186
    ],
    "Starly": [
        120,
        101,
        58
    ],
    "Staravia": [
        146,
        142,
        94
    ],
    "Staraptor": [
        198,
        234,
        140
    ],
    "Bidoof": [
        153,
        80,
        73
    ],
    "Bibarel": [
        188,
        162,
        119
    ],
    "Kricketot": [
        114,
        45,
        74
    ],
    "Kricketune": [
        184,
        160,
        100
    ],
    "Shinx": [
        128,
        117,
        64
    ],
    "Luxio": [
        155,
        159,
        95
    ],
    "Luxray": [
        190,
        232,
        156
    ],
    "Budew": [
        120,
        91,
        109
    ],
    "Roserade": [
        155,
        243,
        185
    ],
    "Cranidos": [
        167,
        218,
        71
    ],
    "Rampardos": [
        219,
        295,
        109
    ],
    "Shieldon": [
        102,
        76,
        195
    ],
    "Bastiodon": [
        155,
        94,
        286
    ],
    "Burmy": [
        120,
        53,
        83
    ],
    "WormadamPlant Cloak": [
        155,
        141,
        180
    ],
    "WormadamSandy Cloak": [
        155,
        141,
        180
    ],
    "WormadamTrash Cloak": [
        155,
        127,
        175
    ],
    "Mothim": [
        172,
        185,
        98
    ],
    "Combee": [
        102,
        59,
        83
    ],
    "Vespiquen": [
        172,
        149,
        190
    ],
    "Pachirisu": [
        155,
        94,
        172
    ],
    "Buizel": [
        146,
        132,
        67
    ],
    "Floatzel": [
        198,
        221,
        114
    ],
    "Cherubi": [
        128,
        108,
        92
    ],
    "CherrimOvercast Form": [
        172,
        170,
        153
    ],
    "CherrimSunshine Form": [
        172,
        170,
        153
    ],
    "ShellosWest Sea": [
        183,
        103,
        105
    ],
    "ShellosEast Sea": [
        183,
        103,
        105
    ],
    "GastrodonWest Sea": [
        244,
        169,
        143
    ],
    "GastrodonEast Sea": [
        244,
        169,
        143
    ],
    "Ambipom": [
        181,
        205,
        143
    ],
    "Drifloon": [
        207,
        117,
        80
    ],
    "Drifblim": [
        312,
        180,
        102
    ],
    "Buneary": [
        146,
        130,
        105
    ],
    "Lopunny": [
        163,
        156,
        194
    ],
    "LopunnyMega Lopunny": [
        163,
        282,
        214
    ],
    "Mismagius": [
        155,
        211,
        187
    ],
    "Honchkrow": [
        225,
        243,
        103
    ],
    "Glameow": [
        135,
        109,
        82
    ],
    "Purugly": [
        174,
        172,
        133
    ],
    "Chingling": [
        128,
        114,
        94
    ],
    "Stunky": [
        160,
        121,
        90
    ],
    "Skuntank": [
        230,
        184,
        132
    ],
    "Bronzor": [
        149,
        43,
        154
    ],
    "Bronzong": [
        167,
        161,
        213
    ],
    "Bonsly": [
        137,
        124,
        133
    ],
    "Mime Jr.": [
        85,
        125,
        142
    ],
    "Happiny": [
        225,
        25,
        77
    ],
    "Chatot": [
        183,
        183,
        91
    ],
    "Spiritomb": [
        137,
        169,
        199
    ],
    "Gible": [
        151,
        124,
        84
    ],
    "Gabite": [
        169,
        172,
        125
    ],
    "Garchomp": [
        239,
        261,
        193
    ],
    "GarchompMega Garchomp": [
        239,
        339,
        222
    ],
    "Munchlax": [
        286,
        137,
        117
    ],
    "Riolu": [
        120,
        127,
        78
    ],
    "Lucario": [
        172,
        236,
        144
    ],
    "Hippopotas": [
        169,
        124,
        118
    ],
    "Hippowdon": [
        239,
        201,
        191
    ],
    "Skorupi": [
        120,
        93,
        151
    ],
    "Drapion": [
        172,
        180,
        202
    ],
    "Croagunk": [
        134,
        116,
        76
    ],
    "Toxicroak": [
        195,
        211,
        133
    ],
    "Carnivine": [
        179,
        187,
        136
    ],
    "Finneon": [
        135,
        96,
        116
    ],
    "Lumineon": [
        170,
        142,
        170
    ],
    "Mantyke": [
        128,
        105,
        179
    ],
    "Snover": [
        155,
        115,
        105
    ],
    "Abomasnow": [
        207,
        178,
        158
    ],
    "AbomasnowMega Abomasnow": [
        207,
        240,
        191
    ],
    "Weavile": [
        172,
        243,
        171
    ],
    "Magnezone": [
        172,
        238,
        205
    ],
    "Lickilicky": [
        242,
        161,
        181
    ],
    "Rhyperior": [
        251,
        241,
        190
    ],
    "Tangrowth": [
        225,
        207,
        184
    ],
    "Electivire": [
        181,
        249,
        163
    ],
    "Magmortar": [
        181,
        247,
        172
    ],
    "Togekiss": [
        198,
        225,
        217
    ],
    "Yanmega": [
        200,
        231,
        156
    ],
    "Leafeon": [
        163,
        216,
        219
    ],
    "Glaceon": [
        163,
        238,
        205
    ],
    "Gliscor": [
        181,
        185,
        222
    ],
    "Mamoswine": [
        242,
        247,
        146
    ],
    "Porygon-Z": [
        198,
        264,
        150
    ],
    "Gallade": [
        169,
        237,
        195
    ],
    "Probopass": [
        155,
        135,
        275
    ],
    "Dusknoir": [
        128,
        180,
        254
    ],
    "Froslass": [
        172,
        171,
        150
    ],
    "Rotom": [
        137,
        185,
        159
    ],
    "RotomFan Rotom": [
        137,
        204,
        219
    ],
    "RotomFrost Rotom": [
        137,
        204,
        219
    ],
    "RotomHeat Rotom": [
        137,
        204,
        219
    ],
    "RotomMow Rotom": [
        137,
        204,
        219
    ],
    "RotomWash Rotom": [
        137,
        204,
        219
    ],
    "Uxie": [
        181,
        156,
        270
    ],
    "Mesprit": [
        190,
        212,
        212
    ],
    "Azelf": [
        181,
        270,
        151
    ],
    "Dialga": [
        205,
        275,
        211
    ],
    "DialgaOrigin Forme": [
        205,
        270,
        225
    ],
    "Palkia": [
        189,
        280,
        215
    ],
    "PalkiaOrigin Forme": [
        189,
        286,
        223
    ],
    "Heatran": [
        209,
        251,
        213
    ],
    "Regigigas": [
        221,
        287,
        210
    ],
    "GiratinaAltered Forme": [
        284,
        187,
        225
    ],
    "GiratinaOrigin Forme": [
        284,
        225,
        187
    ],
    "Cresselia": [
        260,
        152,
        258
    ],
    "Phione": [
        190,
        162,
        162
    ],
    "Manaphy": [
        225,
        210,
        210
    ],
    "Darkrai": [
        172,
        285,
        198
    ],
    "ShayminLand Forme": [
        225,
        210,
        210
    ],
    "ShayminSky Forme": [
        225,
        261,
        166
    ],
    "Arceus": [
        237,
        238,
        238
    ],
    "Victini": [
        225,
        210,
        210
    ],
    "Snivy": [
        128,
        88,
        107
    ],
    "Servine": [
        155,
        122,
        152
    ],
    "Serperior": [
        181,
        161,
        204
    ],
    "Tepig": [
        163,
        115,
        85
    ],
    "Pignite": [
        207,
        173,
        106
    ],
    "Emboar": [
        242,
        235,
        127
    ],
    "Oshawott": [
        146,
        117,
        85
    ],
    "Dewott": [
        181,
        159,
        116
    ],
    "Samurott": [
        216,
        212,
        157
    ],
    "SamurottHisuian Form": [
        207,
        218,
        152
    ],
    "Patrat": [
        128,
        98,
        73
    ],
    "Watchog": [
        155,
        165,
        139
    ],
    "Lillipup": [
        128,
        107,
        86
    ],
    "Herdier": [
        163,
        145,
        126
    ],
    "Stoutland": [
        198,
        206,
        182
    ],
    "Purrloin": [
        121,
        98,
        73
    ],
    "Liepard": [
        162,
        187,
        106
    ],
    "Pansage": [
        137,
        104,
        94
    ],
    "Simisage": [
        181,
        206,
        133
    ],
    "Pansear": [
        137,
        104,
        94
    ],
    "Simisear": [
        181,
        206,
        133
    ],
    "Panpour": [
        137,
        104,
        94
    ],
    "Simipour": [
        181,
        206,
        133
    ],
    "Munna": [
        183,
        111,
        92
    ],
    "Musharna": [
        253,
        183,
        166
    ],
    "Pidove": [
        137,
        98,
        80
    ],
    "Tranquill": [
        158,
        144,
        107
    ],
    "Unfezant": [
        190,
        226,
        146
    ],
    "Blitzle": [
        128,
        118,
        64
    ],
    "Zebstrika": [
        181,
        211,
        136
    ],
    "Roggenrola": [
        146,
        121,
        110
    ],
    "Boldore": [
        172,
        174,
        143
    ],
    "Gigalith": [
        198,
        226,
        201
    ],
    "Woobat": [
        163,
        107,
        85
    ],
    "Swoobat": [
        167,
        161,
        119
    ],
    "Drilbur": [
        155,
        154,
        85
    ],
    "Excadrill": [
        242,
        255,
        129
    ],
    "Audino": [
        230,
        114,
        163
    ],
    "Timburr": [
        181,
        134,
        87
    ],
    "Gurdurr": [
        198,
        180,
        134
    ],
    "Conkeldurr": [
        233,
        243,
        158
    ],
    "Tympole": [
        137,
        98,
        78
    ],
    "Palpitoad": [
        181,
        128,
        109
    ],
    "Seismitoad": [
        233,
        188,
        150
    ],
    "Throh": [
        260,
        172,
        160
    ],
    "Sawk": [
        181,
        231,
        153
    ],
    "Sewaddle": [
        128,
        96,
        124
    ],
    "Swadloon": [
        146,
        115,
        162
    ],
    "Leavanny": [
        181,
        205,
        165
    ],
    "Venipede": [
        102,
        83,
        99
    ],
    "Whirlipede": [
        120,
        100,
        173
    ],
    "Scolipede": [
        155,
        203,
        175
    ],
    "Cottonee": [
        120,
        71,
        111
    ],
    "Whimsicott": [
        155,
        164,
        176
    ],
    "Petilil": [
        128,
        119,
        91
    ],
    "Lilligant": [
        172,
        214,
        155
    ],
    "BasculinRed-Striped Form": [
        172,
        189,
        129
    ],
    "BasculinBlue-Striped Form": [
        172,
        189,
        129
    ],
    "BasculinWhite-Striped Form": [
        172,
        189,
        129
    ],
    "Sandile": [
        137,
        132,
        69
    ],
    "Krokorok": [
        155,
        155,
        90
    ],
    "Krookodile": [
        216,
        229,
        158
    ],
    "Darumaka": [
        172,
        153,
        86
    ],
    "DarumakaGalarian Form": [
        172,
        153,
        86
    ],
    "DarmanitanStandard Mode": [
        233,
        263,
        114
    ],
    "DarmanitanZen Mode": [
        233,
        243,
        202
    ],
    "DarmanitanGalarian Form, Standard Mode": [
        233,
        263,
        114
    ],
    "DarmanitanGalarian Form, Zen Mode": [
        233,
        323,
        123
    ],
    "Maractus": [
        181,
        201,
        130
    ],
    "Dwebble": [
        137,
        118,
        128
    ],
    "Crustle": [
        172,
        188,
        200
    ],
    "Scraggy": [
        137,
        132,
        132
    ],
    "Scrafty": [
        163,
        163,
        222
    ],
    "Sigilyph": [
        176,
        204,
        167
    ],
    "Yamask": [
        116,
        95,
        141
    ],
    "YamaskGalarian From": [
        116,
        95,
        141
    ],
    "Cofagrigus": [
        151,
        163,
        237
    ],
    "Tirtouga": [
        144,
        134,
        146
    ],
    "Carracosta": [
        179,
        192,
        197
    ],
    "Archen": [
        146,
        213,
        89
    ],
    "Archeops": [
        181,
        292,
        139
    ],
    "Trubbish": [
        137,
        96,
        122
    ],
    "Garbodor": [
        190,
        181,
        164
    ],
    "Zorua": [
        120,
        153,
        78
    ],
    "Zoroark": [
        155,
        250,
        127
    ],
    "Minccino": [
        146,
        98,
        80
    ],
    "Cinccino": [
        181,
        198,
        130
    ],
    "Gothita": [
        128,
        98,
        112
    ],
    "Gothorita": [
        155,
        137,
        153
    ],
    "Gothitelle": [
        172,
        176,
        205
    ],
    "Solosis": [
        128,
        170,
        83
    ],
    "Duosion": [
        163,
        208,
        103
    ],
    "Reuniclus": [
        242,
        214,
        148
    ],
    "Ducklett": [
        158,
        84,
        96
    ],
    "Swanna": [
        181,
        182,
        132
    ],
    "Vanillite": [
        113,
        118,
        106
    ],
    "Vanillish": [
        139,
        151,
        138
    ],
    "Vanilluxe": [
        174,
        218,
        184
    ],
    "Deerling": [
        155,
        115,
        100
    ],
    "Sawsbuck": [
        190,
        198,
        146
    ],
    "Emolga": [
        146,
        158,
        127
    ],
    "Karrablast": [
        137,
        137,
        87
    ],
    "Escavalier": [
        172,
        223,
        187
    ],
    "Foongus": [
        170,
        97,
        91
    ],
    "Amoonguss": [
        249,
        155,
        139
    ],
    "Frillish": [
        146,
        115,
        134
    ],
    "Jellicent": [
        225,
        159,
        178
    ],
    "Alomomola": [
        338,
        138,
        131
    ],
    "Joltik": [
        137,
        110,
        98
    ],
    "Galvantula": [
        172,
        201,
        128
    ],
    "Ferroseed": [
        127,
        82,
        155
    ],
    "Ferrothorn": [
        179,
        158,
        223
    ],
    "Klink": [
        120,
        98,
        121
    ],
    "Klang": [
        155,
        150,
        174
    ],
    "Klinklang": [
        155,
        199,
        214
    ],
    "Tynamo": [
        111,
        105,
        78
    ],
    "Eelektrik": [
        163,
        156,
        130
    ],
    "Eelektross": [
        198,
        217,
        152
    ],
    "Elgyem": [
        146,
        148,
        100
    ],
    "Beheeyem": [
        181,
        221,
        163
    ],
    "Litwick": [
        137,
        108,
        98
    ],
    "Lampent": [
        155,
        169,
        115
    ],
    "Chandelure": [
        155,
        271,
        182
    ],
    "Axew": [
        130,
        154,
        101
    ],
    "Fraxure": [
        165,
        212,
        123
    ],
    "Haxorus": [
        183,
        284,
        172
    ],
    "Cubchoo": [
        146,
        128,
        74
    ],
    "Beartic": [
        216,
        233,
        152
    ],
    "Cryogonal": [
        190,
        190,
        218
    ],
    "Shelmet": [
        137,
        72,
        140
    ],
    "Accelgor": [
        190,
        220,
        120
    ],
    "Stunfisk": [
        240,
        144,
        171
    ],
    "StunfiskGalarian Form": [
        240,
        144,
        171
    ],
    "Mienfoo": [
        128,
        160,
        98
    ],
    "Mienshao": [
        163,
        258,
        127
    ],
    "Druddigon": [
        184,
        213,
        170
    ],
    "Golett": [
        153,
        127,
        92
    ],
    "Golurk": [
        205,
        222,
        154
    ],
    "Pawniard": [
        128,
        154,
        114
    ],
    "Bisharp": [
        163,
        232,
        176
    ],
    "Bouffalant": [
        216,
        195,
        182
    ],
    "Rufflet": [
        172,
        150,
        97
    ],
    "Braviary": [
        225,
        232,
        152
    ],
    "BraviaryHisuian From": [
        242,
        213,
        137
    ],
    "Vullaby": [
        172,
        105,
        139
    ],
    "Mandibuzz": [
        242,
        129,
        205
    ],
    "Heatmor": [
        198,
        204,
        129
    ],
    "Durant": [
        151,
        217,
        188
    ],
    "Deino": [
        141,
        116,
        93
    ],
    "Zweilous": [
        176,
        159,
        135
    ],
    "Hydreigon": [
        211,
        256,
        188
    ],
    "Larvesta": [
        146,
        156,
        107
    ],
    "Volcarona": [
        198,
        264,
        189
    ],
    "Cobalion": [
        209,
        192,
        229
    ],
    "Terrakion": [
        209,
        260,
        192
    ],
    "Virizion": [
        209,
        192,
        229
    ],
    "TornadusIncarnate Forme": [
        188,
        266,
        164
    ],
    "TornadusTherian Forme": [
        188,
        238,
        189
    ],
    "ThundurusIncarnate Forme": [
        188,
        266,
        164
    ],
    "ThundurusTherian Forme": [
        188,
        295,
        161
    ],
    "Reshiram": [
        205,
        275,
        211
    ],
    "Zekrom": [
        205,
        275,
        211
    ],
    "LandorusIncarnate Forme": [
        205,
        261,
        182
    ],
    "LandorusTherian Forme": [
        205,
        289,
        179
    ],
    "Kyurem": [
        245,
        246,
        170
    ],
    "KyuremBlack Kyurem": [
        245,
        310,
        183
    ],
    "KyuremWhite Kyurem": [
        245,
        310,
        183
    ],
    "KeldeoOrdinary Form": [
        209,
        260,
        192
    ],
    "KeldeoResolute Form": [
        209,
        260,
        192
    ],
    "MeloettaAria Forme": [
        225,
        250,
        225
    ],
    "MeloettaPirouette Forme": [
        225,
        269,
        188
    ],
    "Genesect": [
        174,
        252,
        199
    ],
    "Chespin": [
        148,
        110,
        106
    ],
    "Quilladin": [
        156,
        146,
        156
    ],
    "Chesnaught": [
        204,
        201,
        204
    ],
    "Fennekin": [
        120,
        116,
        102
    ],
    "Braixen": [
        153,
        171,
        130
    ],
    "Delphox": [
        181,
        230,
        189
    ],
    "Froakie": [
        121,
        122,
        84
    ],
    "Frogadier": [
        144,
        168,
        114
    ],
    "Greninja": [
        176,
        223,
        152
    ],
    "Bunnelby": [
        116,
        68,
        72
    ],
    "Diggersby": [
        198,
        112,
        155
    ],
    "Fletchling": [
        128,
        95,
        80
    ],
    "Fletchinder": [
        158,
        145,
        110
    ],
    "Talonflame": [
        186,
        176,
        155
    ],
    "Scatterbug": [
        116,
        63,
        63
    ],
    "Spewpa": [
        128,
        48,
        89
    ],
    "Vivillon": [
        190,
        176,
        103
    ],
    "Litleo": [
        158,
        139,
        112
    ],
    "Pyroar": [
        200,
        221,
        149
    ],
    "Flab\u00e9b\u00e9": [
        127,
        108,
        120
    ],
    "Floette": [
        144,
        136,
        151
    ],
    "Florges": [
        186,
        212,
        244
    ],
    "Skiddo": [
        165,
        123,
        102
    ],
    "Gogoat": [
        265,
        196,
        146
    ],
    "Pancham": [
        167,
        145,
        107
    ],
    "Pangoro": [
        216,
        226,
        146
    ],
    "Furfrou": [
        181,
        164,
        167
    ],
    "Espurr": [
        158,
        120,
        114
    ],
    "Meowstic": [
        179,
        166,
        167
    ],
    "Honedge": [
        128,
        135,
        139
    ],
    "Doublade": [
        153,
        188,
        206
    ],
    "AegislashShield Forme": [
        155,
        97,
        291
    ],
    "AegislashBlade Forme": [
        155,
        291,
        97
    ],
    "Spritzee": [
        186,
        110,
        113
    ],
    "Aromatisse": [
        226,
        173,
        150
    ],
    "Swirlix": [
        158,
        109,
        119
    ],
    "Slurpuff": [
        193,
        168,
        163
    ],
    "Inkay": [
        142,
        98,
        95
    ],
    "Malamar": [
        200,
        177,
        165
    ],
    "Binacle": [
        123,
        96,
        120
    ],
    "Barbaracle": [
        176,
        194,
        205
    ],
    "Skrelp": [
        137,
        109,
        109
    ],
    "Dragalge": [
        163,
        177,
        207
    ],
    "Clauncher": [
        137,
        108,
        117
    ],
    "Clawitzer": [
        174,
        221,
        171
    ],
    "Helioptile": [
        127,
        115,
        78
    ],
    "Heliolisk": [
        158,
        219,
        168
    ],
    "Tyrunt": [
        151,
        158,
        123
    ],
    "Tyrantrum": [
        193,
        227,
        191
    ],
    "Amaura": [
        184,
        124,
        109
    ],
    "Aurorus": [
        265,
        186,
        163
    ],
    "Sylveon": [
        216,
        203,
        205
    ],
    "Hawlucha": [
        186,
        195,
        153
    ],
    "Dedenne": [
        167,
        164,
        134
    ],
    "Carbink": [
        137,
        95,
        285
    ],
    "Goomy": [
        128,
        101,
        112
    ],
    "Sliggoo": [
        169,
        159,
        176
    ],
    "Goodra": [
        207,
        220,
        242
    ],
    "Klefki": [
        149,
        160,
        179
    ],
    "Phantump": [
        125,
        125,
        103
    ],
    "Trevenant": [
        198,
        201,
        154
    ],
    "PumpkabooSmall Size": [
        127,
        122,
        124
    ],
    "PumpkabooAverage Size": [
        135,
        121,
        123
    ],
    "PumpkabooLarge Size": [
        144,
        120,
        122
    ],
    "PumpkabooSuper Size": [
        153,
        118,
        120
    ],
    "GourgeistSmall Size": [
        146,
        171,
        219
    ],
    "GourgeistAverage Size": [
        163,
        175,
        213
    ],
    "GourgeistLarge Size": [
        181,
        179,
        206
    ],
    "GourgeistSuper Size": [
        198,
        182,
        200
    ],
    "Bergmite": [
        146,
        117,
        120
    ],
    "Avalugg": [
        216,
        196,
        240
    ],
    "AvaluggHisuian Form": [
        216,
        214,
        238
    ],
    "Noibat": [
        120,
        83,
        73
    ],
    "Noivern": [
        198,
        205,
        175
    ],
    "Xerneas": [
        246,
        250,
        185
    ],
    "Yveltal": [
        246,
        250,
        185
    ],
    "Zygarde50% Forme": [
        239,
        203,
        232
    ],
    "Zygarde10% Forme": [
        144,
        205,
        173
    ],
    "ZygardeComplete Forme": [
        389,
        184,
        207
    ],
    "Diancie": [
        137,
        190,
        285
    ],
    "DiancieMega Diancie": [
        137,
        342,
        235
    ],
    "HoopaHoopa Confined": [
        173,
        261,
        187
    ],
    "HoopaHoopa Unbound": [
        173,
        311,
        191
    ],
    "Volcanion": [
        190,
        252,
        216
    ],
    "Rowlet": [
        169,
        102,
        99
    ],
    "Dartrix": [
        186,
        142,
        139
    ],
    "Decidueye": [
        186,
        210,
        179
    ],
    "DecidueyeHisuian Form": [
        204,
        213,
        174
    ],
    "Litten": [
        128,
        128,
        79
    ],
    "Torracat": [
        163,
        174,
        103
    ],
    "Incineroar": [
        216,
        214,
        175
    ],
    "Popplio": [
        137,
        120,
        103
    ],
    "Brionne": [
        155,
        168,
        145
    ],
    "Primarina": [
        190,
        232,
        195
    ],
    "Pikipek": [
        111,
        136,
        59
    ],
    "Trumbeak": [
        146,
        159,
        100
    ],
    "Toucannon": [
        190,
        222,
        146
    ],
    "Yungoos": [
        134,
        122,
        56
    ],
    "Gumshoos": [
        204,
        194,
        113
    ],
    "Grubbin": [
        132,
        115,
        85
    ],
    "Charjabug": [
        149,
        145,
        161
    ],
    "Vikavolt": [
        184,
        254,
        158
    ],
    "Crabrawler": [
        132,
        150,
        104
    ],
    "Crabominable": [
        219,
        231,
        138
    ],
    "Oricorio": [
        181,
        196,
        145
    ],
    "Cutiefly": [
        120,
        110,
        81
    ],
    "Ribombee": [
        155,
        198,
        146
    ],
    "Rockruff": [
        128,
        117,
        78
    ],
    "LycanrocMidday Form": [
        181,
        231,
        140
    ],
    "LycanrocMidnight Form": [
        198,
        218,
        152
    ],
    "LycanrocDusk Form": [
        181,
        234,
        139
    ],
    "WishiwashiSolo Form": [
        128,
        46,
        43
    ],
    "WishiwashiSchool Form": [
        128,
        255,
        242
    ],
    "Mareanie": [
        137,
        98,
        110
    ],
    "Toxapex": [
        137,
        114,
        273
    ],
    "Mudbray": [
        172,
        175,
        121
    ],
    "Mudsdale": [
        225,
        215,
        174
    ],
    "Dewpider": [
        116,
        72,
        117
    ],
    "Araquanid": [
        169,
        126,
        219
    ],
    "Fomantis": [
        120,
        100,
        64
    ],
    "Lurantis": [
        172,
        192,
        169
    ],
    "Morelull": [
        120,
        108,
        119
    ],
    "Shiinotic": [
        155,
        154,
        168
    ],
    "Salandit": [
        134,
        136,
        80
    ],
    "Salazzle": [
        169,
        228,
        130
    ],
    "Stufful": [
        172,
        136,
        95
    ],
    "Bewear": [
        260,
        226,
        141
    ],
    "Bounsweet": [
        123,
        55,
        69
    ],
    "Steenee": [
        141,
        78,
        94
    ],
    "Tsareena": [
        176,
        222,
        195
    ],
    "Comfey": [
        139,
        165,
        215
    ],
    "Oranguru": [
        207,
        168,
        192
    ],
    "Passimian": [
        225,
        222,
        160
    ],
    "Wimpod": [
        93,
        67,
        74
    ],
    "Golisopod": [
        181,
        218,
        226
    ],
    "Sandygast": [
        146,
        120,
        118
    ],
    "Palossand": [
        198,
        178,
        178
    ],
    "Pyukumuku": [
        146,
        97,
        224
    ],
    "Komala": [
        163,
        216,
        165
    ],
    "Turtonator": [
        155,
        165,
        215
    ],
    "Togedemaru": [
        163,
        190,
        145
    ],
    "Bruxish": [
        169,
        208,
        145
    ],
    "Drampa": [
        186,
        231,
        164
    ],
    "Jangmo-o": [
        128,
        102,
        108
    ],
    "Hakamo-o": [
        146,
        145,
        162
    ],
    "Kommo-o": [
        181,
        222,
        240
    ],
    "Tapu Koko": [
        172,
        250,
        181
    ],
    "Tapu Lele": [
        172,
        259,
        208
    ],
    "Tapu Bulu": [
        172,
        249,
        215
    ],
    "Tapu Fini": [
        172,
        189,
        254
    ],
    "Cosmog": [
        125,
        54,
        57
    ],
    "Cosmoem": [
        125,
        54,
        242
    ],
    "Solgaleo": [
        264,
        255,
        191
    ],
    "Lunala": [
        264,
        255,
        191
    ],
    "Nihilego": [
        240,
        249,
        210
    ],
    "Buzzwole": [
        216,
        236,
        196
    ],
    "Pheromosa": [
        174,
        316,
        85
    ],
    "Xurkitree": [
        195,
        330,
        144
    ],
    "Celesteela": [
        219,
        207,
        199
    ],
    "Kartana": [
        139,
        323,
        182
    ],
    "Guzzlord": [
        440,
        188,
        99
    ],
    "Necrozma": [
        219,
        251,
        195
    ],
    "NecrozmaDusk Mane Necrozma": [
        200,
        277,
        220
    ],
    "NecrozmaDawn Wings Necrozma": [
        200,
        277,
        220
    ],
    "Marshadow": [
        207,
        265,
        190
    ],
    "Poipole": [
        167,
        145,
        133
    ],
    "Naganadel": [
        177,
        263,
        159
    ],
    "Stakataka": [
        156,
        213,
        298
    ],
    "Blacephalon": [
        142,
        315,
        148
    ],
    "Meltan": [
        130,
        118,
        99
    ],
    "Melmetal": [
        264,
        226,
        190
    ],
    "Skwovet": [
        172,
        95,
        86
    ],
    "Greedent": [
        260,
        160,
        156
    ],
    "Wooloo": [
        123,
        76,
        97
    ],
    "Dubwool": [
        176,
        159,
        198
    ],
    "Obstagoon": [
        212,
        180,
        194
    ],
    "Perrserker": [
        172,
        195,
        162
    ],
    "Sirfetch'd": [
        158,
        248,
        176
    ],
    "Mr. Rime": [
        190,
        212,
        179
    ],
    "Runerigus": [
        151,
        163,
        237
    ],
    "Falinks": [
        163,
        193,
        170
    ],
    "ZacianHero of Many Battles": [
        192,
        254,
        236
    ],
    "ZamazentaHero of Many Battles": [
        192,
        254,
        236
    ],
    "Zarude": [
        233,
        242,
        215
    ],
    "Regieleki": [
        190,
        250,
        125
    ],
    "Regidrago": [
        400,
        202,
        101
    ],
    "Wyrdeer": [
        230,
        206,
        145
    ],
    "Kleavor": [
        172,
        253,
        174
    ],
    "Ursaluna": [
        277,
        243,
        181
    ],
    "Sneasler": [
        190,
        259,
        158
    ],
    "Overqwil": [
        198,
        222,
        171
    ],
    "EnamorusIncarnate Forme": [
        179,
        281,
        162
    ],
    "EnamorusTherian Forme": [
        179,
        250,
        201
    ],
    "Sprigatito": [
        120,
        116,
        99
    ],
    "Floragato": [
        156,
        157,
        128
    ],
    "Meowscarada": [
        183,
        233,
        153
    ],
    "Fuecoco": [
        167,
        112,
        96
    ],
    "Crocalor": [
        191,
        162,
        134
    ],
    "Skeledirge": [
        232,
        207,
        178
    ],
    "Quaxly": [
        146,
        120,
        86
    ],
    "Quaxwell": [
        172,
        162,
        123
    ],
    "Quaquaval": [
        198,
        236,
        159
    ],
    "Lechonk": [
        144,
        81,
        79
    ],
    "OinkologneMale": [
        242,
        186,
        153
    ],
    "OinkologneFemale": [
        251,
        169,
        162
    ],
    "Nymble": [
        107,
        81,
        65
    ],
    "Lokix": [
        174,
        199,
        144
    ],
    "Pawmi": [
        128,
        95,
        45
    ],
    "Pawmo": [
        155,
        147,
        82
    ],
    "Pawmot": [
        172,
        232,
        141
    ],
    "Smoliv": [
        121,
        100,
        89
    ],
    "Dolliv": [
        141,
        137,
        131
    ],
    "Arboliva": [
        186,
        219,
        189
    ],
    "Charcadet": [
        120,
        92,
        74
    ],
    "Armarouge": [
        198,
        234,
        185
    ],
    "Ceruledge": [
        181,
        239,
        189
    ],
    "Tadbulb": [
        156,
        104,
        73
    ],
    "Bellibolt": [
        240,
        184,
        165
    ],
    "Wiglett": [
        67,
        109,
        52
    ],
    "Wugtrio": [
        111,
        205,
        136
    ],
    "Bombirdier": [
        172,
        198,
        172
    ],
    "Varoom": [
        128,
        123,
        107
    ],
    "Revavroom": [
        190,
        229,
        168
    ],
    "Greavard": [
        137,
        105,
        106
    ],
    "Houndstone": [
        176,
        186,
        195
    ],
    "Cetoddle": [
        239,
        119,
        80
    ],
    "Cetitan": [
        347,
        208,
        123
    ],
    "Annihilape": [
        242,
        220,
        178
    ],
    "Clodsire": [
        277,
        127,
        151
    ],
    "Frigibax": [
        163,
        134,
        86
    ],
    "Arctibax": [
        207,
        173,
        128
    ],
    "Baxcalibur": [
        229,
        254,
        168
    ],
    "GimmighoulRoaming Form": [
        128,
        140,
        76
    ],
    "Gholdengo": [
        202,
        252,
        190
    ]
}