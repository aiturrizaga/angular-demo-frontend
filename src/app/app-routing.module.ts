import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UbigeoComponent } from './components/ubigeo/ubigeo.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { UbigeoFormComponent } from './components/ubigeo-form/ubigeo-form.component';

const routes: Routes = [
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'ubigeo'
  },
  {
    path: 'ubigeo',
    component: UbigeoComponent
  },
  {
    path: 'cliente',
    component: ClienteComponent
  },
  {
    path: 'ubigeo-form',
    component: UbigeoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
