export interface MarketplaceListing {
  id: string;
  marketplace: string;
  title: string;
  price: number;
  currency: string;
  imageUrl?: string;
  url: string;
}
