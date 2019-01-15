import { NgModule } from '@angular/core';

import { BikepartsRoutingModule } from './bikeparts-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BikePartApiClientService } from './clients/bike-part-api-client.service';
import { BikepartlistpageComponent } from './pages/bikepartlistpage.component';
import { BikepartdetailsComponent } from './pages/bikepartdetails.component';

@NgModule({
  declarations: [BikepartlistpageComponent, BikepartdetailsComponent],
  imports: [
    SharedModule,
    BikepartsRoutingModule
  ],
  providers: [BikePartApiClientService]
})
export class BikepartsModule { }
