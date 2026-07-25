export interface AuthenticityResult {
  score:number;
  signals:string[];
}

export function checkAuthenticity(details:string[]):AuthenticityResult{
  return {
    score:0,
    signals:details
  };
}
