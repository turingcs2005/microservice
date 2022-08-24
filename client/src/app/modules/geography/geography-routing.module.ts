import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeographyComponent } from './geography.component';

const routes: Routes = [{ path: '', component: GeographyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeographyRoutingModule { }
