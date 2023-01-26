import { ProductModel } from './../../model/productmodel.model';
import { ServicosService } from './../../service/servicos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-predicted-products',
  templateUrl: './predicted-products.component.html',
  styleUrls: ['./predicted-products.component.css']
})


export class PredictedProductsComponent implements OnInit {

  produto!: ProductModel;
  produtos: Array<ProductModel> = new Array();

  constructor(private seriveProduto: ServicosService, private router: Router) { }

  ngOnInit() {
    this.seriveProduto.get();
    this.listaProdutos();
  }

  listaProdutos(): void {
    this.seriveProduto.get().subscribe((data: any[]) => {
      this.produtos = data;
    })
  }

  cadastrarItemCart() {
    this.seriveProduto.addProducts(this.produto).subscribe(produto => {
      //this.produto = new ProductModel();
      this.listaProdutos();
    })
  }

}
