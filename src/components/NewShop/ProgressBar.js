import React from 'react';

import './ProgressBar.css';

function ProgressBar(props) {
  const { step } = props;
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ width: `${(step/5)*100}%` }}
      ></div>
      <span className="progress-bar-label">{step}/5</span>
    </div>
  );
}

export default ProgressBar;