import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteRegistradoComponent } from './paciente-registrado.component';

describe('PacienteRegistradoComponent', () => {
  let component: PacienteRegistradoComponent;
  let fixture: ComponentFixture<PacienteRegistradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteRegistradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteRegistradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
