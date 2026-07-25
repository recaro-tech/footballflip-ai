export default function ProfitCard({profit}:{profit:number}){
  return (
    <div>
      <h3>Potential Profit</h3>
      <p>£{profit}</p>
    </div>
  );
}
