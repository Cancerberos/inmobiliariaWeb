import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAvisoComponent } from './consulta-aviso.component';

describe('ConsultaAvisoComponent', () => {
  let component: ConsultaAvisoComponent;
  let fixture: ComponentFixture<ConsultaAvisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaAvisoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
