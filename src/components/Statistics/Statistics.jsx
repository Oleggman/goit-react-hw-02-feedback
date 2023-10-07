export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <div>
      <h3>Statistics</h3>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive percentage: {Math.round(positivePercentage * 100)}%</p>
    </div>
  );
}