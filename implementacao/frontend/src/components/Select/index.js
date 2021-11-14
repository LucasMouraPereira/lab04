import React from "react";
import PropTypes from "prop-types";
import { manageClasses } from "utils/helpers/renders";

import * as S from "./styled";

export const Select = ({
  error,
  label,
  name,
  onChange,
  options,
  width,
  ...attrs
}) => (
  <S.Flexbox flexDirection="column" width={width}>
    {label && <S.Label htmlFor={name}>{label}</S.Label>}
    <S.Select
      name={name}
      onChange={onChange}
      variant={manageClasses({ error })}
      {...attrs}
    >
      {options.map(({ text, id, value }) => (
        <S.Option key={id} value={value}>
          {text}
        </S.Option>
      ))}
    </S.Select>
    <S.Error>{error}</S.Error>
  </S.Flexbox>
);

Select.defaultProps = {
  error: "",
  onChange: () => {},
  width: "",
};

Select.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  width: PropTypes.string,
};