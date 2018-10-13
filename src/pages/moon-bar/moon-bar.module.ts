import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoonBarPage } from './moon-bar';

@NgModule({
  declarations: [
    MoonBarPage,
  ],
  imports: [
    IonicPageModule.forChild(MoonBarPage),
  ],
})
export class MoonBarPageModule {}
