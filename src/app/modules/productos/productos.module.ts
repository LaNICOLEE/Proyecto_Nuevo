import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { CardComponent } from './components/card/card.component';
import { ObrasComponent } from './pages/obras/obras.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';
import { EsculturasComponent } from './pages/esculturas/esculturas.component'
import { ProductosComponent } from './pages/productos/productos.component';




@NgModule({
  declarations: [
    CardComponent,
    ProductosComponent,
    ObrasComponent,
    AccesoriosComponent,
    EsculturasComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
  ],
  exports:[
    CardComponent,
    ProductosComponent,
    ObrasComponent,
    AccesoriosComponent,
    EsculturasComponent
  ]
})
export class ProductosModule { }
