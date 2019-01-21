import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhimsapchieuComponent } from './phimsapchieu.component';

describe('PhimsapchieuComponent', () => {
  let component: PhimsapchieuComponent;
  let fixture: ComponentFixture<PhimsapchieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhimsapchieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhimsapchieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
