import React from "react";
import CarItem from "../screens/Home/Car-item/CarItem";
import style from '../screens/Home/Home.module.css'
import { Link } from "react-router-dom";
const Catalog = ({data}) => {
  return (
    <div className={style.main}>
      {data.length ? (
        Array.from(data)
          .reverse()
          .map((car) => <CarItem key={car.id} car={car} />)
      ) : (
        <p>Cars not found <Link to='/create'>Add your cars</Link></p>
      )}
    </div>
  );
};

export default Catalog;
