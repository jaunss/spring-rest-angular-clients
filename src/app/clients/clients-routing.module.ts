import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ClientsFormComponent } from './clients-form/clients-form.component';
import { ClientsListComponent } from './clients-list/clients-list.component';

const routes: Routes = [
  {
    path: 'clients', component: LayoutComponent, children: [
      { path: 'form', component: ClientsFormComponent },
      { path: 'form/:idClient', component: ClientsFormComponent },
      { path: 'list', component: ClientsListComponent },
      { path: '', redirectTo: '/clients/list', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }