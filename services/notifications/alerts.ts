export interface Alert {
  userId:string;
  listingId:string;
  message:string;
  createdAt:Date;
}

export function createAlert(userId:string, listingId:string):Alert {
  return {
    userId,
    listingId,
    message:'New FootballFlip opportunity found',
    createdAt:new Date()
  };
}
