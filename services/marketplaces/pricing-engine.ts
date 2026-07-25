import { calculateMarketAverage } from '../../packages/pricing/market-average';
import { calculateUndervalue } from '../../packages/pricing/undervalue';

export function analyseMarketPrice(prices:number[], listingPrice:number){
  const average = calculateMarketAverage(prices);

  return {
    marketAverage: average,
    undervaluePercentage: calculateUndervalue(listingPrice, average)
  };
}
