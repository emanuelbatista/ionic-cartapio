import { Restaurant } from './../../model/restaurant';
import { RepositoryProvider } from './../../providers/repository/repository';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  restaurants: Restaurant[];

  constructor(
    public navCtrl: NavController,
    public repo: RepositoryProvider
  ) {}

  ngOnInit(): void {
    this.repo.getRestaurants.then(restaurants=>this.restaurants=restaurants);
  }

  openCard(id: number): void{
    this.navCtrl.push('DetailsRestaurantPage', {'id': id});
  }

}
