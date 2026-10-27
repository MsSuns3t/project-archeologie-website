import { useState } from "react";
import "./styles.css";
import RONDES from "./rondes.js";
import ResultScreen from "./components/ResultScreen.jsx";
import RoundScreen from "./components/RoundScreen.jsx";
import WelcomeScreen from "./components/WelcomeScreen.jsx";

const MAX = RONDES.reduce((n, ronde) => n + ronde.items.filter((item) => item.goed).length, 0);

export default function VestisRomana() {
  const [gestart, setGestart] = useState(false);
  const [nr, setNr] = useState(0);
  const [gekozen, setGekozen] = useState(new Set());
  const [gecontroleerd, setGecontroleerd] = useState(false);
  const [score, setScore] = useState(0);

  const ronde = RONDES[nr];

  const wissel = (i) => {
    const n = new Set(gekozen);
    if (n.has(i)) n.delete(i); else n.add(i);
    setGekozen(n);
  };

  const controleer = () => {
    let punten = 0;
    ronde.items.forEach((it, i) => {
      if (gekozen.has(i)) punten += it.goed ? 1 : -1;
    });
    setScore(Math.max(0, score + punten));
    setGecontroleerd(true);
  };

  const volgende = () => {
    setNr(nr + 1);
    setGekozen(new Set());
    setGecontroleerd(false);
  };

  const opnieuw = () => {
    setNr(0);
    setScore(0);
    setGekozen(new Set());
    setGecontroleerd(false);
  };

  return (
    <>
      <header>
        <h1>Vestis Romana</h1>
        <p>Kleed de Romein: kies de juiste kleding en uitrusting.</p>
      </header>
      <main>
        <div id="spel">
          {!gestart && <WelcomeScreen rondes={RONDES} max={MAX} onStart={() => setGestart(true)} />}
          {gestart && nr >= RONDES.length && <ResultScreen score={score} max={MAX} onRestart={opnieuw} />}
          {gestart && nr < RONDES.length && (
            <RoundScreen
              ronde={ronde}
              nr={nr}
              totaal={RONDES.length}
              score={score}
              gekozen={gekozen}
              gecontroleerd={gecontroleerd}
              onToggle={wissel}
              onCheck={controleer}
              onNext={volgende}
            />
          )}
        </div>
      </main>
    </>
  );
}