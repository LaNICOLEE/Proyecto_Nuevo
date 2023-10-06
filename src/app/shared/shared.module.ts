import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Material
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from '../app-routing.module';
import {MatButtonModule} from '@angular/material/button'

//Componente
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    //Material
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    NavbarComponent,
    FooterComponent,
    MatButtonModule,
    MatMenuModule

  ]
})
export class SharedModule { }
