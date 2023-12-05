import { ILang } from "../assets/styles/lang/lang";

export interface IState {
  loader: boolean;
  leftMenu: boolean;
  languages: ILanguages[];
  locale: any;
  user: IUser | null;
}

export interface ILanguages {
  id: number;
  key: ILang;
  value: string;
}

export interface IUser {
  username: string;
  email: string;
  phone: string;
}