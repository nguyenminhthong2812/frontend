import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Itemtintuc2Component } from './itemtintuc2.component';

describe('Itemtintuc2Component', () => {
  let component: Itemtintuc2Component;
  let fixture: ComponentFixture<Itemtintuc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Itemtintuc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Itemtintuc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
