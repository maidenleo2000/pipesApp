import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  nombre:string = 'leandro martello';
  numero:number = 1000;

  obj={
    nombre: 'Leandro'
  }

  //esta inyeccion e implementacion en el ngOnInit sirve para poder ver en el Fieldset el efecto burbuja al hacer click en el header o i18n.. y para todos los botones que usan ese efecto como tambien en el propio MENU
  constructor(private primengConfig: PrimeNGConfig){}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  cambiarNombre(){
    console.log(this.nombre);
    console.log(this.numero);
    console.log(this.obj);
  }
}
