import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryhomeComponent } from './groceryhome.component';

describe('GroceryhomeComponent', () => {
  let component: GroceryhomeComponent;
  let fixture: ComponentFixture<GroceryhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroceryhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
