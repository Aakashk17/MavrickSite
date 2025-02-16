import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})

export class ApicallService {

  constructor(private http:HttpClient) { }

  readonly EMPAPIURL="https://localhost:44346/api/Employee";
  readonly USERSAPIURL="https://localhost:44346/Api/Login";
  readonly SIGNURL="https://localhost:44346/Api/Login/Signin";


  getalldetails(): Observable<any>{
      return this.http.get<any>(this.EMPAPIURL);
  }

  addemployee(val:any): Observable<any>{
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.EMPAPIURL,val,{headers});
}

  getempdetails(id:any):Observable<any>{
    const url = `${this.EMPAPIURL}/${id}`; 
  return this.http.get<any>(url);
  }

  showusers():Observable<any>{
    return this.http.get<any>(this.USERSAPIURL);
  }
  
  addusers(val:any):Observable<any>{
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.USERSAPIURL,val,{headers});
  }

  getoneuser(id:number):Observable<any>{
    const url = `${this.USERSAPIURL}/${id}`; 
    return this.http.get<any>(url);
  }

  getlogindetails(val:any):Observable<any>{
    const headers = { 'Content-Type': 'application/json' };
      return this.http.post<any>(this.SIGNURL,val,{headers});
  }

  updatemp(val:any):Observable<any>{
    const headers = { 'Content-Type': 'application/json' };
     return this.http.put<any>(this.EMPAPIURL,val,{headers});
  }

  delemp(id:number):Observable<any>{
    const url = `${this.EMPAPIURL}/${id}`; 
    return this.http.delete<any>(url);
  }

  deluser(id:number):Observable<any>{
    const url = `${this.USERSAPIURL}/${id}`; 
    return this.http.delete<any>(url);
  }

}
