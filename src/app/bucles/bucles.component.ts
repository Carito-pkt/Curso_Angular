import { Component } from '@angular/core';
 import { Persona } from 'src/Persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {
  personas: Persona[] = [
    {nombre: 'Carolina', edad : 24},
    {nombre: 'Marcos', edad : 26},
    {nombre: 'Joss', edad : 26}

  ];
}
