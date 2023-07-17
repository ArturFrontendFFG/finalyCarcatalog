import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CarService } from "../../../services/car.service";
import { useNavigate } from "react-router-dom";

const useAuth = ({setUser}) => {
  const navigate = useNavigate();
  //   const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(["auth"], () =>
    CarService.getAllUsers()
  );
  const { mutate } = useMutation(
    ["auth"],
    (data) => CarService.getAllUsers(data),
    {
      onSuccess: () => {
        data.forEach((userAPI) => {
          const { email, password } = userAPI;
          if (email === authData.email && password === authData.password) {
            localStorage.setItem("dataUser", JSON.stringify(userAPI));
            setUser(JSON.parse(localStorage.getItem(`dataUser`)));
          }
        });
        navigate("/", { replace: true });
        
      },
    }
  );
  const authUser = (data) => {
    mutate(data);
  };
  return { authUser };
};

export default useAuth;
