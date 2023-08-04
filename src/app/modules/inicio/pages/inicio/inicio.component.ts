import { Component,OnInit} from '@angular/core';
import {TarjetasInicio} from 'src/app/mpdels/modelos'


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  public info: TarjetasInicio[];

  constructor(){
    this.info = [
      {
        titulo:"tarjeta 1",
        descripcion:"Obra de arte de Vincent van Gogh",
        imagen: "https://cdn.culturagenial.com/es/imagenes/pinturas-de-vincent-van-gogh-og.jpg",
        alt: "Almendro en flor"
      }
    ]
  }
  ngOnInit(): void{

  }
}
