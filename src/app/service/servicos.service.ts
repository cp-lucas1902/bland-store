import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  private SERVE_URL = "http://localhost:3000/produtos";

  constructor(private http:HttpClient) { }

  get():Observable<any>{
    return this.http.get(this.SERVE_URL);
  }

  listaProdutosCarrinho(){
    
  }

  addItemCarrinho(){}
  removetemCarrinho(){}

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequest(){
    return this.http.get(this.SERVE_URL).pipe(catchError(this.handleError)); 
  }
}
