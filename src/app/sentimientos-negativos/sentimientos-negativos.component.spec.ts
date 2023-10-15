import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimientosNegativosComponent } from './sentimientos-negativos.component';

describe('SentimientosNegativosComponent', () => {
  let component: SentimientosNegativosComponent;
  let fixture: ComponentFixture<SentimientosNegativosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentimientosNegativosComponent]
    });
    fixture = TestBed.createComponent(SentimientosNegativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
