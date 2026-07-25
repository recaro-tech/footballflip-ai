export interface AuthUser {
  id:string;
  email:string;
  name?:string;
  createdAt:Date;
}

export function createProfile(user:AuthUser){
  return {
    ...user,
    role:'collector'
  };
}
