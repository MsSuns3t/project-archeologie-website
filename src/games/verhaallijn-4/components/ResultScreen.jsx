import { rang } from "../gameUtils.js";

export default function ResultScreen({ score, max, onRestart }) {
  return (
    <>
      <h2>Ave! Je eindresultaat</h2>
      <p className="groot">{score} van {max} punten</p>
      <p className="opdracht">Je rang: {rang(score / max)}. Fout gekozen onderdelen kosten een punt.</p>
      <button type="button" className="actie" onClick={onRestart}>Speel opnieuw</button>
    </>
  );
}
