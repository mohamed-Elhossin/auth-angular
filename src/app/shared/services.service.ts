import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  url = 'https://webapi.elhossiny.net/api/login';
  constructor(public http: HttpClient) {}

  public login(model: Login) {
    return this.http.post(this.url, model);
  }
}
