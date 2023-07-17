import React, { useContext, useEffect, useState } from "react";
import { CarService } from "../../../services/car.service.js";
import Loader from "./Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import Header from "../../ui/Header";
import Catalog from "../../ui/Catalog";
const Home = () => {
  const { data, isLoading } = useQuery(["cars"], () => CarService.getAll());
  if (isLoading) return <Loader />;
  return (
    <div>
      <Header></Header>      
      <Catalog data={data}></Catalog>
    </div>
  );
};

export default Home;
