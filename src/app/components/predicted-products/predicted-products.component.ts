import { CartService } from './../../service/cart.service';
import { ProductModel } from './../../model/productmodel.model';
import { ServicosService } from './../../service/servicos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbAlert, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { config, debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-predicted-products',
  templateUrl: './predicted-products.component.html',
  styleUrls: ['./predicted-products.component.css']
})


export class PredictedProductsComponent  {
  private _success = new Subject<string>();
  staticAlertClosed = false;
	successMessage = '';
  carrinhoLista: Array<any> = [];
  mostraProdutos: Array<any> = new Array();
  

  constructor(private seriveProduto: ServicosService, private servicoCart: CartService,config: NgbModalConfig, private modalService: NgbModal) {
    this.seriveProduto.getProducts();
    config.backdrop = 'static';
		config.keyboard = false;
  }
  
  ngOnInit():void{
    this.seriveProduto.get();
    this.listaProdutos();
    this.recebeListaCarrinho();
  }

  open(content: any) {
		this.modalService.open(content);
	}

  recebeListaCarrinho(): void {
    this.carrinhoLista = this.servicoCart.getListCart();
  }

  addItem(item: ProductModel) {
    this.servicoCart.addItemCart(item);
    this.recebeListaCarrinho();
  }

  listaProdutos(): void {
    this.seriveProduto.get().subscribe((data: ProductModel[]) => {
      this.mostraProdutos = data;
    });
   }

   
}
