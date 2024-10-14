import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';
import {HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }
  baseUrl='https://localhost:7015/api/'

  
  register(reqPayload: object){
    let httpOptions={
      headers: new HttpHeaders ({
        'Content-Type':'application/json'
        })
    }
    console.log(reqPayload)
    return this.httpService.PostService(this.baseUrl+'user/register',reqPayload,false,httpOptions)
  }

  login(credentials: any): Observable<any> {
    let httpOptions={
      headers: new HttpHeaders ({
        'Content-Type':'application/json'
        })
    }
    console.log(credentials)
    return this.httpService.PostService(this.baseUrl+'user/login',credentials,false,httpOptions);
  }
  
}

