import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorterosRoutingModule } from './porteros-routing.module';
import { PorterosComponent } from './porteros/porteros.component';
import { PorterosFormComponent } from './porteros-form/porteros-form.component';
import { ListaPorterosComponent } from './lista-porteros/lista-porteros.component';


@NgModule({
  declarations: [
    PorterosComponent,
    PorterosFormComponent,
    ListaPorterosComponent
  ],
  imports: [
    CommonModule,
    PorterosRoutingModule
  ]
})
export class PorterosModule { }
