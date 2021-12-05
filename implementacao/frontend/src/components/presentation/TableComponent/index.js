/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import api from "utils/api";

import InputChangeRegister from "components/presentation/InputChangeRegister";
import FormDeposit from "components/presentation/FormDeposit";
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

  const buyBenefits = async (id) => {
    await api.put(`/buyBenefit/${id}`);
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
          {table?.tableBody.map((body) => (
            <tr>
              {body.id && <td>{body.id}</td>}
              {body.company && <td>{body.company}</td>}
              {body.name && <td>{body.name}</td>}
              {body.type && <td>{body.type}</td>}
              {body.password && <td>{body.password}</td>}
              {body.value && <td>{body.value}</td>}
              {body.balance && <td>{body.balance}</td>}
              {type === "listStudents" && (
                <S.Td>
                  <S.Button1>
                    <Button
                      name="Depositar"
                      type="button"
                      onClick={() => {
                        setIsOpen(true);
                        setCurrentId(body.id);
                      }}
                      mt="8px"
                    />
                  </S.Button1>
                </S.Td>
              )}
              {type === "listBenefits" && (
                <S.Td>
                  <S.Button1>
                    <Button
                      name="Comprar"
                      type="button"
                      onClick={() => buyBenefits(body.id)}
                      mt="8px"
                    />
                  </S.Button1>
                </S.Td>
              )}
              {type === "default" && (
                <>
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
              )}
            </tr>
          ))}
        </tbody>
      </Table>
      {type === "listStudents" ? (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} content={<FormDeposit id={currentId} />} />
      ) : (
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          content={<InputChangeRegister id={currentId} type={type} />}
        />
      )}
    </>
  );
};

TableComponent.propTypes = {
  table: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
};

export default TableComponent;
