import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const arrayKeysState = Object.keys(options);

  return (
    <>
      {arrayKeysState.map((key, index) => (
        <button key={index} type="button" name={key} onClick={onLeaveFeedback}>
          {key}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
