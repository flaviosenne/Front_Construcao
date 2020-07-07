import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {
  baseUrl = 'http://localhost:3000/projeto'
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
 

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(projeto: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, projeto)
  }

  read(): any{
    return this.http.get(this.baseUrl)
  }

  readById(id: String): Observable<any>{
    const url = this.baseUrl+ '/'+id
    return this.http.get<any>(url)
  }

  update(projeto: any): Observable<any> {
    const url = this.baseUrl + '/' + projeto._id
    console.log('do update '+ url)
    return this.http.put<any>(url, projeto)
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
