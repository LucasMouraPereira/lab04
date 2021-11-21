import styled from "styled-components";

export const ContentStudent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px 0;
  h1 {
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    margin-bottom: 20px;
    font-size: 41px;
    color: #333333;
    text-align: center;
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

export const WrapperTable = styled.div`
  width: 100%;
  max-width: 1186px;
  margin: 0 auto;
  tr {
    border-color: #333;
    vertical-align: middle;
  }
  th {
    color: #333;
  }
  td {
    text-align: center;
  }
`;
