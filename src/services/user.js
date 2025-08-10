

import { useMutation } from "@tanstack/react-query";
import api from "../configs/api";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
    const navigate = useNavigate()
    const mutationFn = (data) => api.post("/auth/register",data);
    return useMutation(
        {mutationFn
        , onSuccess: (response) => {
      console.log(response)
      navigate("/login")

    },
    onError: (error) => {
           console.log(error)
    }
})
}

const useLogin = () => {
    const navigate = useNavigate()
    const mutationFn = (data) => api.post("/auth/login", data);
    return useMutation(
        {mutationFn ,
            onSuccess: (response) => {
                console.log(response)
                navigate("/")
            },
             onError: (error) => {
                console.log(error)
             }

        }
    )

}

export  {useRegister, useLogin}