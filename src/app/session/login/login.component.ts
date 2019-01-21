import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from '../../entities/session.entity';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  session: Session;
  message: String;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.session = new Session(null, null);
  }

  Login(formValue: any) {
    const session: Session = { ...formValue };

    this.authService.login(session.documento, session.password).subscribe(
      (resp: any) => {
        this.authService.logIn();
        this.message = 'Ingreso Correctamente';
        this.router.navigate(['home']);
        localStorage.setItem('auth_token', resp.token);
      },
      (err: HttpErrorResponse) => {
        if (err.error.errorMessage === undefined) {
          this.message = err.message;
        } else { this.message = err.error.errorMessage; }

      }
    );
  }
}
