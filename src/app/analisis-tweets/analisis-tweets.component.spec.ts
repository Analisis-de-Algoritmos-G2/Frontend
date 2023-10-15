import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisTweetsComponent } from './analisis-tweets.component';

describe('AnalisisTweetsComponent', () => {
  let component: AnalisisTweetsComponent;
  let fixture: ComponentFixture<AnalisisTweetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalisisTweetsComponent]
    });
    fixture = TestBed.createComponent(AnalisisTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
