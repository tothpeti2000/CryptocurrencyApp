import { Asset } from "./currency";

export interface UserCredentials {
  userName: string;
  password: string;
}

export interface User extends UserCredentials {
  currencies: Asset[];
}
