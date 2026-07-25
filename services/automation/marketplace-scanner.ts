export interface ScanRequest {
  query:string;
  maxPrice:number;
}

export async function scanMarketplaces(request:ScanRequest){
  return {
    query:request.query,
    maxPrice:request.maxPrice,
    listings:[]
  };
}
