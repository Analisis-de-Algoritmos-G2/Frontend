import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanadorComponent } from './ganador.component';

describe('GanadorComponent', () => {
  let component: GanadorComponent;
  let fixture: ComponentFixture<GanadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GanadorComponent]
    });
    fixture = TestBed.createComponent(GanadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
