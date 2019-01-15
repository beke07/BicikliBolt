import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { HomePageComponent } from './pages/homepage.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    SharedModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
