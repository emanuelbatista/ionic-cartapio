import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsRestaurantPage } from './details-restaurant';

@NgModule({
  declarations: [
    DetailsRestaurantPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsRestaurantPage),
  ],
})
export class DetailsRestaurantPageModule {}
