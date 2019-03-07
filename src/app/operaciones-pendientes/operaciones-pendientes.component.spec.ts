import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesPendientesComponent } from './operaciones-pendientes.component';

describe('OperacionesPendientesComponent', () => {
  let component: OperacionesPendientesComponent;
  let fixture: ComponentFixture<OperacionesPendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacionesPendientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionesPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
