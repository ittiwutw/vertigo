import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkyHighPage } from './sky-high';

@NgModule({
  declarations: [
    SkyHighPage,
  ],
  imports: [
    IonicPageModule.forChild(SkyHighPage),
  ],
})
export class SkyHighPageModule {}
