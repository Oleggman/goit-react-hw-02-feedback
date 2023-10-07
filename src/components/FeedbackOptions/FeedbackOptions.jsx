export const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <div>
      {options.map(item =>
        <button key={item} type="button" onClick={onLeaveFeedback}>{item}</button>)}
    </div>
  );
}