type OpportunityCardProps = {
  shirt: string;
  buyPrice: number;
  value: number;
  score: number;
};

export default function OpportunityCard({
  shirt,
  buyPrice,
  value,
  score
}: OpportunityCardProps) {
  const profit = value - buyPrice;

  return (
    <div>
      <h3>{shirt}</h3>
      <p>Buy: £{buyPrice}</p>
      <p>Value: £{value}</p>
      <p>Profit: £{profit}</p>
      <p>Flip Score: {score}/100</p>
    </div>
  );
}
