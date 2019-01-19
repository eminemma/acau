import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  uri = 'http://localhost:3000/usuarios';
  token;

  constructor(private http: HttpClient, private router: Router) {}

  login(documento: string, password: string) {
    return this.http
      .post(this.uri + '/authenticate', { documento: documento, password: password });
  }

  logout() {
    localStorage.removeItem('token');
  }

  public get logIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
