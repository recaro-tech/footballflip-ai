export interface ArbitrageResult {
  buyPrice:number;
  marketValue:number;
  profit:number;
  margin:number;
}

export function calculateArbitrage(buyPrice:number, marketValue:number):ArbitrageResult {
  const profit = marketValue - buyPrice;

  return {
    buyPrice,
    marketValue,
    profit,
    margin: buyPrice > 0 ? Math.round((profit / buyPrice) * 100) : 0
  };
}
