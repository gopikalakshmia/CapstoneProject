import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingroeditComponent } from './admingroedit.component';

describe('AdmingroeditComponent', () => {
  let component: AdmingroeditComponent;
  let fixture: ComponentFixture<AdmingroeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmingroeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmingroeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
