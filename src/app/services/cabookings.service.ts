import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CabookingsService {

  private BOOKINGS_URL = "http://localhost:8088/cabbuddy-webservice/api/bookings";

  constructor(private httpClient: HttpClient) { }


  /** Get Bookings List */
  //getAll(pagable:Pagable){
    getAll(){
      //return this.httpClient.get<any[]>(`${this.BOOKINGS_URL}?page=${pagable.page}&size=${pagable.size}&sort=${pagable.sort}&sortOrder=${pagable.sortOrder}`);
      return this.httpClient.get<any[]>(`${this.BOOKINGS_URL}`);
    }

  /** Get one Bookings */
  getOne(bookingId:number){
      return this.httpClient.get<any[]>(`${this.BOOKINGS_URL}/${bookingId}`);
  }

  /** Add Bookings */
  add(bookingObj:any){
      return this.httpClient.post<any>(`${this.BOOKINGS_URL}`,bookingObj);
  }

  /** Update Bookings */
  update(bookingObj:any){
      return this.httpClient.put<any>(`${this.BOOKINGS_URL}`,bookingObj);
  }

  /** Delete Bookings */
  delete(bookingId:number){
      return this.httpClient.delete<any>(`${this.BOOKINGS_URL}/${bookingId}`);
  }
}
