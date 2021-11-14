import React from "react";
import PropTypes from "prop-types";
import { manageClasses } from "utils/helpers/renders";

import * as S from "./styled";

const Input = ({
  error,
  label,
  name,
  onChange,
  onMouseUp,
  onTouchEnd,
  placeholder,
  type,
  value,
  width,
  disabled,
  ...attrs
}) => (
  <S.Flexbox flexDirection="column" width={width}>
    {label && <S.Label htmlFor={name}>{label}</S.Label>}
    <S.Input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onMouseUp={onMouseUp}
      onTouchEnd={onTouchEnd}
      placeholder={placeholder}
      variant={manageClasses({ error })}
      disabled={disabled}
      {...attrs}
    />
    <S.Error>{error}</S.Error>
  </S.Flexbox>
);

Input.defaultProps = {
  error: "",
  onChange: () => {},
  onMouseUp: () => {},
  onTouchEnd: () => {},
  placeholder: "",
  width: "",
  disabled: false,
};

Input.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onMouseUp: PropTypes.func,
  onTouchEnd: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  width: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Input;