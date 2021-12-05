import React, { useState } from "react";

import table from "utils/mocks/table.json";
import benefitsTable from "utils/mocks/benefitsTable.json";

import TableComponent from "components/presentation/TableComponent";
import FormBenefits from "components/presentation/FormBenefits";
import Button from "components/Button";
import Modal from "components/Modal";

import ArrowBack from "static/images/svg/arrow-left.svg";

import * as S from "./styled";

const Company = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.ContentStudent>
      <h1>Área do Empresa</h1>
      <S.WrapperTable>
        <a href="/">
          <ArrowBack />
          Voltar para o cadastro
        </a>
        <TableComponent table={table} type="default" />
        <div>
          <Button
            name="Registrar Vantagem"
            type="button"
            onClick={() => setIsOpen(true)}
            mt="12px"
          />
          <S.WrapperBenefits>
            {benefitsTable.tableBody.length > 0 && (
              <TableComponent table={benefitsTable} type="default" />
            )}
          </S.WrapperBenefits>
        </div>
      </S.WrapperTable>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} content={<FormBenefits />} />
    </S.ContentStudent>
  );
};

export default Company;
