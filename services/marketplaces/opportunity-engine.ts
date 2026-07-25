import { MarketplaceListing } from './listing';

export interface Opportunity {
  listing: MarketplaceListing;
  estimatedValue:number;
  profit:number;
  score:number;
}

export function createOpportunity(listing:MarketplaceListing, estimatedValue:number):Opportunity {
  const profit = estimatedValue - listing.price;

  return {
    listing,
    estimatedValue,
    profit,
    score: Math.min(Math.max(Math.round((profit / Math.max(listing.price,1))*100),0),100)
  };
}
