import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAppComponent } from './main-app/main-app.component';
import { PorterosComponent } from './porteros/porteros/porteros.component';

const routes: Routes = [
  {
    //Pagina principal
    path: '', component: MainAppComponent
  },
  {
    //Esta pagina va a ser la de porteros, va a heredar a porteros
    path: 'porteros', loadChildren: () => import('./porteros/porteros/porteros.component').then(p => 
      p.PorterosComponent)
  },
  //Si alguien escribe cualquier ruta que no esté arriba, le hará un redirect a la pagina principal
  {
      path: '**', redirectTo: '/', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
