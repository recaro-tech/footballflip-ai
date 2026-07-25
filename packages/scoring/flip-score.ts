export interface FlipInput {
  purchasePrice: number;
  estimatedValue: number;
  rarityScore: number;
  demandScore: number;
  confidenceScore: number;
}

export interface FlipResult {
  score: number;
  recommendation: string;
  estimatedProfit: number;
}

export function calculateFlipScore(input: FlipInput): FlipResult {
  const profit = input.estimatedValue - input.purchasePrice;

  const profitScore = Math.min(Math.max((profit / Math.max(input.purchasePrice, 1)) * 40, 0), 40);
  const rarity = Math.min(Math.max(input.rarityScore * 0.25, 0), 25);
  const demand = Math.min(Math.max(input.demandScore * 0.2, 0), 20);
  const confidence = Math.min(Math.max(input.confidenceScore * 0.15, 0), 15);

  const score = Math.round(profitScore + rarity + demand + confidence);

  let recommendation = "PASS";

  if (score >= 90) recommendation = "BUY";
  else if (score >= 75) recommendation = "WATCH";

  return {
    score,
    recommendation,
    estimatedProfit: profit
  };
}
