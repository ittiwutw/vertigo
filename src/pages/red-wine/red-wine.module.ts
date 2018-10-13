import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RedWinePage } from './red-wine';

@NgModule({
  declarations: [
    RedWinePage,
  ],
  imports: [
    IonicPageModule.forChild(RedWinePage),
  ],
})
export class RedWinePageModule {}
