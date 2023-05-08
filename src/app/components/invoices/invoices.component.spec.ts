import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesComponent } from './invoices.component';

describe('InvoicesComponent', () => {
  let component: InvoicesComponent;
  let fixture: ComponentFixture<InvoicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoicesComponent]
    });
    fixture = TestBed.createComponent(InvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  //no tetss

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
