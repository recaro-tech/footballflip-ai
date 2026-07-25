export function calculateUndervalue(listPrice:number, marketValue:number){
  if(marketValue <= 0) return 0;

  return Math.round(((marketValue - listPrice) / marketValue) * 100);
}
