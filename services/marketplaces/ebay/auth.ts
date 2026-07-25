export interface EbayCredentials {
  clientId:string;
  clientSecret:string;
}

export function createEbayAuth(credentials:EbayCredentials){
  return {
    provider:'ebay',
    ready:Boolean(credentials.clientId && credentials.clientSecret)
  };
}
