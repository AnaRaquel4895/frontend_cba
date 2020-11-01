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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MyserviceService]
})
export class LoginComponent implements OnInit {
  msg = '';
  isLoadingLogin = false;
  constructor(
    private service: MyserviceService,
    private routes: Router,
    private authService: AuthService
  ) { }

  check(uname: string, p: string) {
    this.isLoadingLogin = true;
    this.authService.login({
      email: uname,
      password: p
    })
      .subscribe(
        (val) => {
          console.log('Data: ', val);
          this.routes.navigate(['/starter']);
        },
        (err) => {
          console.log('Error: ', err);
          this.msg = 'Los credenciales ingresados no coinciden con ninguna cuenta';

        },
        () => {
          this.isLoadingLogin = false;
        }
      );
  }

  ngOnInit() { }
}
