import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCarouselComponentComponent } from './text-carousel-component.component';

describe('TextCarouselComponentComponent', () => {
  let component: TextCarouselComponentComponent;
  let fixture: ComponentFixture<TextCarouselComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextCarouselComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextCarouselComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
