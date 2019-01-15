import { Category } from './category.model';

export interface BikePartModel{
    id: number,
    name: string,
    description: string,
    price: number,
    category: Category,
    numberInStock: number,
}
