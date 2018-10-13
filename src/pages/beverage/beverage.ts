import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpiritPage } from '../spirit/spirit';
import { CocktailPage } from '../cocktail/cocktail';
import { MocktailPage } from '../mocktail/mocktail';
import { PromotionPage } from '../promotion/promotion';

/**
 * Generated class for the BeveragePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beverage',
  templateUrl: 'beverage.html',
})
export class BeveragePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeveragePage');
  }

  clickSpirit() {
    this.navCtrl.push(SpiritPage);
  }

  clickCocktail() {
    this.navCtrl.push(CocktailPage);
  }

  clickMocktail() {
    this.navCtrl.push(MocktailPage);
  }

  clickPromotion() {
    this.navCtrl.push(PromotionPage);
}
}
