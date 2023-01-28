import { CartService } from './../../service/cart.service';
import { ServicosService } from './../../service/servicos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from 'src/app/model/productmodel.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit{
constructor(private router: Router){}
  
ngOnInit(){}
  
}
