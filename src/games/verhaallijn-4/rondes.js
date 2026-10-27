const g = (naam, icoon, uitleg) => ({ naam, icoon, goed: true, uitleg });
const f = (naam, icoon, uitleg) => ({ naam, icoon, goed: false, uitleg });

const RONDES = [
  { rol: "Legionair", opdracht: "Rust een soldaat van het keizerlijke leger uit voor de mars.", items: [
    g("Galea", "🪖", "Bronzen of ijzeren helm met nekbescherming."),
    g("Lorica segmentata", "🦺", "Pantser van overlappende ijzeren banden."),
    g("Scutum", "🛡️", "Groot gebogen schild van gelijmd hout."),
    g("Gladius", "🗡️", "Kort steekzwaard, ideaal voor het gevecht van dichtbij."),
    g("Caligae", "👞", "Zware sandalen met ijzeren spijkers onder de zool."),
    f("Hoornhelm", "🐂", "Dit is een mythe over Vikingen, niet over Romeinen."),
    f("Toga praetexta", "🥼", "Burgerkleding voor staatsgelegenheden, niet voor de mars."),
  ]},
  { rol: "Senator", opdracht: "Kleed een senator aan voor een zitting in de Curia.", items: [
    g("Toga praetexta", "🥼", "Wollen toga met purperen rand: teken van hoge status."),
    g("Tunica laticlavia", "👕", "Tunica met een brede purperen verticale streep."),
    g("Calcei senatorii", "👞", "Gesloten schoenen die alleen senatoren droegen."),
    g("Gouden ring", "💍", "Ringen markeerden rang; een gouden ring was een eer."),
    f("Lorica segmentata", "🦺", "Soldatenpantser, ongepast in de senaat."),
    f("Gladius", "🗡️", "Wapens waren binnen de stadsgrens (pomerium) verboden."),
    f("Caligae", "🥾", "Spijkerschoenen voor soldaten, niet voor politici."),
  ]},
  { rol: "Matrona", opdracht: "Kleed een getrouwde Romeinse vrouw voor een bezoek aan het forum.", items: [
    g("Stola", "👗", "Lange overjurk, kenmerk van een respectabele gehuwde vrouw."),
    g("Palla", "🧣", "Grote mantel die over de schouder of het hoofd viel."),
    g("Fibula", "📌", "Gesp of speld waarmee kleding bij elkaar werd gehouden."),
    g("Bulla-ketting", "📿", "Sieraden zoals kettingen en armbanden waren gewoon."),
    f("Toga virilis", "🥼", "De toga was voor mannelijke burgers."),
    f("Scutum", "🛡️", "Legerschild, niet iets voor een matrona."),
    f("Galea", "🪖", "Een soldatenhelm hoort bij het leger."),
  ]},
  { rol: "Murmillo", opdracht: "Maak een gladiator klaar voor de arena van het Colosseum.", items: [
    g("Helm met vizier en kam", "⛑️", "Zware helm met vissenkam en vizier met kijkgaten."),
    g("Scutum", "🛡️", "Het grote rechthoekige schild van de murmillo."),
    g("Gladius", "🗡️", "Zijn standaardwapen was een kort recht zwaard."),
    g("Manica", "💪", "Gewatteerde bescherming voor de zwaardarm."),
    g("Ocrea", "🦵", "Scheenbeschermer voor het voorste been."),
    f("Laurierkrans", "🌿", "Een erekrans voor overwinning, niet voor de strijd."),
    f("Stola", "👗", "Vrouwenkleding, niet voor in de arena."),
  ]},
  { rol: "Centurio", opdracht: "Rust de aanvoerder van een eeuw (80 man) uit.", items: [
    g("Dwarse helmkam", "🪖", "De kam van links naar rechts liet hem opvallen op het veld."),
    g("Vitis", "🌳", "Wijnrank: stok waarmee hij zijn rang toonde en straf uitdeelde."),
    g("Phalerae", "🏅", "Onderscheidingsschijven voor moed, gedragen op het pantser."),
    g("Beenplaten", "🦵", "Alleen centurions droegen vaak beschermende beenplaten."),
    g("Rode mantel", "🧥", "Zijn paludamentum-achtige mantel maakte hem herkenbaar."),
    f("Tunica laticlavia", "👕", "Voorbehouden aan senatoren."),
    f("Toga candida", "🥼", "Witte toga van kandidaten voor een ambt, geen officiersuitrusting."),
  ]},
];

export default RONDES;