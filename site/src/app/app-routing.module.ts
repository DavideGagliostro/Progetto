import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoveSiamoComponent } from './dove-siamo/dove-siamo.component';

/*
import { OfferteComponent } from './offerte/offerte.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { BicicletteComponent } from './biciclette/biciclette.component';
import { MonopattiniComponent } from './monopattini/monopattini.component';
import { BicicletteElettricheComponent } from './biciclette-elettriche/biciclette-elettriche.component';
import { BiciclettePedaliComponent } from './biciclette-pedali/biciclette-pedali.component';
*/
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { HomeComponent } from './home/home.component';
import { KeycloakGuard } from './keycloak.guard';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: 'doveSiamo',component: DoveSiamoComponent},
  {path: 'chiSiamo',component: ChiSiamoComponent},
  {path: 'products',component: ProductsComponent},

  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent, canActivate: [KeycloakGuard] },
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
