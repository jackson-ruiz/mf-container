import React from "react";
import PropTypes from "prop-types";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <pre>
        LO SENTIMOS, PRESENTAMOS INTERMITENCIAS EN ESTE MOMENTO.. POR FAVOR SI
        EL PROBLEMA PERSISTE CONTACTAR CON SOPORTE TÉCNICO..
      </pre>
      {/* <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button> */}
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
