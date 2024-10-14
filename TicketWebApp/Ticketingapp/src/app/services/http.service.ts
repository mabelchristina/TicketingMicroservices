import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  PostService(url:string,payload:any,token:boolean=false,httpOptions:any){
    console.log(url,payload)
    return this.http.post(url, payload, token&&httpOptions)
  }
  GetService(url:string,token:boolean=false,httpOptions:any){
    console.log(url)
    return this.http.get(url,token&&httpOptions)
  }
}