import { searchEbay } from './ebay/search';
import { searchVinted } from './vinted/search';

export async function getDealFeed(query:string){
  const [ebay,vinted] = await Promise.all([
    searchEbay(query),
    searchVinted(query)
  ]);

  return [...ebay,...vinted];
}
