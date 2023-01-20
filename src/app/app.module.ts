import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PanelComponent } from './components/panel/panel.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { PredictedProductsComponent } from './components/predicted-products/predicted-products.component';
import { ModalPromotionComponent } from './components/modal/modal-promotion/modal-promotion.component';
import { ServicosService } from './service/servicos.service';
import { HttpClientModule } from '@angular/common/http';
import { PromotionComponent } from './components/promotion/promotion.component';
import { MoreComponent } from './components/more/more.component';
import { LoginComponent } from './components/login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    FooterComponent,
    PanelComponent,
    CarouselComponent,
    CollapseComponent,
    PredictedProductsComponent,
    ModalPromotionComponent,
    PromotionComponent,
    MoreComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
    
  ],
  providers: [ServicosService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
