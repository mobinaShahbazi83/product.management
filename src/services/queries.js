import { useQuery } from "@tanstack/react-query";
import api from "../configs/api";

const useGetProducts = () => {
  const queryFn = () => api.get(`/products`);
  const queryKey = ["products"];

  return useQuery({ queryFn, queryKey });
};

 const  searchProducts = query => api.get(`/products/?query=${query}`)
export {useGetProducts, searchProducts}