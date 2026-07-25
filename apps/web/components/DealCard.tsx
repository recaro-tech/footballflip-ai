export default function DealCard({deal}:{deal:{title:string;price:number;score:number}}){
  return (
    <article>
      <h2>{deal.title}</h2>
      <p>Buy: £{deal.price}</p>
      <p>Flip Score: {deal.score}/100</p>
    </article>
  );
}
