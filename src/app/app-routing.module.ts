import { RegisterComponent } from './components/register/register.component';
import { MoreComponent } from './components/more/more.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main', component: MainComponent },
  { path: 'promotion', component: PromotionComponent },
  { path: 'more', component: MoreComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
