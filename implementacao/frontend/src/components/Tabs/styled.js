import styled from "styled-components";

export const Title = styled.div`
  width: 100%;
  padding: 6px;
  text-align: center;
  margin-bottom: 20px;
  border-bottom: 2px solid;
  border-color: ${({ active }) => active ? "blue" : "#CCCCCC"};
  transition: all .5s;
  cursor: pointer;
  & h3 {
    font-weight: ${({ active }) => active ? "bold" : "normal"};
    font-size: 16px;
    line-height: 26px;
    color: ${({ active }) => active ? "blue" : "#333333"};
  };
`;

export const Content = styled.div`
  display: ${({ active }) => active ? "block" : "none"},
`;
