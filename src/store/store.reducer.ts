import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "./store";
import { az } from "../assets/lang/az";
import { en } from "../assets/lang/en";
import { environment } from "../core/configs/app.config";
import { ILang } from "../assets/lang/lang";
import { LoginUser } from "pages/login/models/login.model";
import { getToken } from "core/helpers/get-token";
import JWT from "expo-jwt";

const initialState: IState = {
  loader: false,
  leftMenu: true,
  languages: [
    {
      id: 1,
      key: "az",
      value: "Az",
    },
    {
      id: 2,
      key: "en",
      value: "En",
    },
    {
      id: 3,
      key: "ru",
      value: "Ru",
    },
  ],
  locale: az,
  user: null,
};
export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setLoader: (state: IState, action: PayloadAction<boolean>) => {
      state.loader = action.payload;
    },
    toggleLeftMenu: (state: IState) => {
      state.leftMenu = !state.leftMenu;
    },
    setLocale: (state: IState, action: PayloadAction<ILang>) => {
      const lang = {
        az,
        en,
      };
      state.locale = lang[action.payload];
      localStorage.setItem(
        `${environment.applicationName}-locale`,
        action.payload
      );
    },
    setUser: (state: IState, action: PayloadAction<any | null>) => {
      const storedSecretKey = localStorage.getItem("secretKey");
      const token: string = getToken() || "";
      if (storedSecretKey) {
        const decodedToken = JWT.decode(token, storedSecretKey);
        const decodeUser: LoginUser = decodedToken.authUser as LoginUser;
        state.user = decodeUser;
      } else {
        const { secretKey } = action.payload;
        if (secretKey) {
          state.user = null;
          localStorage.setItem("secretKey", secretKey);
        }
      }
    },
  },
});

export const { setLoader, toggleLeftMenu, setLocale, setUser } =
  rootSlice.actions;

export default rootSlice.reducer;
