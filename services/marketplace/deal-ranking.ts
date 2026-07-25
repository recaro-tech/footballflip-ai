export type DealDecision = 'BUY' | 'WATCH' | 'PASS';

export interface DealInput {
  purchasePrice:number;
  estimatedValue:number;
  authenticityScore:number;
  rarityScore:number;
  demandScore:number;
}

export function calculateFlipScore(deal:DealInput){
  const profitFactor = Math.min(100, Math.max(0, ((deal.estimatedValue - deal.purchasePrice) / deal.purchasePrice) * 100));

  return Math.round(
    (profitFactor * 0.35) +
    (deal.authenticityScore * 0.25) +
    (deal.rarityScore * 0.2) +
    (deal.demandScore * 0.2)
  );
}

export function getDecision(score:number):DealDecision{
  if(score >= 90) return 'BUY';
  if(score >= 75) return 'WATCH';
  return 'PASS';
}
