export function calculateROI(purchasePrice:number, currentValue:number){
  if(purchasePrice <= 0) return 0;

  return Math.round(((currentValue - purchasePrice) / purchasePrice) * 100);
}
