import React, { useState } from "react";
import global from "../Home/Home.module.css";
import styleform from "../registration/Registration.module.css";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../ui/ErrorMessage";
import { useCreateCar } from "./useCreateCar";
import withAuth from "../../../HOC/withAuth";
import { Link } from "react-router-dom";
import Input from "../../ui/Input";
const Create = () => {
  const [success, setSuccess] = useState('');
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const { createCar } = useCreateCar(reset, setSuccess);

  return (
    <div className={styleform.wrapper}>
      <Link className={styleform.home} to="/">
        Home
      </Link>
      <form className={styleform.form} onSubmit={handleSubmit(createCar)}>
        <h2>Create car</h2>
        <Input 
          autocomplete='off'
          placeholder='Name'
          type='name'
          register={register}
        ></Input>
        <ErrorMessage error={errors?.name?.message}></ErrorMessage>
        <Input 
          autocomplete='off'
          placeholder='Price'
          type='price'
          register={register}
        ></Input>
        <ErrorMessage error={errors?.price?.message}></ErrorMessage>

        <Input 
          autocomplete='off'
          placeholder='Image'
          type='image'
          register={register}
        ></Input>
        <ErrorMessage error={errors?.image?.message}></ErrorMessage>

        <button className={styleform.btn}>Create</button>
        {success === true ? <p>Machine created successfully</p> : ""}
      </form>
    </div>
  );
};

export default withAuth(Create);
