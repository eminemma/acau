import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioManagerComponent } from './usuario-manager.component';

describe('UsuarioManagerComponent', () => {
  let component: UsuarioManagerComponent;
  let fixture: ComponentFixture<UsuarioManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
