export interface LoginUser {
  id: number;
  email: string;
  username: string;
  phone: string;
  password: string;
}

export class LoginModel {
  public token: string;
  public user: LoginUser;
  public secretKey: string;

  constructor(token: string, user: LoginUser, secretKey: string) {
    this.token = token;
    this.user = user;
    this.secretKey = secretKey;
  }
}
