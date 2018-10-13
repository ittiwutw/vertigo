import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhiteWinePage } from './white-wine';

@NgModule({
  declarations: [
    WhiteWinePage,
  ],
  imports: [
    IonicPageModule.forChild(WhiteWinePage),
  ],
})
export class WhiteWinePageModule {}
