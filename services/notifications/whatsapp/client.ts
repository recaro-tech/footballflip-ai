export interface WhatsAppConfig {
  phoneNumberId:string;
  accessToken:string;
}

export function createWhatsAppClient(config:WhatsAppConfig){
  return {
    provider:'whatsapp',
    ready:Boolean(config.phoneNumberId && config.accessToken)
  };
}
