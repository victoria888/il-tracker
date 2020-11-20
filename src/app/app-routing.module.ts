import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackerComponent } from './tracker/tracker.component';
import { HomeComponent } from './utils/home/home.component';
import { ShipFormComponent } from './shipform/ship-form/ship-form.component';

const routes: Routes = [
  {
    path:'tracker',
    component: TrackerComponent,
  },
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'shipment',
    component: ShipFormComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
