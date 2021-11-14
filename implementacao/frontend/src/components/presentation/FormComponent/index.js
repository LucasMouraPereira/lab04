import React from "react";
import PropTypes from "prop-types";

import * as Yup from "yup";
import { Formik, Form } from "formik";

import Input from "components/Input";
import Button from "components/Button";

const FormComponent = ({ user }) => {
  const initialValuesStudents = {
    name: "",
    // email: "",
    // password: "",
    // CPF: "",
    // RG: "",
    // streetAddress: "",
    // number: "",
    // complement: "",
    // neighborhood: "",
    // city: "",
  };
  const initialValuesCompany = {
    name: "",
    // email: "",
    // password: "",
    // CNPJ: "",
    // streetAddress: "",
    // number: "",
    // complement: "",
    // neighborhood: "",
    // city: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Campo obrigatório"),
    // email: Yup.string().email().required("Campo obrigatório"),
    // password: Yup.string().min(8).required("Campo obrigatório"),
    // CPF: Yup.string().min(11).required("Campo obrigatório"),
    // CNPJ: Yup.string().min(11).required("Campo obrigatório"),
    // RG: Yup.string().min(8).required("Campo obrigatório"),
    // streetAddress: Yup.string().required("Campo obrigatório"),
    // number: Yup.number().required("Campo obrigatório"),
    // complement: Yup.string().required("Campo obrigatório"),
    // neighborhood: Yup.string().required("Campo obrigatório"),
    // city: Yup.string().required("Campo obrigatório"),
  });

  return (
    <div>
      <Formik
        initialValues={user === "students" ? initialValuesStudents : initialValuesCompany}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, handleChange, values }) => (
          <Form>
            <Input
              label="Nome"
              onChange={handleChange}
              name="name"
              type="text"
              value={values.name}
              error={errors.name}
              width="100%"
            />
            {/* <S.Button> */}
            <Button name="Cadastrar" type="submit" mt="12px" />
            {/* </S.Button> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

FormComponent.propTypes = {
  user: PropTypes.string.isRequired,
};

export default FormComponent;
