import { Component } from '@angular/core';



@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre:string = 'Leandro';
  genero:string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


   //i18nPlural
   clientes:string[]=['Maria', 'Pedro', 'Juan', 'Eduardo', 'Fernando'];
   clientesMapa = {
    '=0':'no tenemos ningun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
    //el other es la excepcion si no se cumplen las condiciones anteriores, como el ELSE. El # me permite mostrar el numero del length que le paso como parámetro inicial.
   }

   cambiarPersona():void{
    this.nombre='Maria';
    this.genero='femenino';
   }

   borrarPersona():void{
    this.clientes.splice(0,1);
   }

   //KeyValue Pipe
   persona = {
    nombre: 'Leandro',
    edad: 35,
    direccion: 'Buenos Aires, Argentina'
   }

   //Json Pipe
   heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
   ]
}
