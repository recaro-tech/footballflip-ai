export function calculateMarketAverage(prices:number[]){
  if(prices.length===0) return 0;

  const total = prices.reduce((sum,price)=>sum+price,0);

  return Math.round(total / prices.length);
}
