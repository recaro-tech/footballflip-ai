import { analyseShirt } from '../../../../../packages/ai/analysis';

export async function POST(request:Request){
  const body = await request.json();

  const result = await analyseShirt(body.imageUrl);

  return Response.json(result);
}
