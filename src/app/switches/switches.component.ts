import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent {
  
  opcionE: number | undefined;

  asignarOpcion(opcion: HTMLInputElement) {
    this.opcionE = parseInt(opcion.value, 10); // Convierte la cadena en un número entero base 10
  }
}
