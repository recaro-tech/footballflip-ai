export interface SearchStrategy {
  clubs:string[];
  maxPrice:number;
  minimumScore:number;
  eras:string[];
}

export function createSearchStrategy(strategy:SearchStrategy){
  return {
    ...strategy,
    active:true
  };
}
