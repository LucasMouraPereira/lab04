import React from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import api from "utils/api";

import * as Yup from "yup";
import { Formik, Form } from "formik";

import Input from "components/Input";
import Button from "components/Button";

const FormDeposit = ({ id }) => {
  const initialValues = {
    deposit: "",
  };

  const validationSchema = Yup.object().shape({
    deposit: Yup.number().required("Campo obrigatório"),
  });

  const onSubmit = async (values) => {
    try {
      await api.put(`/updateDeposit/${id}`, { depoist: values.deposit });
      Router.reload(window.location.pathname);
    } catch (error) {
      console.info(error);
    }
  };

  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ errors, handleChange, values }) => (
          <Form>
            <Input
              placeholder="Depositar"
              onChange={handleChange}
              name="price"
              type="text"
              error={errors.deposit}
              value={values.deposit}
              width="100%"
            />
            <div>
              <Button name="Depositar valor" type="submit" mt="12px" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

FormDeposit.propTypes = {
  id: PropTypes.number.isRequired,
};

export default FormDeposit;
