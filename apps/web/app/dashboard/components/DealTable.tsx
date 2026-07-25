type Deal = {
  title:string;
  marketplace:string;
  buyPrice:number;
  estimatedValue:number;
  score:number;
};

export default function DealTable({deals}:{deals:Deal[]}){
  return (
    <section>
      <h2>Top Opportunities</h2>
      {deals.map((deal)=>(
        <div key={deal.title}>
          <strong>{deal.title}</strong>
          <p>{deal.marketplace} · Buy £{deal.buyPrice} · Value £{deal.estimatedValue} · Score {deal.score}</p>
        </div>
      ))}
    </section>
  );
}
