export interface SavedSearch {
  id:string;
  userId:string;
  query:string;
  club?:string;
  era?:string;
  maxPrice?:number;
  minimumScore?:number;
}

export function matchesSearch(search:SavedSearch, listing:{title:string;price:number;score:number}){
  if(search.maxPrice && listing.price > search.maxPrice) return false;
  if(search.minimumScore && listing.score < search.minimumScore) return false;

  if(search.club && !listing.title.toLowerCase().includes(search.club.toLowerCase())) {
    return false;
  }

  return true;
}
