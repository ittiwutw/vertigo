import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChampagnePage } from './champagne';

@NgModule({
  declarations: [
    ChampagnePage,
  ],
  imports: [
    IonicPageModule.forChild(ChampagnePage),
  ],
})
export class ChampagnePageModule {}
