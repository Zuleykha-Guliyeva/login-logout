import { useMutation } from "react-query";
import { ISignupFormValues } from "../signup";
import { signup } from "./signup.service";
import { useNavigate } from "react-router-dom";
import { store } from "../../../store/store.config";
import { setUser } from "../../../store/store.reducer";
import { errorToast, successToast } from "../../../core/shared/toast/toast";
export const useSignup = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (credentials: ISignupFormValues) => {
      return signup(credentials);
    },
    onSuccess: (response) => {
      const user = response.user;
      store.dispatch(setUser(user));
      successToast;
      navigate("/auth/login");
    },
    onError: (error: Error) => {
      errorToast(error.message);
      navigate("/auth/signup");
    },
  });
};

