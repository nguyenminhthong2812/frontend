import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtinlienheComponent } from './thongtinlienhe.component';

describe('ThongtinlienheComponent', () => {
  let component: ThongtinlienheComponent;
  let fixture: ComponentFixture<ThongtinlienheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongtinlienheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongtinlienheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
