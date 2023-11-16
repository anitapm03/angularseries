import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarhijoComponent } from './modificarhijo.component';

describe('ModificarhijoComponent', () => {
  let component: ModificarhijoComponent;
  let fixture: ComponentFixture<ModificarhijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarhijoComponent]
    });
    fixture = TestBed.createComponent(ModificarhijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
