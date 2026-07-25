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
    },
    {
      title:'Arsenal 2004 Invincibles Home Shirt',
      marketplace:'eBay',
      buyPrice:80,
      estimatedValue:220,
      score:91
    }
  ];

  return (
    <main>
      <h1>FootballFlip AI Trading Dashboard</h1>
      <ProfitCard profit={285}/>
      <DealTable deals={deals}/>
      <AIRecommendation message="Two high-potential retro shirt opportunities identified. Review authenticity before purchase."/>
    </main>
  );
}
