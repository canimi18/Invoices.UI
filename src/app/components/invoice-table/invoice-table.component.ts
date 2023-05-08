import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { InvoiceFilters } from 'src/app/models/InvoiceFilters';
import { Invoice } from 'src/app/models/invoice';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.scss']
})
export class InvoiceTableComponent implements OnInit {
  @ViewChild('companyNameInput') fullNameInput: any;
  @ViewChild('amountInput') amountInput: any;  
  invoices: Invoice[] = [];
  isPaid: boolean;

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.loadData();
  }

  isPaidCheckbox(event){
    if(event.checked){
      this.isPaid = false;
    }
  }

  filterList(companyName: string, amount: string) {
    let filter = new InvoiceFilters();
    filter.company = this.writeValue(companyName);
    filter.amount=this.writeValue(amount);
    filter.isPaid= this.isPaid;
    this.invoiceService.getInvoicesFilter(filter).subscribe((result: Invoice[]) => (this.invoices = result) );
  }

  clearFilters(){   
    this.fullNameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
    this.loadData();
  }

  writeValue(value: any): string {
    return value == '' ? 'undefined' : value;
  }

  loadData() {
    this.invoiceService.getInvoices().subscribe((result: Invoice[]) => (this.invoices = result) );
  }
}
