import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const apiUrl = environment.apiUrl + '/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post(`${apiUrl}/login`, credentials);
  }

  register(data: any): Observable<any> {
    return this.http.post(`${apiUrl}/register`, data);
  }

  getPermissions(): Observable<any> {
    return this.http.get(`${apiUrl}/me/permissions`);
  }

}
