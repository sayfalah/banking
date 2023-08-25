import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {AccountDetails} from "../model/account.model";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient) { }

  public getAccounts(): Observable<Array<AccountDetails>>{
    return this.http.get<Array<AccountDetails>>(environment.backendHost + '/ebank/customer/list');
  }

  public getAccount(accountId: string, page: number, size: number): Observable<AccountDetails>{
    return this.http.get<AccountDetails>(environment.backendHost + '/ebank/account/' + accountId + '/pageOperations?page='+page+'&size=' + size);
  }

  public debit(accountId : string, amount : number, description:string) {
    let data={accountId : accountId, amount : amount, description : description}
    return this.http.post(environment.backendHost+"/ebank/account/debit",data);
  }
  public credit(accountId : string, amount : number, description:string){
    let data={accountId : accountId, amount : amount, description : description}
    return this.http.post(environment.backendHost+"/ebank/account/credit",data);
  }
  public transfer(accountSource: string,accountDestination: string, amount : number, description:string){
    let data={accountSource, accountDestination, amount, description }
    return this.http.post(environment.backendHost+"/ebank/account/transfer",data);
  }
}
