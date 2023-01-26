import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/model/productmodel.model';
import { ServicosService } from 'src/app/service/servicos.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit{

  produtos: Array<any> = new Array();

  constructor(private servicosService:ServicosService){
    this.servicosService.getProducts();
  }
  
  ngOnInit() {
    this.servicosService.get();
    this.listaProdutos();
  }

  
  listaProdutos():void{
    this.servicosService.get().subscribe((data:ProductModel[])=>{
      this.produtos = data;
    });
  }
   

  
}
