import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatCardModule, MatToolbarModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: LoginComponent },
  { path: 'help', component: LoginComponent}
];

@NgModule({

  imports: [
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent
  ]
})
export class SessionModule { }
