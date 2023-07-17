import React from "react";
import { Link } from "react-router-dom";
import style from "./undefined.module.css";

const UndefinedPage = () => {
  return (
    <div id={style.notfound}>
      <div className={style.notfound}>
        <div className={style.notfound_un}>
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
        <Link to="/">Homepage</Link>
      </div>
    </div>
  );
};

export default UndefinedPage;
