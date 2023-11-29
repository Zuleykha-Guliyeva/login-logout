import axiosInstance from "../../../core/configs/axios.config";
import { ISignupFormValues } from "../signup";

export const signup = (credentials: ISignupFormValues): Promise<{ token: string; user: ISignupFormValues }> => {
    return axiosInstance.post("http://localhost:3000/users",credentials)
    .then((res)=> res.data);
};