import React from 'react';
import PropTypes from 'prop-types';
import css from './ResetButton.module.css';

export const ResetButton = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" className={css.reset}>
      Reset Statistics
    </button>
  );
};


ResetButton.propTypes = {
  resetStatistics: PropTypes.func.isRequired,
};

export default ResetButton;
