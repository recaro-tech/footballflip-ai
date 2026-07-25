import { rankDeal } from './ranking';

export function huntDeals(deals:any[]){
  return deals
    .map(rankDeal)
    .sort((a,b)=>b.score-a.score);
}
