import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceConsolidadoComponent } from './balance-consolidado.component';

describe('BalanceConsolidadoComponent', () => {
  let component: BalanceConsolidadoComponent;
  let fixture: ComponentFixture<BalanceConsolidadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceConsolidadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceConsolidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
