import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { of, Observable } from 'rxjs';
import { BikePartModel } from '../models/bikepart.model';
import { BikePartListModel } from '../models/bikepart-list.model';

const partMock: BikePartListModel[] = [
  { id: 1, category: Category.Man, itemNo: 1, name: "Kormány", numberInStock: 20, ordered: 12, price: 1200 },
  { id: 2, category: Category.Woman, itemNo: 2, name: "Hajtókar", numberInStock: 10, ordered: 0, price: 3000 },
  { id: 3, category: Category.Woman, itemNo: 3, name: "Ülés", numberInStock: 30, ordered: 30, price: 30000 },
  { id: 4, category: Category.Child, itemNo: 4, name: "Csengő", numberInStock: 40, ordered: 11, price: 450 },
];

const partDetailsMocks: BikePartModel[] =
    partMock.map((x: BikePartListModel): BikePartModel => ({
    ...x,
    description: "Mindegyik alkatrész leírása ugyanaz egyelőre"
  }));

@Injectable()
export class BikePartApiClientService {

  constructor() { }

  getBooks(): Observable<BikePartListModel[]> {
    return of(partMock);
  }

  getBook(filter: string): Observable<BikePartListModel[]>{
    return of(partMock.filter(p => p.name.toLowerCase().includes(filter.toLowerCase())));
  }

  getBikeDetails(id: number): Observable<BikePartModel>{
    return of(partDetailsMocks.find(p => p.id === id));
  }

  order(id: number){
    var bike = partMock.find(p => p.id === id);
    if(bike.numberInStock - bike.ordered === 0){
      alert("Kifogyott!");
    }
    else{
      bike.ordered++;
    }
  }
}
