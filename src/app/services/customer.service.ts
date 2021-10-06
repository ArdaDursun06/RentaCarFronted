import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Customer } from '../models/customer';
import { CustomerAndUserUpdate } from '../models/customerAndUserUpdate';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  apiUrl="https://localhost:44320/api/"

  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>{
    let newPath=this.apiUrl+"Customers/getall"
    return this.httpClient.get<ListResponseModel<Customer>>(newPath)
  }

  getCustomerByUserId(userId:number):Observable<SingleResponseModel<Customer>>{
    let newPath=this.apiUrl+"Customers/getcustomerbyuserid?id="+userId
    return this.httpClient.get<SingleResponseModel<Customer>>(newPath)
  }
  
  getCustomerById(customerId:number):Observable<SingleResponseModel<Customer>>{
    let newPath=this.apiUrl+"Customers/getbyid?id="+customerId
    return this.httpClient.get<SingleResponseModel<Customer>>(newPath)
  }

  updateWithUser(updateWithUserDto:CustomerAndUserUpdate): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"customers/updateofuserandcustomer", updateWithUserDto
    );
  }

  getCustomerAndUser(userId:number):Observable<SingleResponseModel<CustomerAndUserUpdate>>{
    let newPath=this.apiUrl+"customers/getcustomeranduserdetailsbyuserid?userId="+userId
    return this.httpClient.get<SingleResponseModel<CustomerAndUserUpdate>>(newPath);
  }
}
