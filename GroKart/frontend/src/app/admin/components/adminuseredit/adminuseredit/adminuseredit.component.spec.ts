import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminusereditComponent } from './adminuseredit.component';

describe('AdminusereditComponent', () => {
  let component: AdminusereditComponent;
  let fixture: ComponentFixture<AdminusereditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminusereditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminusereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
