import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugIzquierdoComponent } from './jug-izquierdo.component';

describe('JugIzquierdoComponent', () => {
  let component: JugIzquierdoComponent;
  let fixture: ComponentFixture<JugIzquierdoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JugIzquierdoComponent]
    });
    fixture = TestBed.createComponent(JugIzquierdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
