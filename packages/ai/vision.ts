export interface ShirtVisionResult {
  club: string;
  season: string;
  manufacturer?: string;
  confidence: number;
}

export async function analyseImage(imageUrl:string): Promise<ShirtVisionResult> {
  return {
    club: "Unknown",
    season: "Unknown",
    confidence: 0
  };
}
