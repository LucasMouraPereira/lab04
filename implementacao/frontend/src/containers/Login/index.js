import React from "react";

import LoginComponent from "components/presentation/LoginComponent"

import * as S from "./styled";

const Login = () => (
  <S.ContentLogin>
    <S.WrapperLogin>
      <h1>Merit Money</h1>
      <h2>Entre no sistema</h2>
      <div>
        <LoginComponent />
      </div>
      <a href="/">Voltar para o cadastro</a>
    </S.WrapperLogin>
  </S.ContentLogin>
);

export default Login;
