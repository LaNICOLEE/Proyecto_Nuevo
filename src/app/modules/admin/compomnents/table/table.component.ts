import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  coleccionProductos: Producto[] = []; // creamos colección basada en interfaz Producto

  productoSeleccionado!: Producto; // ! -> recibir valores vacíos

  modalVisibleProducto: boolean = false;

  // modalVisible: boolean = false;
  // eliminarVisible: boolean = false;

  //formulario vinculado al archivo html
  producto = new FormGroup({
    nombre: new FormControl('',Validators.required),
    imagen: new FormControl('',Validators.required),
    alt: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    precio: new FormControl(0,Validators.required),
    categoria: new FormControl('',Validators.required)
  })

  constructor(
    public servicioCrud: CrudService // patentamos servicio de forma local
  ){}

  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }

  async agregarProducto(){ // método para validar esos valores del producto agregado
    if(this.producto.valid){
      let nuevoProducto: Producto = {
        idProducto: '',
        nombre: this.producto.value.nombre!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!,
        descripcion: this.producto.value.descripcion!,
        precio: this.producto.value.precio!,
        categoria: this.producto.value.categoria!
      };

      // llamamos al servicioCrud; función crearProducto; seteamos nuevoProducto
      await this.servicioCrud.crearProducto(nuevoProducto)
      .then(producto => {
        alert("Ha agregado un nuevo producto con éxito :)");
      })
      .catch(error => {
        alert("Hubo un error al cargar nuevo producto :( \n"+error);
      })
    }
  }

  // EDITAR PRODUCTO --> vincula al modal de editar
  mostrarEditar(productoSeleccionado: Producto){
    this.productoSeleccionado = productoSeleccionado;

    this.producto.setValue({
      nombre: productoSeleccionado.nombre,
      imagen: productoSeleccionado.imagen,
      alt: productoSeleccionado.alt,
      descripcion: productoSeleccionado.descripcion,
      precio: productoSeleccionado.precio,
      categoria: productoSeleccionado.categoria,
    })
  }

  //VINCULA A BOTON "guardar cambios"
  //recibir los valores nuevos que ingresemos en el formulario
  editarProducto(){
    let datos: Producto = {
      idProducto: this.productoSeleccionado.idProducto,
      //signo de exclamacion "!" -> puede recibir valores vacios al inicializar
      nombre: this.producto.value.nombre!,
      imagen: this.producto.value.imagen!,
      alt: this.producto.value.alt!,
      descripcion: this.producto.value.descripcion!,
      precio: this.producto.value.precio!,
      categoria: this.producto.value.categoria!
    }

    this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, datos)
    .then(producto =>{
      alert("El producto fue modificado con exito :) . ");
    })
    .catch(error => {
      alert ("No se pudo modificar el producto :( . \n" + error);
    })
  }
  //eliminar el producto
  mostrarBorrar(productoSeleccionado: Producto){
    this.modalVisibleProducto = true;
    this.productoSeleccionado
  }
}