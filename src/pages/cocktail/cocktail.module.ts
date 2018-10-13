import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CocktailPage } from './cocktail';

@NgModule({
  declarations: [
    CocktailPage,
  ],
  imports: [
    IonicPageModule.forChild(CocktailPage),
  ],
})
export class CocktailPageModule {}
