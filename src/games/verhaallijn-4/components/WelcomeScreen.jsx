export default function WelcomeScreen({ rondes, max, onStart }) {
  return (
    <>
      <h2>Welkom, rekruut</h2>
      <p className="opdracht">
        Een Romein droeg niet zomaar wat kleding: je uitrusting liet zien wie je was. Een soldaat, een senator en een gladiator
        zagen er alle drie anders uit. In dit spel laat je zien wat je daarvan weet.
      </p>
      <h3>Zo werkt het</h3>
      <ol className="stappen">
        <li>Je krijgt {rondes.length} rondes, elk met een andere rol.</li>
        <li>Bij elke rol zie je zeven onderdelen. Tik op alle onderdelen die bij die rol horen. Tik nog eens om een keuze ongedaan te maken.</li>
        <li>Druk op Controleer. Je ziet per onderdeel of het juist of fout was, met een korte uitleg.</li>
        <li>Elk juist onderdeel levert 1 punt op. Elk fout gekozen onderdeel kost 1 punt. Je score gaat nooit onder nul.</li>
      </ol>
      <h3>De rollen</h3>
      <p className="opdracht">{rondes.map((ronde) => ronde.rol).join(", ")}.</p>
      <p className="opdracht">Aan het eind krijg je een rang: tiro, miles, optio of centurio. Er zijn {max} punten te verdienen.</p>
      <button type="button" className="actie" onClick={onStart}>Start het spel</button>
    </>
  );
}
