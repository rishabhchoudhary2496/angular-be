import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseEntryListComponentComponent } from './expense-entry-list-component.component';

describe('ExpenseEntryListComponentComponent', () => {
  let component: ExpenseEntryListComponentComponent;
  let fixture: ComponentFixture<ExpenseEntryListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseEntryListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseEntryListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
