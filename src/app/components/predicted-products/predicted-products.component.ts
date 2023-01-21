import { ServicosService } from './../../service/servicos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-predicted-products',
  templateUrl: './predicted-products.component.html',
  styleUrls: ['./predicted-products.component.css']
})
export class PredictedProductsComponent implements OnInit {

  constructor(private seriveProduto: ServicosService, private router: Router) { }
 
  public produtos: Array<any> = new Array();

  ngOnInit() {
    this.seriveProduto.get();
    this.listaProdutos();
  }

  listaProdutos():void {
    this.seriveProduto.get().subscribe((data: any[])=>{  
			this.produtos = data;  
		})
  }
}
