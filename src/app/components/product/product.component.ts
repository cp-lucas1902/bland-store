import { ServicosService } from './../../service/servicos.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductModel } from 'src/app/model/productmodel.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 
  produtos: Array<ProductModel> = new Array();

  constructor(private servicosService:ServicosService){}

  NgOnInit(){
    this.servicosService.getProducts();
  }

  listaProdutos(): void {
    this.servicosService.get().subscribe((data: any[]) => {
      this.produtos = data;
    })
  }


}
