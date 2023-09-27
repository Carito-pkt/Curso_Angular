import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { FotografiaComponent } from './fotografia/fotografia.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchesComponent } from './switches/switches.component';
import { PracticaSwComponent } from './practica-sw/practica-sw.component';
import { Formulario2Component } from './formulario2/formulario2.component'; //importo el typescript
import { Formulario3Component } from './formulario3/formulario3.component';
@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    BotonesComponent,
    FotografiaComponent,
    FormularioComponent,
    BuclesComponent,
    SwitchesComponent,
    PracticaSwComponent,
    Formulario2Component,
    Formulario3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
