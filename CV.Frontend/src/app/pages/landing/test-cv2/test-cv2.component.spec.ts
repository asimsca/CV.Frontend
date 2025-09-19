import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCV2Component } from './test-cv2.component';

describe('TestCV2Component', () => {
  let component: TestCV2Component;
  let fixture: ComponentFixture<TestCV2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCV2Component]
    });
    fixture = TestBed.createComponent(TestCV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
