import {useMutation} from 'react-query';
import {login} from './login.service';

import {useNavigate} from 'react-router-dom';
import { Routes } from "../../../router/routes";
import {ILoginFormValues} from '../login';

export const useLogin = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: (credentials: ILoginFormValues) => {
            return login(credentials);
        },
        onSuccess: () => {
            // setToken('');
            // store.dispatch(setUser(response));
            navigate(Routes.userdetails);
        },
    });
};




