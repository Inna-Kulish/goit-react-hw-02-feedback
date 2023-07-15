import { StatList, StatItem } from "./Statistics.styled";
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      {total ? (
        <StatList>
          <StatItem>good: {good}</StatItem>
          <StatItem>neutral: {neutral}</StatItem>
          <StatItem>bad: {bad}</StatItem>
          <StatItem>total: {total}</StatItem>
          <StatItem>Positive feedback: {positivePercentage}%</StatItem>
        </StatList>
      ) : (
        <p>There is no feedback</p>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

export { Statistics };
