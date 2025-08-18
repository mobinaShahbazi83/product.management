

import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../configs/api";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../utils/cookie";

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
                setCookie(response.data.token)
            },
             onError: (error) => {
                console.log(error)
             }

        }
    )

}

const useAddProduct = () => {
    const queryClient = useQueryClient();
     const mutationFn = (data) => api.post("/products", data);
      return useMutation(
        {mutationFn,
             onSuccess: (response) => {
                console.log(response)
                queryClient.invalidateQueries(['products']);
               
            },
             onError: (error) => {
                console.log(error)
             }

        }
      )

}

   const useDeleteProduct = () => {
     const queryClient = useQueryClient();
     const mutationFn = (id) => api.delete(`/products/${id}`);
     return useMutation(
        {mutationFn,
             onSuccess: (response) => {
                console.log(response)
                queryClient.invalidateQueries(['products']);
               
            },
             onError: (error) => {
                console.log(error)
             }

        }
     )
   }

   const useEditProducts = () => {
    const queryClient = useQueryClient();
     const mutationFn = ({id, data}) => api.put(`/products/${id}`, data);
     return useMutation(
        {mutationFn,
             onSuccess: (response) => {
                console.log(response)
                queryClient.invalidateQueries(['products']);
               
            },
             onError: (error) => {
                console.log(error)
             }

        }
     )
   }

export  {useRegister, useLogin, useAddProduct, useDeleteProduct, useEditProducts}