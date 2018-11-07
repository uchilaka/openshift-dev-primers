import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnOpenshiftComponent } from './learn-openshift.component';

describe('LearnOpenshiftComponent', () => {
  let component: LearnOpenshiftComponent;
  let fixture: ComponentFixture<LearnOpenshiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnOpenshiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnOpenshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
