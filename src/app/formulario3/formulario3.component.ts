import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css']
})
export class Formulario3Component {

  get getName(){
    return this.formUser.get('name') as FormControl;
  }

  get getEmail(){
    return this.formUser.get('email') as FormControl;
  }

  formUser = new FormGroup({
    'name': new FormControl('',Validators.required),
    'email': new FormControl('', [Validators.email, Validators.required])
  });

  procesar(){
    console.log(this.formUser.value)
  }

}
