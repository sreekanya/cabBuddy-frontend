import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CabsService {

  private CABS_URL = "http://localhost:8088/cabbuddy-webservice/api/cabs";

  constructor(private httpClient: HttpClient) { }


  /** Get Cabs List */
  //getAll(pagable:Pagable){
    getAll(){
      return this.httpClient.get<any[]>(`${this.CABS_URL}`);
    }

  /** Get one Cab */
  getOne(cabId:number){
      return this.httpClient.get<any[]>(`${this.CABS_URL}/${cabId}`);
  }

  /** Add Cabs */
  add(cabObj:any){
      return this.httpClient.post<any>(`${this.CABS_URL}`,cabObj);
  }

  /** Update Cabs */
  update(cabObj:any){
      return this.httpClient.put<any>(`${this.CABS_URL}`,cabObj);
  }

  /** Delete Cabs */
  delete(cabId:number){
      return this.httpClient.delete<any>(`${this.CABS_URL}/${cabId}`);
  }
}
