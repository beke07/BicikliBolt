import { Component, OnInit } from '@angular/core';
import { BikePartApiClientService } from '../clients/bike-part-api-client.service';
import { BikePartListModel } from '../models/bikepart-list.model';

@Component({
  templateUrl: './bikepartlistpage.component.html',
})
export class BikepartlistpageComponent implements OnInit {

  parts : BikePartListModel[];
  filter: string;

  constructor(private bikeApiClient: BikePartApiClientService) { }

  ngOnInit() {
    this.load();
  }

  load(){
    this.bikeApiClient.getBooks().subscribe(res => this.parts = res);
  }

  search(){
    this.bikeApiClient.getBook(this.filter).subscribe(res => this.parts = res);
  }

  order(id: number){
    this.bikeApiClient.order(id);
    this.load();
  }

}
