import { ItemSale } from './../../model/item-sale';
import { Restaurant, Status } from './../../model/restaurant';
import { Injectable } from '@angular/core';
import { RequestOrder } from '../../model/request-order';

/*
  Generated class for the RepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RepositoryProvider{

  private restaurants: Restaurant[] = [];
  private requestOrders: RequestOrder[] = [];

  constructor() {
     //mocks datas
    this.mockRestaurants();
     //
    this.mockItemsRestaurants();
  }


  private mockItemsRestaurants() {
    let item1 = new ItemSale();
    item1.nome = "Quentinha pequena";
    item1.description = "Quentinha pequena com 2 opções de carnes";
    item1.image = null;
    //
    let item2 = new ItemSale();
    item2.nome = "Pizza pequena";
    item2.description = "Pizza pequena com 2 opções de sabores";
    item2.image = null;
    //
    let item3 = new ItemSale();
    item3.nome = "Pizza grande";
    item3.description = "Pizza grande com 3 opções de sabores";
    item3.image = null;
    console.log(this.restaurants)
    this.restaurants[0].itemSales.push(item1);
    this.restaurants[1].itemSales.push(item2, item3);
    this.restaurants[2].itemSales.push(item2, item3);
  }

  private mockRestaurants() {
    let restaurant1 = new Restaurant();
    restaurant1.name = "Comida Boa";
    restaurant1.image = null;
    restaurant1.status = Status.CLOSE;
    restaurant1.description = "Aqui é comida Boa";
    //
    let restaurant2 = new Restaurant();
    restaurant2.name = "Pizzaria do Zé";
    restaurant2.image = null;
    restaurant2.status = Status.OPEN;
    restaurant2.description = "Comida boa só aqui";
    //
    let restaurant3 = new Restaurant();
    restaurant3.name = "Pizzaria do João";
    restaurant3.image = null;
    restaurant3.status = Status.OPEN;
    restaurant3.description = "Pizzaria top dos tops";
    //
    this.restaurants.push(restaurant1, restaurant2, restaurant3);
  }

  public get getRestaurants(): Promise<Restaurant[]>{
    return new Promise((resolved)=>{
      resolved(this.restaurants);
    })
  }

  public getRestaurantById(id: string): Promise<Restaurant> {
     return Promise.resolve(this.restaurants.filter((value)=>value.id == id)[0]);
  }
}
