/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import api from "utils/api";

import InputChangeRegister from "components/presentation/InputChangeRegister";
import Button from "components/Button";
import Modal from "components/Modal";

import * as S from "./styled";

const TableComponent = ({ table, type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const deletedRegistration = async (id) => {
    await api.delete(`/deleteUser/${id}`);
  };

  const deletedBenefits = async (id) => {
    await api.delete(`/deleteBenefit/${id}`);
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            {table?.tableHeader?.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {table?.tableBody.map((body) => (
              <>
                {body.id && <td>{body.id}</td>}
                {body.name && <td>{body.name}</td>}
                {body.type && <td>{body.type}</td>}
                {body.password && <td>{body.password}</td>}
                {body.value && <td>{body.value}</td>}
                <S.Td>
                  <S.Button1>
                    <Button
                      name="Excluir"
                      type="button"
                      onClick={() => {
                        body.value ? deletedBenefits(body.id) : deletedRegistration(body.id);
                      }}
                      mt="8px"
                    />
                  </S.Button1>
                </S.Td>
                <S.Td>
                  <S.Button2>
                    <Button
                      name="Alterar"
                      type="button"
                      onClick={() => {
                        setIsOpen(true);
                        setCurrentId(body.id);
                      }}
                      mt="8px"
                    />
                  </S.Button2>
                </S.Td>
              </>
            ))}
          </tr>
        </tbody>
      </Table>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        content={<InputChangeRegister id={currentId} type={type} />}
      />
    </>
  );
};

TableComponent.propTypes = {
  table: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
};

export default TableComponent;
