import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearpersonajeComponent } from './crearpersonaje.component';

describe('CrearpersonajeComponent', () => {
  let component: CrearpersonajeComponent;
  let fixture: ComponentFixture<CrearpersonajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearpersonajeComponent]
    });
    fixture = TestBed.createComponent(CrearpersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
