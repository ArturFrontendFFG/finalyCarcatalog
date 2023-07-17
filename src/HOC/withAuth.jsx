import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import style from "../components/screens/Home/Home.module.css";

export const withAuth = (Component) => (props) => {
  const { user } = useContext(AuthContext);
  if (!user)
    return (
      <>
        <Link className={style.button} to="/">
          Home
        </Link>
        <Link className={style.button} to="/reg">
          Registration
        </Link>
        <Link className={style.button} to="/auth">
          Log in
        </Link>
        <p style={{ marginTop: "20px" }}>You not authorization</p>
      </>
    );
  return <Component {...props}></Component>;
};

export default withAuth;
