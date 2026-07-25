import { analyseImage } from './vision';

export async function analyseShirt(imageUrl:string){
  const identification = await analyseImage(imageUrl);

  return {
    ...identification,
    estimatedValue: 0,
    flipScore: 0,
    recommendation: "PENDING"
  };
}
