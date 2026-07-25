export interface ValuationInput {
  marketAverage: number;
  rarityMultiplier: number;
  demandMultiplier: number;
}

export function estimateValue(input: ValuationInput): number {
  return Math.round(
    input.marketAverage *
    input.rarityMultiplier *
    input.demandMultiplier
  );
}
