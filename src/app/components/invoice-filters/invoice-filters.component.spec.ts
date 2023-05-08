import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceFiltersComponent } from './invoice-filters.component';

describe('InvoiceFiltersComponent', () => {
  let component: InvoiceFiltersComponent;
  let fixture: ComponentFixture<InvoiceFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceFiltersComponent]
    });
    fixture = TestBed.createComponent(InvoiceFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
