import { Component } from '@angular/core';
import { Persona } from 'src/Persona';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  
  /*persona:Persona = {
    nombre: 'Carolina Castillo',
    edad:24
  };*/
  numero: number = 1; 

  decrementar(){
    this.numero--;
  }

  incrementar(){
    this.numero++;
  }
}
