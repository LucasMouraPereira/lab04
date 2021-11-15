import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const Button = ({
  as,
  name,
  onClick,
  onMouseUp,
  onTouchEnd,
  type,
  variant,
  style,
  className,
}) => (
  <S.Button
    as={as}
    variant={variant}
    onClick={onClick}
    onMouseUp={onMouseUp}
    onTouchEnd={onTouchEnd}
    type={type}
    style={style}
    className={className}
  >
    {name}
  </S.Button>
);

Button.defaultProps = {
  name: "Type my name",
  type: "button",
  variant: [],
  as: "button",
  onClick: () => {},
  onMouseUp: () => {},
  onTouchEnd: () => {},
  style: {},
  className: "",
};

Button.propTypes = {
  as: PropTypes.string,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  onClick: PropTypes.func,
  onMouseUp: PropTypes.func,
  onTouchEnd: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.arrayOf(PropTypes.string),
  style: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
};

export default Button;
