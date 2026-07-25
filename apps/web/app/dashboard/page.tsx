import OpportunityCard from '../../components/OpportunityCard';

export default function Dashboard(){
  return (
    <main>
      <h1>FootballFlip AI Dashboard</h1>

      <OpportunityCard
        shirt="Manchester United 1994 Home Shirt"
        buyPrice={45}
        value={150}
        score={94}
      />
    </main>
  );
}
