import { useMutation } from "react-query";
import { ISignupFormValues } from "../signup";
import { signup } from "./signup.service";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../../../core/shared/toast/toast";
import { Routes } from "router/routes";

export const useSignup = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (credentials: ISignupFormValues) => {
      return signup(credentials);
    },
    onSuccess: () => {
      successToast;
      navigate(`${Routes.login}`);
    },
    onError: (error: Error) => {
      errorToast(error.message);
      navigate(`${Routes.signup}`);
    },
  });
};

