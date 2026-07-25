import { analyseShirtImage } from './vision-model';
import { identifyShirt } from './shirt-identification';
import { checkAuthenticity } from './authenticity';

export async function analyseFootballShirt(imageUrl:string, features:string[]){
  const vision = await analyseShirtImage(imageUrl);
  const identity = identifyShirt(features);
  const authenticity = checkAuthenticity(features);

  return {
    vision,
    identity,
    authenticity,
    recommendation:'REVIEW'
  };
}
