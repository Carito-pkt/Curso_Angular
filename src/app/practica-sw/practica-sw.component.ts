import { Component } from '@angular/core';

@Component({
  selector: 'app-practica-sw',
  templateUrl: './practica-sw.component.html',
  styleUrls: ['./practica-sw.component.css']
})
export class PracticaSwComponent {
  opcionSeleccionada: number | undefined; 

  seleccionO(optionSL: HTMLInputElement) {
    this.opcionSeleccionada = parseInt(optionSL.value, 10);
  }
}
