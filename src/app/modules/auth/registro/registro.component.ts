import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  hide = true; //input de contraseña

  //definimos de forma pùblica el servicioAuth
  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService
    ){ }

  //importacion del modelo

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    contrasena: '',
  }

  uid = '';

  //creamos nueva coleccion para Usuario
  coleccionUsuarios: Usuario[] = [];

  //Tomando nuevo resgistro
  //funcion(async):Es una funcion asincronica. Utilizada para funciones asincronicas porque toma mas datos de internet
  async registrarse(){      
    const credenciales = {
      nombre: this.usuarios.nombre,
      contrasena: this.usuarios.contrasena,
    };

    const res = await this.servicioAuth.registrar(credenciales.nombre, credenciales.contrasena)
    //metodo THEN devuelme misma promesa
    .then(res =>{
      alert("Ha creado un nuevo usuario con exito :D ");
    })

    //metodo CATCH creara un error en caso de que algo salga mal
    .catch(error =>
      alert("Hubo un error al crear el usuario :( \n" + error)
    );

    //creamos constante UID para el UID que obtengamos
    const uid = await this.servicioAuth.getUid();

    //referenciamos el uid nuevo con el usuario
    this.usuarios.uid = uid;

    //llamamos funcion guardarUser
    this.guardarUser();
  }

  //funcion asincronica para guardar usuarios
  async guardarUser(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res => {
      console.log(this.usuarios);
    })
    .catch(error => {
      console.log('Error =>', error);                                        
    })   
    
  }

  async ngOninit(){         
    const uid = await this.servicioAuth.getUid();
    console.log(uid);
  }
}
