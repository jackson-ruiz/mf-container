import React from "react";
import PropTypes from "prop-types";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error }) => {
  console.log(`Error presentado: ${error.message}`);
  return (
    <div role="alert">
      <p>
        LO SENTIMOS, PRESENTAMOS INTERMITENCIAS EN ESTE MOMENTO.. POR FAVOR SI
        EL PROBLEMA PERSISTE CONTACTAR CON SOPORTE TÉCNICO..
        <br />
        Por favor intenta refrescar el navegador..
      </p>
    </div>
  );
};

export const ErrorManagement = (props) => {
  const { children } = props;
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

ErrorManagement.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorManagement;
