export interface Deal {
  title:string;
  profit:number;
  rarity:number;
  demand:number;
}

export function rankDeal(deal:Deal){
  const score = Math.round(
    Math.min(deal.profit / 2, 30) +
    deal.rarity * 0.25 +
    deal.demand * 0.25
  );

  return {
    ...deal,
    score
  };
}
