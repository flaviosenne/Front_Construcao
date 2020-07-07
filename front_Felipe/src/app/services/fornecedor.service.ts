import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  baseUrl = 'http://localhost:3000/fornecedor'

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(fornecedor: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, fornecedor)
  }

  read(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl)
  }

  readById(id: String): Observable<any>{
    const url = this.baseUrl+ '/'+id
    return this.http.get<any>(url)
  }

  update(fornecedor: any): Observable<any> {
    const url = this.baseUrl + '/' + fornecedor._id
    return this.http.put<any>(url, fornecedor)
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
