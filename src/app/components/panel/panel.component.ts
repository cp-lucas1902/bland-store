import { ServicosService } from './../../service/servicos.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  constructor(private router: Router, private service: ServicosService){}

  public carrinho: Array<any> =  new Array();
  
  ngOnInit(){}
}
