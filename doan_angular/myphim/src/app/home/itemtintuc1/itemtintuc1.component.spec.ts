import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Itemtintuc1Component } from './itemtintuc1.component';

describe('Itemtintuc1Component', () => {
  let component: Itemtintuc1Component;
  let fixture: ComponentFixture<Itemtintuc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Itemtintuc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Itemtintuc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
