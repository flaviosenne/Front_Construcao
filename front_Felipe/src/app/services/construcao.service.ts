import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConstrucaoService {

  baseUrl = 'http://localhost:3000/construcao'
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(construcao: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, construcao)
  }

  read(): any{
    return this.http.get(this.baseUrl)
  }

  readById(id: String): Observable<any>{
    const url = this.baseUrl+ '/'+id
    return this.http.get<any>(url)
  }

  update(construcao: any): Observable<any> {
    const url = this.baseUrl + '/' + construcao._id
    return this.http.put<any>(url, construcao)
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
