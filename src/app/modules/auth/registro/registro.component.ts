import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  hide = true; //input de contraseña

  //definimos de forma pùblica el servicioAuth
  constructor(public servicioAuth: AuthService){ }

  //importacion del modelo

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    contrasena: '',
  }

  //Tomando nuevo resgistro
  async registrarse(){      //funcion(async):Es una funcion asincronica. Utilizada para funciones asincronicas porque toma mas datos de internet
    const credenciales = {
      nombre: this.usuarios.nombre,
      contrasena: this.usuarios.contrasena,
    };

    const res = await this.servicioAuth.registrar(credenciales.nombre, credenciales.contrasena)
    .then(res =>{
      alert("Ha creado un nuevo usuario con exito :) ");
    })

    console.log(res)
  }
}
