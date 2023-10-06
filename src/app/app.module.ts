import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// COMPONENTES GLOBALES
import { SharedModule } from './shared/shared.module';

// FIREBASE
// Nos conectamos con la BD; NOS TRAE MÓDULOS NECESARIOS
import { environmnent } from 'src/environments/environment.prod';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //importar modulos globales
    SharedModule,
    //modulos de firebase
    AngularFireModule.initializeApp(environmnent.firebaseConfig), //inicializa firebase
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
