import React from "react";

import table from "utils/mocks/table.json";
import tableListStudents from "utils/mocks/tableListStudents.json";
import TableComponent from "components/presentation/TableComponent";
import Balance from "components/presentation/Balance";

import ArrowBack from "static/images/svg/arrow-left.svg";

import * as S from "./styled";

const Teacher = () => {
  return (
    <S.ContentStudent>
      <h1>Área do Professor</h1>
      <S.WrapperTable>
        <a href="/">
          <ArrowBack />
          Voltar para o cadastro
        </a>
        <TableComponent table={table} type="default" />
        <Balance />
        <TableComponent table={tableListStudents} type="listStudents" />
      </S.WrapperTable>
    </S.ContentStudent>
  );
};

export default Teacher;
