export function rankOpportunities(listings:any[]){
  return listings.sort((a,b)=>(b.score ?? 0)-(a.score ?? 0));
}
