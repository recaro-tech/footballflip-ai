export function getRecommendation(score: number): string {
  if (score >= 90) return "🔥 BUY";
  if (score >= 75) return "⭐ WATCH";
  return "PASS";
}
