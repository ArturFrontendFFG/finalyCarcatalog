import { generate } from "@wcj/generate-password";
import React from "react";

const Input = ({ placeholder, type, register, autocomplete,value,setValue}) => {
 
  return (
    <>
      <input
        onFocus={() => setValue ? setValue(generate()) : ''}
        autoComplete={autocomplete}
        placeholder={placeholder}
        value={value}
        {...register(type, {
          required: type + " " + `is required`,
          pattern: {
            value: /^[^\s]+$/,
            message: "Spaces are not allowed",
          }
        })}
      />
    </>
  );
};

export default Input;
