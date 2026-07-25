export async function sendWhatsAppAlert(phone:string, message:string){
  return {
    destination:phone,
    message,
    status:'queued'
  };
}
