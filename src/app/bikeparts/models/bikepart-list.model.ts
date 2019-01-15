import { Category } from './category.model';

export interface BikePartListModel {
    id: number;
    itemNo: number,
    name: string,
    price: number,
    category: Category,
    numberInStock: number,
    ordered: number
}
