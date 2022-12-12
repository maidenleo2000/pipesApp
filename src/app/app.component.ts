import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  nombre:string = 'leandro martello';
  numero:number = 1000;

  obj={
    nombre: 'Leandro'
  }

  cambiarNombre(){
    console.log(this.nombre);
    console.log(this.numero);
    console.log(this.obj);
  }
}
