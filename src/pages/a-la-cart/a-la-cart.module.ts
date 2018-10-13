import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ALaCartPage } from './a-la-cart';

@NgModule({
  declarations: [
    ALaCartPage,
  ],
  imports: [
    IonicPageModule.forChild(ALaCartPage),
  ],
})
export class ALaCartPageModule {}
