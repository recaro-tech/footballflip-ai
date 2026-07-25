export async function analyseShirt(imageUrl:string){
  return fetch('/api/analyse',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({imageUrl})
  });
}
