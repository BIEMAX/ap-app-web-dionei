import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDioneiComponent } from './profile-dionei.component';

describe('ProfileDioneiComponent', () => {
  let component: ProfileDioneiComponent;
  let fixture: ComponentFixture<ProfileDioneiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDioneiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDioneiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
