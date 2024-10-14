import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpService } from '../services/http.service';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(private httpService: HttpService) { }
  baseUrl='https://localhost:7015/api/'




  getTickets(): Observable<any> {
    let httpOptions={
      headers: new HttpHeaders ({
        'Content-Type':'application/json'
        })
    }
    return this.httpService.GetService(this.baseUrl+'user/login',false,httpOptions);
  }


  createTicket(ticket: object){
    let httpOptions={
      headers: new HttpHeaders ({
        'Content-Type':'application/json'
        })
    }
    console.log(ticket)
    return this.httpService.PostService(this.baseUrl+'user/register',ticket,false,httpOptions)
  }
}
