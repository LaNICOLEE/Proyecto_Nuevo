import { Injectable } from '@angular/core';

import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }

  registrar(nombre: string, contraseña: string){
   return this.auth.createUserWithEmailAndPassword(nombre,contraseña)
  }
}
