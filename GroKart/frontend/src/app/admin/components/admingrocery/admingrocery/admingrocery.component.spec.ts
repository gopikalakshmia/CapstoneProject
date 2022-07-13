import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingroceryComponent } from './admingrocery.component';

describe('AdmingroceryComponent', () => {
  let component: AdmingroceryComponent;
  let fixture: ComponentFixture<AdmingroceryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmingroceryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmingroceryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
