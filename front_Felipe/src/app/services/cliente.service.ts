import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = 'http://localhost:3000/cliente'
  
  constructor(private snackBar: MatSnackBar, 
    private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(cliente: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, cliente)
  }

  read(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl)
  }

  readById(_id: String): Observable<any>{
    const url = this.baseUrl+'/'+_id
    console.log('get ', url)
    return this.http.get<any>(url)
  }

  update(cliente: any): Observable<any> {
    const url = this.baseUrl + '/' + cliente._id
    return this.http.put<any>(url, cliente)
  }

  delete(id: String) {
    const url = this.baseUrl
    return this.http.request('DELETE', url,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body:  {_id: id }
    })
  }


}
