import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor(private http:HttpClient) { }

  listaProdutos():Observable<any>{
    return this.http.get("http://localhost:3000/produtos/");
  }

  listaProdutosCarrinho(){
    
  }
}
