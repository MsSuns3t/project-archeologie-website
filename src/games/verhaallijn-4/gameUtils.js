export function rang(p) {
  if (p < 0.4) return "Tiro (rekruut)";
  if (p < 0.7) return "Miles (soldaat)";
  if (p < 0.9) return "Optio (onderofficier)";
  return "Centurio (aanvoerder)";
}

export function status(item, gekozen) {
  if (item.goed && gekozen) return ["goed", "✓ Juist gekozen"];
  if (!item.goed && gekozen) return ["fout", "✗ Fout: hoort er niet bij"];
  if (item.goed) return ["gemist", "! Gemist: hoorde er wel bij"];
  return ["neutraal", "Terecht weggelaten"];
}
