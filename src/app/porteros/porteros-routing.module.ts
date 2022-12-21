import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorterosComponent } from './porteros/porteros.component';
import { PorterosFormComponent } from './porteros-form/porteros-form.component';

const routes: Routes = [
  {
    //Ruta predeterminada y donde se deberia mostrar una lista
    path: 'porteros', component: PorterosComponent
  },
  {
    //Ruta para ir al formulario de porteros
    path: 'porteros/edit/:idPortero', component: PorterosFormComponent
  },
  {
    //Si la ruta no es ninguna de las de arriba, se redirige a la pagina principal
    path: '**', redirectTo: 'porteros', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PorterosRoutingModule { }
