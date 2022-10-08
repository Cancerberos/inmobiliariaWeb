import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAvisoComponent } from './detalle-aviso.component';

describe('DetalleAvisoComponent', () => {
  let component: DetalleAvisoComponent;
  let fixture: ComponentFixture<DetalleAvisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleAvisoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
