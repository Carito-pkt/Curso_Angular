import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { FotografiaComponent } from './fotografia/fotografia.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchesComponent } from './switches/switches.component';
import { PracticaSwComponent } from './practica-sw/practica-sw.component'; //importo el typescript
@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    BotonesComponent,
    FotografiaComponent,
    FormularioComponent,
    BuclesComponent,
    SwitchesComponent,
    PracticaSwComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
