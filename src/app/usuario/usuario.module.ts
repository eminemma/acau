import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioManagerComponent } from './usuario-manager/usuario-manager.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '' , component: UsuarioManagerComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    UsuarioManagerComponent
  ]
})
export class UsuarioModule { }
