import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  uri = "http://localhost:3000/usuarios";
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  constructor(private http: HttpClient, private router: Router) {}

  login(documento: string, password: string) {
    return this.http.post(this.uri + '/authenticate', {
      documento: documento,
      password: password
    });
  }

  logout() {
    this.loggedIn.next(false);
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  logIn(): boolean {
    this.loggedIn.next(true);
    return localStorage.getItem('token') !== null;
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }
}
