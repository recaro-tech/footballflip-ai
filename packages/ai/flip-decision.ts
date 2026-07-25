export type Decision = 'BUY' | 'WATCH' | 'PASS';

export function makeFlipDecision(score:number):Decision{
  if(score >= 85) return 'BUY';
  if(score >= 60) return 'WATCH';
  return 'PASS';
}
