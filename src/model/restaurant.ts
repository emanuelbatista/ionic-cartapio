import { GenerateUtil } from './../util/generate-util';
import { ItemSale } from './item-sale';
export class Restaurant{
    id: string;
    name: string;
    image: string;
    description: string;
    status: Status
    itemSales: ItemSale[] = [];

    constructor(){
        this.id = GenerateUtil.getUUID();
    }
}
export enum Status {
    OPEN, CLOSE
}