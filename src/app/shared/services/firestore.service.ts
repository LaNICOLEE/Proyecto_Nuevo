import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private usuariosCollection: AngularFirestoreCollection<Usuario>;

  constructor(private database: AngularFirestore) {
    this.usuariosCollection=this.database.collection<Usuario>('usuarios'); //Modelos de usuario, es buscar en usuarios. Es una conexion
   }

   agregarUsuario(usuario: Usuario, id: string){
    //resolve --> resuelto (similar al then)
    //reject --> rechazo (similar al catch)
    return new Promise(async(resolve, reject) =>{
      //hace una captura de los datos -> similar screenshot
      try{
        usuario.uid = id;
        const resultado = await this.usuariosCollection.doc(id).set(usuario);

        //retornara el resultado
        resolve(resultado)
      }catch(error){
        
        //retornara el error
        reject(error)
      }

    })
   }
}
