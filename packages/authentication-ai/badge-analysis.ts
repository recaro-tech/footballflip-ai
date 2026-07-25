export interface BadgeAnalysis {
  score:number;
  issues:string[];
}

export function analyseBadge(details:string[]):BadgeAnalysis{
  return {
    score:0,
    issues:details
  };
}
