import React, { useState } from "react";

import table from "utils/mocks/table.json";
import benefitsTable from "utils/mocks/benefitsTable.json";

import TableComponent from "components/presentation/TableComponent";
import Button from "components/Button";
import Modal from "components/Modal";

import * as S from "./styled";

const Company = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.ContentStudent>
      <h1>Área do Empresa</h1>
      <S.WrapperTable>
        <a href="/">Voltar para o cadastro</a>
        <TableComponent table={table} type="default" />
        <div>
          <Button
            name="Registrar Vantagem"
            type="button"
            onClick={() => setIsOpen(true)}
            mt="12px"
          />
          {benefitsTable.tableBody.length > 0 && <TableComponent table={benefitsTable} type="benefits" />}
        </div>
      </S.WrapperTable>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} content={<p>Lucas</p>} />
    </S.ContentStudent>
  );
};

export default Company;
