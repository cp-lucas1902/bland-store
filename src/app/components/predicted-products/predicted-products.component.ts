import { ServicosService } from './../../service/servicos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-predicted-products',
  templateUrl: './predicted-products.component.html',
  styleUrls: ['./predicted-products.component.css']
})
export class PredictedProductsComponent implements OnInit{
     
    produtos: Array<any> = new Array();

     constructor(private seriveProduto: ServicosService,private router: Router){}
     
     ngOnInit(){
        this.seriveProduto.listaProdutos();
     }

    listaProdutos(){
        this.seriveProduto.listaProdutos().subscribe(produtos =>{
          this.produtos = produtos;
        }, err =>{
          console.log('Erro Lista de Produtos', err);
        })
     }
}
