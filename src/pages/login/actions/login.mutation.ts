import {useMutation, useQueryClient} from 'react-query';
import {login} from './login.service';
import {useNavigate} from 'react-router-dom';
import { Routes } from "../../../router/routes";
import {ILoginFormValues} from '../login';
import { errorToast } from '../../../core/shared/toast/toast';
import { setToken } from '../../../core/helpers/get-token';
import { store } from '../../../store/store.config';
import { setUser } from '../../../store/store.reducer';

export const useLogin = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (credentials: ILoginFormValues) => {
        return login(credentials);
      },
      onSuccess: (response) => {
        const { token } = response;
        setToken(token);
        store.dispatch(setUser(token));
        queryClient.invalidateQueries("users");        
        navigate(Routes.userdetails);
      },
      onError: () => {
        errorToast('Istifadəçi adı və ya parol yalnış');
      },
    });
};




