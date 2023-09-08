import { Injectable } from '@angular/core';

import {AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //referenciar autentificacion de firebase 
  constructor(public auth: AngularFireAuth) { }

  //funcion para el inicio de sesion
  iniciarSesion(email: string, contrasena: string){
    return this.auth.signInWithEmailAndPassword(email, contrasena);
  }

  cerrarSesion(){
    //devuelve una promesa vacia
    return this.auth.signOut();
  }
    
  //funcion para retornar nueva informacion para nombre y sontraseña
  registrar(email: string, contrasena: string){
   return this.auth.createUserWithEmailAndPassword(email,contrasena)
  }

  // funcion asincronica para tomar UID
  async getUid(){
    //CURRENTUSER -> JUNTO A LA PROMESA, GENERA UNA CAPTURA DE ESTATUS
    const user = await this.auth.currentUser;

    if(user == null){
      return null;
    }else{
      return user.uid;
    }
  }
}
