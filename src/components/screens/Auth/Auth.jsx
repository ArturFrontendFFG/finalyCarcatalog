import React, { useContext } from "react";
import ErrorMessage from "../../ui/ErrorMessage";
import Input from "../../ui/Input";
import regStyle from "../registration/Registration.module.css";
import { useForm } from "react-hook-form";
import useAuth from "./useAuth";
import { Link } from "react-router-dom";
import { CarService } from "../../../services/car.service";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../providers/AuthProvider";
import axios from "axios";

const Auth = () => {
  const { user, setUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const { data, error } = useQuery(["auth"], () => CarService.getAllUsers());

  const forAuth = (authData) => {
    data.forEach((userAPI) => {
      const { email, password } = userAPI;
      if (email === authData.email && password === authData.password) {
        localStorage.setItem("dataUser", JSON.stringify(userAPI));
        setUser(JSON.parse(localStorage.getItem(`dataUser`)));
      }
    });
  };
  return (
    <div className={regStyle.wrapper}>
      <Link to="/" className={regStyle.home}>
        Home
      </Link>
      <form className={regStyle.form} onSubmit={handleSubmit(forAuth)}>
        <h2>Log in</h2>
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
          autocomplete='off'
          errors={errors}
          placeholder="Enter your password"
          register={register}
          type="password"
        ></Input>
        <ErrorMessage error={errors?.password?.message}></ErrorMessage>

        <button type="submit">Submit</button>
        <p style={{ marginTop: "20px" }}>
          Ещё нету аккаунта? <Link to="/reg">Зарегистрироваться</Link>
        </p>
      </form>
      <p
        className={regStyle.link}
        style={
          !localStorage.getItem(`dataUser`)
            ? { display: "none" }
            : { display: "inline" }
        }
      >
        Вы успешно вошли в аккаунт <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default Auth;
