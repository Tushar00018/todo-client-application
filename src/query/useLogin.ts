import { useMutation } from "@tanstack/react-query";
import { loginInstance } from "../utlitiy/axiosInstance";
import { Endpoints } from "../utlitiy/endpoints";

const login = async (payload: any) => {
    const response = await loginInstance.post(Endpoints.login, payload)
    return response?.data;
};

export const useLogin = () => {
    return useMutation({
        mutationFn: login,
    })
};
