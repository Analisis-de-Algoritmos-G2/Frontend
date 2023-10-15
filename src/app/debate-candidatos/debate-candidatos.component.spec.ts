import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebateCandidatosComponent } from './debate-candidatos.component';

describe('DebateCandidatosComponent', () => {
  let component: DebateCandidatosComponent;
  let fixture: ComponentFixture<DebateCandidatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebateCandidatosComponent]
    });
    fixture = TestBed.createComponent(DebateCandidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
