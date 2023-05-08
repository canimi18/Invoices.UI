import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { envirement } from 'src/envirements/envirement';
import { Observable } from 'rxjs/internal/Observable';
import { InvoiceFilters } from '../models/InvoiceFilters';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  url = "Invoices";
  constructor(private http: HttpClient) { }

  public getInvoices() :  Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${envirement.apiUrl}/${this.url}`);
  }

  public getInvoicesFilter(filter: InvoiceFilters) :  Observable<Invoice[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    }); 
    let params = new HttpParams();
    
    if(filter.company){
    }

    if(filter.amount){
    }
    params = params.append('company',  filter.company);
    params = params.append('amount',  filter.amount);
    params = params.append('isPaid',  filter.isPaid);


    console.log(params);
    return this.http.get<Invoice[]>(`${envirement.apiUrl}/${this.url}/filter`, {
      headers: headers,
      params: params
    });
  }
}
