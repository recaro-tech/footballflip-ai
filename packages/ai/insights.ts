export function generateInsight(collectionValue:number, itemCount:number){
  return {
    summary:`Your collection contains ${itemCount} shirts valued at £${collectionValue}`,
    recommendation:'Continue monitoring market trends'
  };
}
