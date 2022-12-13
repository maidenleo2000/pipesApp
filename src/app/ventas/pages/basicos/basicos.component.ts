import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {


  nombreLower:string = 'leandro';
  nombreUpper:string = 'LEANDRO';
  nombreCompleto:string = 'lEaNdrO MartEllO';

  fecha: Date = new Date(); //El dia de hoy
}
