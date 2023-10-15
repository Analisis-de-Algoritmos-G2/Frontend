import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimientosComponent } from './sentimientos.component';

describe('SentimientosComponent', () => {
  let component: SentimientosComponent;
  let fixture: ComponentFixture<SentimientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentimientosComponent]
    });
    fixture = TestBed.createComponent(SentimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
