import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';
import { EsculturasComponent } from './pages/esculturas/esculturas.component';
import { ObrasComponent } from './pages/obras/obras.component';

const routes: Routes = [
  {
    
   path:"productos",component:ProductosComponent
    
  },
  {
    path:"accesorios",component:AccesoriosComponent
  },
  {
    path:"escultura",component:EsculturasComponent
  },
  {
    path:"obras",component:ObrasComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
