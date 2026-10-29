import { status } from "../gameUtils.js";

export default function RoundScreen({
  ronde,
  nr,
  totaal,
  score,
  gekozen,
  gecontroleerd,
  onToggle,
  onCheck,
  onNext,
}) {
  const juist = ronde.items.filter((item, i) => item.goed && gekozen.has(i)).length;
  const fout = ronde.items.filter((item, i) => !item.goed && gekozen.has(i)).length;
  const gemist = ronde.items.filter((item, i) => item.goed && !gekozen.has(i)).length;

  return (
    <>
      <p className="teller">Ronde {nr + 1} van {totaal} — score {score}</p>
      <h2>{ronde.rol}</h2>
      <p className="opdracht">{ronde.opdracht} Kies alle passende onderdelen.</p>
      {gecontroleerd && <p className="samenvatting">Juist: {juist}. Fout: {fout}. Gemist: {gemist}.</p>}
      <div className="raster">
        {ronde.items.map((item, i) => {
          const isGekozen = gekozen.has(i);
          const [klasse, label] = status(item, isGekozen);
          return (
            <button
              key={item.naam}
              type="button"
              aria-pressed={isGekozen}
              disabled={gecontroleerd}
              className={"kaart" + (!gecontroleerd && isGekozen ? " gekozen" : "") + (gecontroleerd ? " " + klasse : "")}
              onClick={() => onToggle(i)}
            >
              {gecontroleerd && <span className="label">{label}</span>}
              <span className="icoon">{item.icoon}</span>
              <span className="naam">{item.naam}</span>
              {gecontroleerd && <span className="uitleg">{item.uitleg}</span>}
            </button>
          );
        })}
      </div>
      <button type="button" className="actie" onClick={gecontroleerd ? onNext : onCheck}>
        {gecontroleerd ? (nr === totaal - 1 ? "Bekijk resultaat" : "Volgende ronde") : "Controleer"}
      </button>
    </>
  );
}
