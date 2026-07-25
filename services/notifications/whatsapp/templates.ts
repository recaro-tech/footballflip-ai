export function dealAlertTemplate(deal:any){
  return `⚽ FootballFlip AI Deal Found\n\n${deal.title}\n\nBuy: £${deal.buyPrice}\nValue: £${deal.marketValue}\nScore: ${deal.score}/100`;
}
