import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'https://webapi.elhossiny.net/api/login';
  constructor(public http: HttpClient, private router: Router) {}

  public login(model: Login) {
    return this.http.post(this.url, model);
  }

  auth() {
    if (localStorage.getItem('admin')) {
    } else {
      this.router.navigateByUrl('/login');
    }
  }
ifloginornot() : boolean {
   if(localStorage.getItem('token')){
    return true
   }else{
    return false
   }
}

  logout() {
    localStorage.removeItem('token');
    // يمكنك إزالة أي بيانات أخرى مخزنة محليًا هنا
    this.router.navigateByUrl('/login');
  }

}
