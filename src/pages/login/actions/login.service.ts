import axiosInstance from "../../../core/configs/axios.config";
import { setToken } from "../../../core/helpers/get-token";
import { IUser } from "../../../store/store";
import { store } from "../../../store/store.config";
import { setUser } from "../../../store/store.reducer";
import { ILoginFormValues } from "../login";

export const login = (credentials: ILoginFormValues): Promise<{ token: string; user: IUser }> => {
  const { email, password } = credentials;
  return axiosInstance
    .get("http://localhost:3000/users")
    .then((res) => {
      const users: IUser[] = res.data;
      console.log(users);
      
      const authUser = users.find(
        (user: IUser) =>
          (user.email === email || user.username === email) && user.password === password
      );
      
      if (authUser) {
        const token = "tokenAuth new";
        setToken(token);
        store.dispatch(setUser(authUser));
        return Promise.resolve({ token, user: authUser });
      } else {
        throw new Error("Invalid username or password");
      }
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
      throw new Error("Error fetching user data");
    });
};
