import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar'

// responssável por fazer requisições HTTP nas APIs
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArquitetoService {

  baseUrl = 'http://localhost:3000/arquiteto'
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }


  create(arquiteto: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, arquiteto)
  }

  read(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl)
  }

  readById(id: String): Observable<any>{
    const url = this.baseUrl+'/'+id
    console.log('get ', url)
    return this.http.get<any>(url)
  }
  update(id: String, arquiteto: any): Observable<any> {
    const url = this.baseUrl + '/' + id
    return this.http.put(url, arquiteto)
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
