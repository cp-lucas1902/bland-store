import { ServicosService } from 'src/app/service/servicos.service';
import { Router } from '@angular/router';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ProductModel } from 'src/app/model/productmodel.model';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
	qtItens = 0;
	closeResult: string | undefined;
	public count = 0;
	carrinhoMostra: Array<any> = new Array();
	http: any;
	total:number = 0;
	constructor(private offcanvasService: NgbOffcanvas,
		private router: Router,
		private cartService: CartService) { }
	ngOnInit(): void {
	
	}

	openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}

	openTop(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'top' });
	}

	openBottom(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'bottom' });
	}

	openNoBackdrop(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { backdrop: false });
	}

	openStaticBackdrop(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { backdrop: 'static' });
	}

	openScroll(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { scroll: true });
	}

	openNoKeyboard(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { keyboard: false });
	}

	openNoAnimation(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { animation: false });
	}

	openCustomBackdropClass(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { backdropClass: 'bg-info' });
	}

	openCustomPanelClass(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { panelClass: 'bg-info' });
	}

	goToLogin() {
		this.router.navigate(['/login']);
	}

	quantidadeItensCart() {
		this.qtItens = this.carrinhoMostra.length;
	}

	getListCart(): any {
		this.carrinhoMostra = this.cartService.getListCart();
	}

	//ADICIONA E REMOVER QUANTIDADE DO CARRINHO
	MaxOrMin(count: number): void {
		if (count == 1) {
			this.count = this.count + count;
		} else if (count == -1) {
			this.count = this.count - 1;
			if (this.count == -1) {
				this.count = 0;
			}
		}
	}

	removeItemCarrinho(item: any) {
		this.cartService.removeItem(item);
	}

	public getTotal(total:number):any{
		total = this.cartService.totalCart(total);
		return this.total = total
	}
}
