import { ILogin } from "core/layouts/auth/auth";
import axiosInstance from "../../../core/configs/axios.config";
import { ILoginFormValues } from "../login";

export const login = (credentials: ILoginFormValues): Promise<{ token: string; user: ILogin }> => {
  const { email, password } = credentials;
  return axiosInstance
    .get("http://localhost:3000/users")
    .then((res) => {
      const users: ILogin[] = res.data;
      console.log(users);
      const authUser = users.find(
        (user: ILogin) =>
          (user.email === email || user.username === email) && user.password === password);
      if (authUser) {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlcm5hbWUiOiJKb2huIERvZSIsImVtYWlsIjoxNTE2MjM5MDIyfQ.nlfVHr2Q5v0lnmInngKOyEl21d0nhI8cFiqP2C7P5xY";
        return Promise.resolve({ token, user: authUser });
      } else {
        throw new Error("Istifadəçi adı və ya parol yalnışdır!");
      }
    })
};
