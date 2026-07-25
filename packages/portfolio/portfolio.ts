export interface PortfolioItem {
  id:string;
  shirt:string;
  purchasePrice:number;
  currentValue:number;
}

export function getPortfolioValue(items:PortfolioItem[]){
  return items.reduce((total,item)=>total + item.currentValue,0);
}

export function getInvestmentCost(items:PortfolioItem[]){
  return items.reduce((total,item)=>total + item.purchasePrice,0);
}
