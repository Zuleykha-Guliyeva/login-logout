import { useMutation } from "react-query"
import { ISignupFormValues } from "../signup"
import { signup } from "./signup.service"
import { useNavigate } from "react-router-dom"
import { setToken } from "../../../core/helpers/get-token";
import { store } from "../../../store/store.config";
import { setUser } from "../../../store/store.reducer";

export const useSignup = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: (credentials: ISignupFormValues) => {
            return signup(credentials);
        },
        onSuccess: (user) => {
            setToken('yeni-token-fgffffgff');
            store.dispatch(setUser(user))
            console.log(user);
            
            navigate('/userdetail');
        },
    });
};