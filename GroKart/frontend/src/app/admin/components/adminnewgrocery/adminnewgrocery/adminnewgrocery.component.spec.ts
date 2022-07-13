import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminnewgroceryComponent } from './adminnewgrocery.component';

describe('AdminnewgroceryComponent', () => {
  let component: AdminnewgroceryComponent;
  let fixture: ComponentFixture<AdminnewgroceryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminnewgroceryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminnewgroceryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
