import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfficesComponent } from './offices.component';

const routes: Routes = [{ path: '', component: OfficesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficesRoutingModule { }
