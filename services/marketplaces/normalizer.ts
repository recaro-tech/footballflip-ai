import { MarketplaceListing } from './listing';

export function normalizeListing(input:any):MarketplaceListing {
  return {
    id: String(input.id ?? crypto.randomUUID()),
    marketplace: input.marketplace ?? 'unknown',
    title: input.title ?? '',
    price: Number(input.price ?? 0),
    currency: input.currency ?? 'GBP',
    imageUrl: input.imageUrl,
    url: input.url ?? ''
  };
}
