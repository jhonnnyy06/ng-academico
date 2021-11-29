import { UserDataModel } from './user-data.model';

export class SessionDataModel {
  tk?: string;
  usuario?: UserDataModel;
  isLoggedIn: boolean = false; //esta logeado
}
