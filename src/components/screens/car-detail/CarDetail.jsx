import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CarService } from "../../../services/car.service";
import CarItem from "../Home/Car-item/CarItem";
import style from '../Home/Home.module.css'
import withAuth from "../../../HOC/withAuth";

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCars] = useState({});
  useEffect(() => {
    if (!id) return;

    const fetchData = async function () {
      const data = await CarService.getById(id);
      setCars(data);
    };
    fetchData();
  }, [id]);
  if(!car){
    console.clear()
    return <div>Car not found</div>
  }
  
  return(
    <div>
        <Link  className={style.home} to='/'>Home</Link>
        <CarItem car={car}/>
    </div>
  )
};

export default withAuth(CarDetail);
