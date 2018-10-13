import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MocktailPage } from './mocktail';

@NgModule({
  declarations: [
    MocktailPage,
  ],
  imports: [
    IonicPageModule.forChild(MocktailPage),
  ],
})
export class MocktailPageModule {}
