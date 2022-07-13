import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingbarComponent } from './slidingbar.component';

describe('SlidingbarComponent', () => {
  let component: SlidingbarComponent;
  let fixture: ComponentFixture<SlidingbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidingbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
