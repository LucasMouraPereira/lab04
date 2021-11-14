import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import GlobalStyle from "utils/style/globalStyle";

const App = ({ Component, pageProps }) => {
  return(
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App
