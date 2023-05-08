import { Component } from '@angular/core';
import { InvoiceFilters } from 'src/app/models/InvoiceFilters';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent {
  invoiceFilters: InvoiceFilters;

  constructor(){
    this.invoiceFilters = new InvoiceFilters();
  }

  filtersChanged(filter){
    this.invoiceFilters = new InvoiceFilters();
    this.invoiceFilters.amount = filter.amount;
    this.invoiceFilters.isPaid = filter.isPaid;
    this.invoiceFilters.company = filter.company;
  }
}
