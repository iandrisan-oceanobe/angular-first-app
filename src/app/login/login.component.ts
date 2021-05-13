import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoggedUser, LoginUser } from 'src/interfaces/user.interfaces';
import { Router } from '@angular/router';

import { getUserFormLocalstorage } from '../../helpers/localstorage.helper';
import { generateRandomString, setCookie } from '../../helpers/cookies.helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hasError: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLogin(loginData: NgForm): void {
    const loginCredentials: LoginUser = {
      email: loginData.value.email,
      password: loginData.value.password,
    };
    if (!loginCredentials.email) {
      this.hasError = true;
      return;
    }

    const userCredentials = getUserFormLocalstorage(loginCredentials.email);
    if (typeof userCredentials === 'undefined') {
      this.hasError = true;
      return;
    }

    if (
      !loginCredentials.password &&
      userCredentials.hasToResetPassword === true
    ) {
      console.log('User has to reset password. To be implemented');
      return;
    }

    if (loginCredentials.password !== userCredentials.password) {
      this.hasError = true;
      return;
    }

    const token: string = generateRandomString(64);
    setCookie('token', token);

    const loggedUser: LoggedUser = {
      email: userCredentials.email,
      name: userCredentials.name,
      role: userCredentials.role,
      phoneNumber: userCredentials.phoneNumber,
    };
    setCookie('loggedUser', JSON.stringify(loggedUser));

    this.router.navigate(['/dashboard']);
  }
}
