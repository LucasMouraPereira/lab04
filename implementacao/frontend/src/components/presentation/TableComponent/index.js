import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import api from "utils/api";

import Button from "components/Button";

import * as S from "./styled";

const TableComponent = ({ table }) => {
  const deletedRegistration = async (id) => {
    await api.delete(`/deleteUser/${id}`);
  };

  const changeRegistration = async (id) => {
    await api.put(`/updatePassword/${id}`);
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
            {table?.tableBody.map(({ id, name, type, password }) => (
              <>
                <td>{id}</td>
                <td>{name}</td>
                <td>{type}</td>
                <td>{password}</td>
                <S.Td>
                  <S.Button1>
                    <Button
                      name="Excluir"
                      type="button"
                      onClick={() => deletedRegistration(id)}
                      mt="8px"
                    />
                  </S.Button1>
                </S.Td>
                <S.Td>
                  <S.Button2>
                    <Button
                      name="Alterar"
                      type="button"
                      onClick={() => changeRegistration(id)}
                      mt="8px"
                    />
                  </S.Button2>
                </S.Td>
              </>
            ))}
          </tr>
        </tbody>
      </Table>
    </>
  );
};

TableComponent.propTypes = {
  table: PropTypes.any.isRequired,
};

export default TableComponent;
