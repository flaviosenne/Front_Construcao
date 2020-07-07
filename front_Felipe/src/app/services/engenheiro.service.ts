import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EngenheiroService {
  baseUrl = 'http://localhost:3000/engenheiro'

  engenheiro: any = {
    nome:"",
		cpf: "",
		crea:"",
	  telefone:"",
	  endereco:"",
	  email:""
  }

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  read(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl)
  }

  readById(id: String): Observable<any> {
    const url = this.baseUrl + '/' + id
    return this.http.get<any>(url)
  }

  create(engenheiro: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, engenheiro)
  }

  update(engenheiro: any): Observable<any> {
    const url = this.baseUrl + '/' + engenheiro._id
    return this.http.put(url, engenheiro)
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
