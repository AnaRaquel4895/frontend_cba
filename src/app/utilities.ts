import { BehaviorSubject } from "rxjs";

export class Utilities {
  public static personalInf:UserInformation = undefined; 
}

export interface UserInformation {
  email?: string;
  id?: number;
  name?: string;
}