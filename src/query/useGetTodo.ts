import { useQuery } from "@tanstack/react-query";
import { Endpoints } from "../utlitiy/endpoints";
import { axiosInstance } from "../utlitiy/axiosInstance";

const fetchUsers = async () => {
  const response = await axiosInstance.get(Endpoints.user);
  return response?.data;
};

export const useGetTodo = () => {
  return useQuery({
    queryKey: ['todo'],
    queryFn: fetchUsers,
  })
}