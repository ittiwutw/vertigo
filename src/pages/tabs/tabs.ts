import { Component } from '@angular/core';
import { NavParams,NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MoonBarPage } from '../moon-bar/moon-bar';
import { BeveragePage } from '../beverage/beverage';
import { WinePage } from '../wine/wine';
import { VertigoPage } from '../vertigo/vertigo';
import { PopoverController } from 'ionic-angular';
import { PromotionPage } from '../promotion/promotion';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabMoonBar = MoonBarPage;
  tabBeverage = BeveragePage
  tabHome = HomePage;
  tabWine = WinePage;
  tabVertigo = VertigoPage;

  constructor(public popoverCtrl: PopoverController,public navParams: NavParams,public navCtrl: NavController) {
  }

}
