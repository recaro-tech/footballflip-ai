export interface ShirtIdentity {
  club:string;
  season:string;
  manufacturer:string;
  confidence:number;
}

export function identifyShirt(features:string[]):ShirtIdentity{
  return {
    club:'Unknown',
    season:'Unknown',
    manufacturer:'Unknown',
    confidence:0
  };
}
