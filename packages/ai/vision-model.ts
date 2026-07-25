export interface VisionResult {
  detectedObjects:string[];
  confidence:number;
}

export async function analyseShirtImage(imageUrl:string):Promise<VisionResult>{
  return {
    detectedObjects:['football shirt'],
    confidence:0
  };
}
