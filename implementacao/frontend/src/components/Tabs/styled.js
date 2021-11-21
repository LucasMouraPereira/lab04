import styled from "styled-components";

export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContentTab = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const WrapperTab = styled.div`
  width: 100%;
  max-width: 560px;
`;

export const Title = styled.div`
  padding: 6px;
  text-align: center;
  margin-bottom: 20px;
  border-bottom: 2px solid;
  border-color: ${({ active }) => (active ? "blue" : "#CCCCCC")};
  transition: all 0.5s;
  cursor: pointer;
  & h3 {
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
    font-size: 16px;
    line-height: 26px;
    color: ${({ active }) => (active ? "blue" : "#333333")};
  }
`;

export const Content = styled.div`
  display: ${({ active }) => (active ? "flex" : "none")};
`;
