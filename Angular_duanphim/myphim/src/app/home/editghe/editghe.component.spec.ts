import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditgheComponent } from './editghe.component';

describe('EditgheComponent', () => {
  let component: EditgheComponent;
  let fixture: ComponentFixture<EditgheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditgheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditgheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
