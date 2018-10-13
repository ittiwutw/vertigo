import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VegetarianPage } from './vegetarian';

@NgModule({
  declarations: [
    VegetarianPage,
  ],
  imports: [
    IonicPageModule.forChild(VegetarianPage),
  ],
})
export class VegetarianPageModule {}
