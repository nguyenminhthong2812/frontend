import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Itemtintuc2ChitietComponent } from './itemtintuc2-chitiet.component';

describe('Itemtintuc2ChitietComponent', () => {
  let component: Itemtintuc2ChitietComponent;
  let fixture: ComponentFixture<Itemtintuc2ChitietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Itemtintuc2ChitietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Itemtintuc2ChitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
