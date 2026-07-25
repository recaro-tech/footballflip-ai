export interface ValuationInput {
  purchasePrice:number;
  marketValue:number;
}

export function calculatePotentialProfit(input:ValuationInput){
  return {
    profit: input.marketValue - input.purchasePrice,
    margin: input.purchasePrice > 0 ? Math.round(((input.marketValue-input.purchasePrice)/input.purchasePrice)*100) : 0
  };
}
