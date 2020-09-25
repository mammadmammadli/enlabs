import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficesRoutingModule } from './offices-routing.module';
import { OfficesComponent } from './offices.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [OfficesComponent],
  imports: [
    CommonModule,
    OfficesRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
  ]
})
export class OfficesModule { }
