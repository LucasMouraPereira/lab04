import React from "react";
import PropTypes from "prop-types";

const Balance = ({ balance = 1000 }) => {
  return (
    <div>
      <span>Saldo: </span>
      <strong>{`${balance} merit`}</strong>
    </div>
  );
};

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
};

export default Balance;
