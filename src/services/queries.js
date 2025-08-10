import { useQuery } from "@tanstack/react-query";
import api from "../configs/api";

const useGetProducts = () => {
  const queryFn = () => api.get(`/products`);
  const queryKey = ["products"];

  return useQuery({ queryFn, queryKey });
};

export {useGetProducts}