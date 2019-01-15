import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikePartApiClientService } from '../clients/bike-part-api-client.service';
import { BikePartModel } from '../models/bikepart.model';

@Component({
  selector: 'app-bikepartdetails',
  templateUrl: './bikepartdetails.component.html',
  styles: []
})
export class BikepartdetailsComponent implements OnInit {

  bike: BikePartModel;

  constructor(
    private route: ActivatedRoute,
    private bikeApiClient: BikePartApiClientService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    
    this.bikeApiClient
    .getBikeDetails(id)
    .subscribe(res => this.bike = res);
  }

}
