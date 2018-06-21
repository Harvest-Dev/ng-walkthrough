import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularWalkthroughComponent } from './angular-walkthrough.component';

describe('AngularWalkthroughComponent', () => {
  let component: AngularWalkthroughComponent;
  let fixture: ComponentFixture<AngularWalkthroughComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularWalkthroughComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularWalkthroughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
