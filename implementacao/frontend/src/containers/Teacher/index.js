import React, { useState } from "react";

import table from "utils/mocks/table.json";
import tableListStudents from "utils/mocks/tableListStudents.json";
import tableExtracts from "utils/mocks/tableExtracts.json";
import TableComponent from "components/presentation/TableComponent";
import Balance from "components/presentation/Balance";
import Button from "components/Button";
import Modal from "components/Modal";

import ArrowBack from "static/images/svg/arrow-left.svg";

import * as S from "./styled";

const Teacher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const customStyle = {
    maxWidth: "720px",
    height: "550px",
  };
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
        <div>
          <Button
            name="Visualizar extrato"
            type="button"
            onClick={() => {
              setIsOpen(true);
            }}
          />
        </div>
      </S.WrapperTable>
      <Modal
        title="Extrato"
        style={customStyle}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        content={<TableComponent table={tableExtracts} type="extracts" />}
      />
    </S.ContentStudent>
  );
};

export default Teacher;
