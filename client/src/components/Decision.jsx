import React from 'react'

const Decision = ({ decision }) => {
  return (
    <div>
      <p>Decision: {decision.info}</p>
      <p>Max Amount: {decision.maxAmount}</p>
      <p>Period: {decision.minPeriod}</p>
    </div>
  );
};

export default Decision