import React, { useState } from "react";
import regStyle from "./Registration.module.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRegistration } from "./useRegistration";
import ErrorMessage from "../../ui/ErrorMessage";
import Input from "../../ui/Input";
const Registration = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const [auth, setAuth] = useState(false);
  const [value, setValue] = useState('');

  const { regUser } = useRegistration(reset, setAuth);
  return (
    <div className={regStyle.wrapper}>
      <Link to="/" className={regStyle.home}>
        Home
      </Link>
      <form className={regStyle.form} onSubmit={handleSubmit(regUser)}>
        <h2>Registration</h2>
        <Input
          autocomplete="off"
          placeholder="Enter your name"
          register={register}
          type="name"
        ></Input>
        <ErrorMessage error={errors?.name?.message}></ErrorMessage>
        <Input
          autocomplete="off"
          placeholder="Enter your nickname"
          register={register}
          type="nickname"
        ></Input>
        <ErrorMessage error={errors?.nickname?.message}></ErrorMessage>
        <input
          autoComplete="off"
          placeholder="Enter your email"
          {...register("email", {
            required: "Email is required",
            validate: {
              maxLength: (v) =>
                v.length <= 50 || "The email should have at most 50 characters",
              matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                "Email address must be a valid address",
            },
          })}
        />
        <ErrorMessage error={errors?.email?.message}></ErrorMessage>
        <Input
          setValue={setValue}
          value={value}
          autocomplete="off"
          placeholder="Enter your password"
          register={register}
          type="password"
        ></Input>
        

        <ErrorMessage error={errors?.password?.message}></ErrorMessage>
        <button type="submit">Submit</button>
        <p style={{ marginTop: "20px" }}>
          Уже зарегестрированы? <Link to="/auth">Войти</Link>
        </p>
      </form>
      <p className={regStyle.link} data-auth={auth}>
        Вы успешно зарегистрированы
      </p>
    </div>
  );
};

export default Registration;
