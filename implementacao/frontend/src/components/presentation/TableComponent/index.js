/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
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
  const [bodyUser, setBodyUser] = useState([]);
  const [listStudents, setListStudents] = useState([]);

  const deletedRegistration = async (id) => {
    Cookies.remove("id");
    Cookies.remove("email");
    Cookies.remove("type");
    Cookies.remove("password");
    await api.delete(`/deleteUser/${id}`);
  };

  const deletedBenefits = async (id) => {
    await api.delete(`/deleteBenefit/${id}`);
  };

  const buyBenefits = async (id) => {
    await api.put(`/buyBenefit/${id}`);
  };

  useEffect(() => {
    const id = Cookies.get("id");
    const email = Cookies.get("email");
    const typeUser = Cookies.get("type");
    const password = Cookies.get("password");

    setBodyUser([
      {
        id,
        name: email,
        type: typeUser,
        password,
      },
    ]);
  }, []);

  useEffect(() => {
    const studentList = async () => {
      const { data } = await api.get("/student/");
      setListStudents(data);
    };
    studentList();
  }, []);

  const handleTotalValue = (bodyValue) => {
    return (
      table?.tableBody.reduce((acc, atualValue) => {
        return acc + atualValue.value;
      }, 0) -
      (table?.tableBody.reduce((acc, atualValue) => {
        return acc + atualValue.value;
      }, 0) -
        bodyValue)
    );
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
          {type === "default" &&
            bodyUser.map((body) => (
              <tr>
                <td>{body.id}</td>
                <td>{body.name}</td>
                <td>{body.type}</td>
                <td>{body.password}</td>
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
              </tr>
            ))}

          {type === "listStudents" &&
            listStudents.map((body) => (
              <tr>
                <td>{body.id}</td>
                <td>{body.email}</td>
                <td>{body.balance || 50}</td>
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
              </tr>
            ))}

          {type === "registerBenefits" &&
            table?.tableBody.map((body) => (
              <tr>
                <td>{body.id}</td>
                <td>{body.name}</td>
                <td>{body.value}</td>
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
              </tr>
            ))}

          {type === "listBenefits" &&
            table?.tableBody.map((body) => (
              <tr>
                <td>{body.id}</td>
                <td>{body.company}</td>
                <td>{body.name}</td>
                <td>{body.value}</td>
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
              </tr>
            ))}

          {type === "extracts" &&
            table?.tableBody.map((body) => (
              <tr>
                <td>{body.date}</td>
                <td>{body.description}</td>
                <td>{body.value}</td>
                <td>{handleTotalValue(body.value)}</td>
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
