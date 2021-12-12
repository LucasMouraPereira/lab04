import styled from "styled-components";
import sizes from "utils/style/breakpoints";

export const Container = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 400ms ease-in;
  z-index: 999;
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  max-width: 286px;
  height: 250px;
  max-height: 100%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-color: var(--color-white-1);

  border-radius: 4px;
  padding: 10px;
  box-sizing: border-box;
  @media (max-width: ${sizes.md}) {
    border-radius: 8px;
  }
   {
    ${(style) => style}
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 15px;
  color: var(--color-black-1);
`;

export const Title = styled.h3`
  width: 100%;
  line-height: 32px;
  color: #333333;
  font-size: 21px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ModalClose = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  background-color: var(--color-white-2);
  color: var(--color-gray-7);
  font-size: 20px;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  font-weight: lighter;
  &:hover,
  &:focus {
    color: red;
    text-decoration: none;
    cursor: pointer;
  }
`;
