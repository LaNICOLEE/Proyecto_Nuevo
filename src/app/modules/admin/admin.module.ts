import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// ARCHIVO DE RUTAS
import { AdminRoutingModule } from './admin-routing.module';

// COMPONENTE
import { TableComponent } from './compomnents/table/table.component';

// VISTA
import { AdminComponent } from './pages/admin/admin.component';

// MATERIAL
import { MatIconModule } from '@angular/material/icon';

// ANGULAR
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    AdminComponent,
    TableComponent,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
