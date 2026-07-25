export interface RecommendationInput {
  budget:number;
  favouriteClubs:string[];
  minimumScore:number;
}

export interface Recommendation {
  action:string;
  reason:string;
}

export function recommendPurchase(input:RecommendationInput):Recommendation {
  return {
    action:'SEARCH',
    reason:`Find shirts matching budget £${input.budget} with score above ${input.minimumScore}`
  };
}
