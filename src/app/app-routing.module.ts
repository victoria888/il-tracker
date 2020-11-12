import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackerComponent } from './tracker/tracker.component';
import { HomeComponent } from './utils/home/home.component';

const routes: Routes = [
  {
    path:'tracker',
    component: TrackerComponent,
  },
  {
    path:'',
    component: HomeComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
