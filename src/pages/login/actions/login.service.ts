import axiosInstance from "../../../core/configs/axios.config";
import { ILoginFormValues } from "../login";
import { API } from "core/configs/api.config";
import { LoginModel, LoginUser } from "../models/login.model";
import JWT from 'expo-jwt';

export const login = (credentials: ILoginFormValues): Promise<LoginModel> => {
  const { email, password } = credentials;
  return axiosInstance.get(API.users).then((res) => {
    const users: LoginUser[] = res.data;
    const authUser = users.find(
      (user: LoginUser) =>
        (user.email === email || user.username === email) &&
        user.password === password
    );
    if (authUser) {
      const secretKey:string = "your_secret_key";
      const token = JWT.encode({authUser}, secretKey);
      return Promise.resolve({ token, user: authUser, secretKey });
    } else {
      throw new Error("Istifadəçi adı və ya parol yalnışdır!");
    }
  });
};


