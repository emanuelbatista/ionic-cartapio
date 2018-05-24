import { Restaurant } from './../../model/restaurant';
import { RepositoryProvider } from './../../providers/repository/repository';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsRestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: "details-restauran/:id"
})
@Component({
  selector: 'page-details-restaurant',
  templateUrl: 'details-restaurant.html',
})
export class DetailsRestaurantPage implements OnInit{

  restaurant: Restaurant;
  private id: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public repo: RepositoryProvider
  ) {
    this.id = navParams.data.id;
  }

  ngOnInit(): void {
    this.repo.getRestaurantById(this.id).then(input=>{
      this.restaurant = input;
    })
  }
  

}
