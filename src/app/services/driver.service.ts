import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private DRIVERS_URL = "http://localhost:8088/cabbuddy-webservice/api/driver-data";

  constructor(private httpClient: HttpClient) { }


  /** Get Drivers List */
  //getAll(pagable:Pagable){
    getAll(){
      return this.httpClient.get<any[]>(`${this.DRIVERS_URL}`);
    }

  /** Get one Driver */
  getOne(driverId:number){
      return this.httpClient.get<any[]>(`${this.DRIVERS_URL}/${driverId}`);
  }

  /** Add Driver */
  add(driverObj:any){
      return this.httpClient.post<any>(`${this.DRIVERS_URL}`,driverObj);
  }

  /** Update Driver */
  update(driverObj:any){
      return this.httpClient.put<any>(`${this.DRIVERS_URL}`,driverObj);
  }

  /** Delete Driver */
  delete(driverId:number){
      return this.httpClient.delete<any>(`${this.DRIVERS_URL}/${driverId}`);
  }
}
