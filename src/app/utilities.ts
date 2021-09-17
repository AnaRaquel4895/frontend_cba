import { BehaviorSubject } from "rxjs";

export class Utilities {
  public static personalInf: UserInformation = undefined;
  public static isLoadingApp: boolean = false;
}

export interface UserInformation { 
  user : UserData;
  perfil: any;
}

export interface UserData{
  email?: string;
  id?: number;
  name?: string;
}