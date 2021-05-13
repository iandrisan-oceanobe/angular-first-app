import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisteredUser } from '../../interfaces/user.interfaces';
import {
  addNewUserToLocalStorage,
  checkIfUserExists,
} from '../../helpers/localstorage.helper';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm') registerForm!: NgForm;
  userExists: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onRegisterSubmit(): void {
    const newUser: RegisteredUser = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      name: this.registerForm.value.name,
      phoneNumber: this.registerForm.value.phone,
      role: 'User',
    };
    if (checkIfUserExists(newUser.email)) {
      this.userExists = true;
    } else {
      this.userExists = false;
      addNewUserToLocalStorage(newUser);
      this.router.navigate(['/login']);
    }
  }
}
