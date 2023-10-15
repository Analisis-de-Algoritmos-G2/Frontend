import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugDerechoComponent } from './jug-derecho.component';

describe('JugDerechoComponent', () => {
  let component: JugDerechoComponent;
  let fixture: ComponentFixture<JugDerechoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JugDerechoComponent]
    });
    fixture = TestBed.createComponent(JugDerechoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
