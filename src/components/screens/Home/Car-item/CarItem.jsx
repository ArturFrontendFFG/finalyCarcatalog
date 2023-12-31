import React from "react";
import styles from "../Home.module.css";
import Price from "./Price";
import { Link } from "react-router-dom";
const CarItem = ({ car }) => {
  return (
    <div key={car.id} className={styles.item}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${car.image})`,
        }}
      ></div>
      <div className={styles.info}>
        <h2 className={styles.h2}>{car.name}</h2>
        <Price price={car.price}/>
        <Link to={`/car/${car.id}`} className={styles.button}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default CarItem;
