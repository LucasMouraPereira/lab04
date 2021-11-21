import React from "react";

import table from "utils/mocks/table.json";
import TableComponent from "components/presentation/TableComponent";

import * as S from "./styled";

const Student = () => {
  return (
    <S.ContentStudent>
      <h1>Área do Aluno</h1>
      <S.WrapperTable>
        <TableComponent table={table} />
        <a href="/">Voltar para o cadastro</a>
      </S.WrapperTable>
      
    </S.ContentStudent>
  );
};

export default Student;
