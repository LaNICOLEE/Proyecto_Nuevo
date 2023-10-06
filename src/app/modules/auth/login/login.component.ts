import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;

  usuarios: Usuario = {
    uid:'',
    nombre:'',
    rol:'',
    email:'',
    contrasena:''
  }

  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public router:  Router
  ){};

  // llamamos función para INICIAR SESIÓN
  async iniciar(){
    const credenciales = {
      email: this.usuarios.email,
      contrasena: this.usuarios.contrasena
    }

    const res = await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.contrasena)
    //METODO THEN -> CUANDO FUNCIONA CORRECTAMENTE

    .then(res => {
      alert("Ha accedido con exito :)");
      console.log(credenciales.email);

      this.router.navigate(['/inicio']);
    })
    //METODO THEN -> ENCAPSULA UN FALLO
    .catch(error => {
      alert("Hubo un error al iniciar sesion :( \n" + error);

      console.log(credenciales.email);
    })
    
  }
  //llamamos funcion para CERRAR SESION :) 
  async salir(){
    const res = await this.servicioAuth.cerrarSesion()
    .then(res => {
      alert("Ha cerrado sesion con exito.");
      console.log(res);

      this.router.navigate(['/inicio']);
    })
  }
}
