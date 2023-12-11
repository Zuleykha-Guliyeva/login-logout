import { ILogin } from "core/layouts/auth/auth";
import axiosInstance from "../../../core/configs/axios.config";
import { ISignupFormValues } from "../signup";
import { API } from "core/configs/api.config";

export const signup = async (credentials: ISignupFormValues): Promise<{ user: ISignupFormValues }> => {
  const { email, username, phone } = credentials;
  const res = await axiosInstance.get(API.users);
  const users: ILogin[] = res.data;
  const authUser = users.find(
    (user: ILogin) =>
      user.email === email || user.username === username || user.phone === phone
  );
  if (authUser) {
    throw new Error("Bu istifadəçi artıq mövcuddur!");
  }
  const response = await axiosInstance.post(
    API.users,
    credentials
  );
  return response.data;
};
