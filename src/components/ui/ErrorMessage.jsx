import React from "react";
import styleform from "../../components/screens/create-car/createcar.module.css";

const ErrorMessage = ({ error }) => {
  if (!error) return null;
  return <p className={styleform.required}>{error}</p>;
};

export default ErrorMessage;
