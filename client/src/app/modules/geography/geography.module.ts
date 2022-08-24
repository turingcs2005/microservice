import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeographyRoutingModule } from './geography-routing.module';
import { GeographyComponent } from './geography.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GeographyComponent
  ],
  imports: [
    CommonModule,
    GeographyRoutingModule,
    SharedModule
  ]
})
export class GeographyModule { }
