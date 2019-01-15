import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikepartlistpageComponent } from './pages/bikepartlistpage.component';
import { BikepartdetailsComponent } from './pages/bikepartdetails.component';

const routes: Routes = [
  { path: '', component: BikepartlistpageComponent },
  { path: ':id', component: BikepartdetailsComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikepartsRoutingModule { }
