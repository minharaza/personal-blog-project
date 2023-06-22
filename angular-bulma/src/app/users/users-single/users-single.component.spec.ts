import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSingleComponent } from './users-single.component';

describe('UsersSingleComponent', () => {
  let component: UsersSingleComponent;
  let fixture: ComponentFixture<UsersSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersSingleComponent]
    });
    fixture = TestBed.createComponent(UsersSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
