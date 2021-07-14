import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { AuthService } from './modulos/auth/services/auth.service';
import { Utilities } from './Utilities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private routes: Router
  ) {
    if (localStorage.getItem('token')) {
      combineLatest([this.authService.getPersonalInformation(), this.authService.getPermission()])
        .subscribe(([personalInf, permissions]) => {
          Utilities.personalInf = personalInf.data;
          this.authService.permissionsSubject.next(permissions.data.map(permiso => {
            return permiso.name;
          }));
        });
    } else {

      this.routes.navigate(['/login']);
    }
  }
}
