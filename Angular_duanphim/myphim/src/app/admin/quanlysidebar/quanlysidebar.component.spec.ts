import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlysidebarComponent } from './quanlysidebar.component';

describe('QuanlysidebarComponent', () => {
  let component: QuanlysidebarComponent;
  let fixture: ComponentFixture<QuanlysidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlysidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlysidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
