export interface AlertRule {
  minimumScore:number;
  maxPrice:number;
}

export function shouldAlert(rule:AlertRule, deal:{score:number;buyPrice:number}){
  return deal.score >= rule.minimumScore && deal.buyPrice <= rule.maxPrice;
}
