import DealTable from './components/DealTable';
import ProfitCard from './components/ProfitCard';
import AIRecommendation from './components/AIRecommendation';

export default function Dashboard(){
  const deals = [
    {
      title:'Manchester United 1999 Away Shirt',
      marketplace:'Vinted',
      buyPrice:65,
      estimatedValue:210,
      score:96
    }
  ];

  return (
    <main>
      <h1>FootballFlip AI Trading Dashboard</h1>
      <ProfitCard profit={145}/>
      <DealTable deals={deals}/>
      <AIRecommendation message="Retro Premier League shirts are showing strong demand. Monitor undervalued listings."/>
    </main>
  );
}
