export interface ForecastResult {
  currentValue:number;
  predictedValue:number;
  confidence:number;
}

export function forecastPrice(currentValue:number, growthRate:number):ForecastResult {
  return {
    currentValue,
    predictedValue:Math.round(currentValue * (1 + growthRate)),
    confidence:50
  };
}
