import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const apiUrl = environment.apiUrl + '/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public permissionsSubject = new BehaviorSubject<string[]>([]);

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post(`${apiUrl}/login`, credentials);
  }

  register(data: any): Observable<any> {
    return this.http.post(`${apiUrl}/register`, data);
  }

  getPersonalInformation(): Observable<any> {
    return this.http.get(`${apiUrl}/me`,);
  }

  getPermission():Observable<any> {
    return this.http.get(`${apiUrl}/me/permissions`,);
  }
}
