import { Component,OnInit} from '@angular/core';
import {TarjetasInicio} from 'src/app/mpdels/modelos';
//Nueva interfaz
import { Ropa } from 'src/app/models/ropa';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  public info: Ropa[];

  constructor(){
    this.info = [
      {
        id:"",
        Ropa:"tarjeta 1",
        descripcion:"Obra de arte de Vincent van Gogh",
        imagen: "https://cdn.culturagenial.com/es/imagenes/pinturas-de-vincent-van-gogh-og.jpg",
        alt: "Almendro en flor"
      },
      {
        id:"",
        Ropa:"tarjeta 2",
        descripcion:"Obra de arte de Vincent van Gogh",
        imagen: "https://cdn.culturagenial.com/es/imagenes/pinturas-de-vincent-van-gogh-og.jpg",
        alt: "Almendro en flor"
      }
    ]
  }
  ngOnInit(): void{

  }
}
