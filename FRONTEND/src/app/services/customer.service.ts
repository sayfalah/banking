import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  public getCustomers(): Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(environment.backendHost + '/ebank/customer/list');
  }

  public searchCustomers(keyword: string): Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(environment.backendHost + '/ebank/customer/search?keyword=' + keyword);
  }

  public deleteCustomer(id: number): Observable<Object> {
    return this.http.delete(environment.backendHost + '/ebank/customer/delete/' + id);
  }

  public saveCustomer(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(environment.backendHost + '/ebank/customer/save', customer);
  }
}
