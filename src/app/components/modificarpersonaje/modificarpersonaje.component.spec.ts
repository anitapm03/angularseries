import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarpersonajeComponent } from './modificarpersonaje.component';

describe('ModificarpersonajeComponent', () => {
  let component: ModificarpersonajeComponent;
  let fixture: ComponentFixture<ModificarpersonajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarpersonajeComponent]
    });
    fixture = TestBed.createComponent(ModificarpersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
