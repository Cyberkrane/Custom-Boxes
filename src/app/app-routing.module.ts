import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  {
    path: '',component:HomeComponent
  },
  {
    path: 'inicio',component:HomeComponent
  },
  {
    path: 'products',component:ProductsPageComponent
  },
  {
    path: 'contacto',component:ContactoComponent
  },
  {
    path: '**',redirectTo:'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
