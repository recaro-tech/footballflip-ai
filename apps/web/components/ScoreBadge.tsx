type ScoreBadgeProps = {
  score:number;
};

export default function ScoreBadge({score}:ScoreBadgeProps){
  const label = score >= 90 ? '🔥 BUY' : score >= 75 ? '⭐ WATCH' : 'PASS';

  return (
    <span>
      {label} ({score}/100)
    </span>
  );
}
