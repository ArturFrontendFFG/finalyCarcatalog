import React, { useState, useEffect } from "react";
import styles from "../screens/Home/Home.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const { user, setUser } = useAuth();
  const [btnClass, setClass] = useState("");

  useEffect(() => {
    if (user) {
      setClass("active");
    } else {
      setClass("");
    }
  }, [user]);

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <h2>
          <Link className={styles.header__logo_txt} to="/">
            Car Catalog
          </Link>
        </h2>
        <Link
          className={styles.btn}
          data-hide={btnClass}
          style={{ textDecoration: "none" }}
          to="/create-car"
        >
          Create car
        </Link>
      </div>
      {user ? (
        <div className={styles.user}>
          <h2>Welcome {user.name} </h2>
          <button className={styles.btn} onClick={() => {
            localStorage.removeItem(`dataUser`);
            location.reload()
          }}>
            Log out
          </button>
        </div>
      ) : (
        <div className={styles.btns}>
        <Link className={styles.btn} to="/reg">
          Registration
        </Link>
        <Link className={styles.btn} to="/auth">
          Log in
        </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
