import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/model/productmodel.model';
import { ServicosService } from 'src/app/service/servicos.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  carrinho:Array<ProductModel> = new Array();
  i:number = 0;

  constructor(private servico: ServicosService) { }

  addItemCart(itemRecebe: ProductModel): void {

    
    if (itemRecebe != null) {
      //VERIFICA SE O ITEM JA TEM NO CARRINHO
      for (var item of this.carrinho) {
        console.log("VERIFICANDO SE TEM NO CARRINHO");
        if (item.codigoItem == itemRecebe.codigoItem) {
          item.quantidade = item.quantidade + 1;
        }
      }
      this.carrinho.push(itemRecebe);

    }else{
      console.error("Error ao Adicionar Item");
    }
    this.mostraCarrinho();
  }

  mostraCarrinho():void{
    console.log(this.carrinho);
  }
  getListCart(): Array<any> {
    return this.carrinho;
  }

  getListProducts():void{
    this.servico.get();
  }

  removeItem(item:any):void{
    if(item != null){
      for(var veri of this.carrinho){
        if(item.codigoItem == veri.codigoItem){
          this.carrinho.splice(this.carrinho.indexOf(item.codigoItem), 1);
        }
      }
    }
  }

  totalCart(total:number):any{
    if(total == 0){
      for ( var i = 0; i < this.carrinho.length; i++ ){
        total = total  + this.carrinho[i].price;
        console.log('TOTAL:' + total + '=' + total+ '+' + this.carrinho[i].price)
     }
     if(total == 1){
      //Diminuir valor apos remover no carrinho
     }
      console.log('Fim metodo'+total);
    }
    return total;
  }
}
