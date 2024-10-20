import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;

  constructor() {}

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('authToken', token); // Store token in local storage
  }

  getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem('authToken');
    }
    return this.token;
  }

  clearToken(): void {
    this.token = null;
    localStorage.removeItem('authToken');
  }
}
