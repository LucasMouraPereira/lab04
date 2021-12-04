import React from "react";

import table from "utils/mocks/table.json";
import TableComponent from "components/presentation/TableComponent";

import * as S from "./styled";

const Teacher = () => {
  return (
    <S.ContentStudent>
      <h1>Área do Professor</h1>
      <S.WrapperTable>
        <TableComponent table={table} type="default" />
        <div>
          <span>Saldo: </span>
          <strong>{`${1000} merit`}</strong>
        </div>
        <a href="/">Voltar para o cadastro</a>
      </S.WrapperTable>
    </S.ContentStudent>
  );
};

export default Teacher;
