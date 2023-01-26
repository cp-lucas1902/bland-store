import { ProductModel } from 'src/app/model/productmodel.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicosService {
  

  constructor(private http:HttpClient) { }

  private SERVE_URL = "http://localhost:3000/produtos";

  listcarrinho: ProductModel[] = [];

  getTotal() {
    throw new Error('Method not implemented.');
  }
 
  getValue(): any {
      throw new Error('Method not implemented.');
  }

  get():Observable<any>{
    return this.http.get(this.SERVE_URL);
  }

  getProducts(){
    return this.http.get(`${this.SERVE_URL}itens`)
  }

  //ADICIONA PRODUTO NO CARRINHO
  addProducts(product:ProductModel):Observable<any>{
     return this.http.post("http://localhost:3000/produtos", product);
  }



 
  

 
}
