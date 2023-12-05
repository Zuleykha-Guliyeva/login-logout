import { ILogin } from "core/layouts/auth/auth";
import axiosInstance from "../../../core/configs/axios.config";
import { ISignupFormValues } from "../signup";

export const signup = async (credentials: ISignupFormValues): Promise<{ user: ISignupFormValues }> => {
  const { email, username, phone } = credentials;
  const res = await axiosInstance.get("http://localhost:3000/users");
  const users: ILogin[] = res.data;
  console.log(users);
  const authUser = users.find(
    (user: ILogin) =>
      user.email === email || user.username === username || user.phone === phone
  );
  if (authUser) {
    throw new Error("Bu istifadəçi artıq mövcuddur!");
  }
  const response = await axiosInstance.post(
    "http://localhost:3000/users",
    credentials
  );
  return response.data;
};
