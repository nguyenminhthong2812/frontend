import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemtintucComponent } from './itemtintuc.component';

describe('ItemtintucComponent', () => {
  let component: ItemtintucComponent;
  let fixture: ComponentFixture<ItemtintucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemtintucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemtintucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
