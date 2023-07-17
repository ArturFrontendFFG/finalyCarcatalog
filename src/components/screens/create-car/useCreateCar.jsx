import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CarService } from "../../../services/car.service";

export const useCreateCar = (reset, setSuccess) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ["create-car"],
    (data) => CarService.create(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("cars");
        setSuccess(true)
        reset();
      },
    }
  );

  const createCar = (data) => {
    mutate(data);
  };

  return { createCar };
};
