export interface EbayConfig {
  clientId: string;
  clientSecret: string;
}

export class EbayClient {
  constructor(private config:EbayConfig) {}

  async search(query:string){
    return [];
  }
}
