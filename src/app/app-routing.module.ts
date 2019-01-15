import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { BikepartsModule } from './bikeparts/bikeparts.module';

const routes: Routes = [
  { path: '', loadChildren: () => CoreModule },
  { path: 'parts', loadChildren: () => BikepartsModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
