import React from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import api from "utils/api";

import { useRouter } from "next/router";
import { STUDENT, COMPANY } from "utils/constants/urls";

import * as Yup from "yup";
import { Formik, Form } from "formik";

import Input from "components/Input";
import Button from "components/Button";

import * as S from "./styled";

const FormComponent = ({ user }) => {
  const router = useRouter();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    cpf: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email().required("Campo obrigatório"),
    password: Yup.string().min(8).required("Campo obrigatório"),
    cpf: Yup.string().min(11).required("Campo obrigatório"),
  });

  const onSubmit = async (values) => {
    try {
      if (user === 0) {
        const { data } = await api.post("/signUp/student", {
          email: values.email,
          password: values.password,
        });
        Cookies.set("id", JSON.stringify(data.id));
        Cookies.set("email", JSON.stringify(data.email));
        Cookies.set("password", JSON.stringify(data.password));
        Cookies.set("type", JSON.stringify(data.type));
        router.push(STUDENT);
      }
      if (user === 1) {
        const { data } = await api.post("/signUp/company", {
          email: values.email,
          password: values.password,
        });
        Cookies.set("id", JSON.stringify(data.id));
        Cookies.set("email", JSON.stringify(data.email));
        Cookies.set("password", JSON.stringify(data.password));
        Cookies.set("type", JSON.stringify(data.type));
        router.push(COMPANY);
      }
    } catch (error) {
      console.info(error);
    }
  };

  return (
    <S.WrapperForm>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ errors, handleChange, values }) => (
          <Form>
            <S.FlexForm>
              <S.WrapperInput>
                <Input
                  placeholder={user === 0 ? "Nome do Aluno" : "Nome da Empresa"}
                  onChange={handleChange}
                  name="name"
                  type="text"
                  value={values.name}
                  error={errors.name}
                  width="100%"
                />
                <Input
                  placeholder={user === 0 ? "Email do Aluno" : "Email do institucional"}
                  onChange={handleChange}
                  name="email"
                  type="email"
                  value={values.email}
                  error={errors.email}
                  width="100%"
                />
                <Input
                  placeholder="Senha"
                  onChange={handleChange}
                  name="password"
                  type="password"
                  value={values.password}
                  error={errors.password}
                  width="100%"
                />
                <Input
                  placeholder={user === 0 ? "CPF" : "CNPJ"}
                  onChange={handleChange}
                  name="cpf"
                  type="text"
                  value={values.cpf}
                  error={errors.cpf}
                  width="100%"
                />
              </S.WrapperInput>
            </S.FlexForm>
            <S.Button>
              <Button name="Cadastrar" type="submit" mt="12px" />
            </S.Button>
          </Form>
        )}
      </Formik>
    </S.WrapperForm>
  );
};

FormComponent.propTypes = {
  user: PropTypes.number.isRequired,
};

export default FormComponent;
