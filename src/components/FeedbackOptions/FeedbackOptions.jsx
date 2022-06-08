import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map((key, index) => (
        <button key={index} type="button" name={key} onClick={onLeaveFeedback}>
          {key}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
