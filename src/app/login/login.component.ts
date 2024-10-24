import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { Login } from '../models/login';
import { Router } from '@angular/router';
import { AuthService } from '../controllers/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(
    private FB: FormBuilder,
    private serv: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  userObject!: Login;
  ngOnInit(): void {
    this.createform();
  }

  loginForm!: FormGroup;
  createform() {
    this.loginForm = this.FB.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  get loginFormValidation() {
    return this.loginForm;
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  login() {
    // console.log(this.loginForm.value);

    this.serv.login(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('token', res.Token);
        if (res.Message == 'Welocome in System') {
          this.toastr.success('success', 'Login Successflluy');
          this.router.navigateByUrl('home');
        } else {
          this.toastr.error('fail', 'Login Faild');
        }
      },
      (err: any) => {
        this.toastr.error('fail', 'Login Faild');
      }
    );
  }
}
