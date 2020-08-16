import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../../../models/response';
import { Role } from '../models/role';
import { map } from 'rxjs/operators';

const apiUrl = environment.apiUrl + '/roles';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getList(): Observable<Response<Role[]>> {
    return this.http.get(`${apiUrl}`)
      .pipe(
        map(response => response as Response<Role[]>)
      );
  }
}
