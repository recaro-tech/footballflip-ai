export function calculateCounterfeitRisk(scores:number[]){
  if(scores.length===0) return 0;

  return Math.round(scores.reduce((a,b)=>a+b,0)/scores.length);
}
