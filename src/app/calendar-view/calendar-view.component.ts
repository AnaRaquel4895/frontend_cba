import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MyserviceService } from './../myservice.service';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { AuthService } from '../modulos/auth/services/auth.service';
import { Utilities } from '../Utilities';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss'],
  providers: [MyserviceService]
})
export class CalendarViewComponent implements OnInit {
  msg = '';
  isLoadingLogin = false;
  personalInfAndPermission$ = undefined;
  constructor(
    private service: MyserviceService,
    private routes: Router,
    private authService: AuthService
  ) {
    this.personalInfAndPermission$ = combineLatest([this.authService.getPersonalInformation(),this.authService.getPermission()]);
   }
  
  check(uname: string, p: string) {
    this.isLoadingLogin = true;
    const credentials = {
      email: uname,
      password: p
    };
    this.authService.login(credentials)
      .pipe(
        switchMap((loginResponse) => {
          console.log('Login success ');
          localStorage.setItem('token', loginResponse.data.token);
          this.routes.navigate(['/starter']);
          return this.personalInfAndPermission$;
        })
      ).subscribe(
        ([personalInf, permissions]) => {
          console.error('PERSONAL INFORMATION');
          console.log(personalInf);
                    
          Utilities.personalInf = personalInf.data;
          this.authService.permissionsSubject.next(permissions.data.map(permiso => {
            return permiso.name;
          }));
        },
        (err) => {
          console.log('Error: ', err);
          this.msg = 'Los credenciales ingresados no coinciden con ninguna cuenta';
          this.isLoadingLogin = false;
        }
      );
  }

  ngOnInit() { }
}
