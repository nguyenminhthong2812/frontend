import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaitintucComponent } from './loaitintuc.component';

describe('LoaitintucComponent', () => {
  let component: LoaitintucComponent;
  let fixture: ComponentFixture<LoaitintucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaitintucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaitintucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
