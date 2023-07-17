import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CarService } from "../../../services/car.service";
import React from "react";

export const useRegistration = (reset, setAuth) => {
  const { mutate } = useMutation(["users"], (data) => CarService.reg(data), {
    onSuccess: (data) => {
      CarService.telegraph(data);
      reset();
      setAuth(true);
    },
  });
  const regUser = (data) => {
    mutate(data);
  };
  return { regUser };
};
