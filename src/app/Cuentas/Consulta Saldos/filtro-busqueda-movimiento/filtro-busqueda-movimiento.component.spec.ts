import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroBusquedaMovimientoComponent } from './filtro-busqueda-movimiento.component';

describe('FiltroBusquedaMovimientoComponent', () => {
  let component: FiltroBusquedaMovimientoComponent;
  let fixture: ComponentFixture<FiltroBusquedaMovimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroBusquedaMovimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroBusquedaMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
