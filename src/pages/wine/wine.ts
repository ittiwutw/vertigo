import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ChampagnePage } from '../champagne/champagne';
import { RedWinePage } from '../red-wine/red-wine';
import { WhiteWinePage } from '../white-wine/white-wine';

/**
 * Generated class for the MoonBarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wine',
  templateUrl: 'wine.html',
})
export class WinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MoonBarPage');
  }

  clickChampagne() {
      this.navCtrl.push(ChampagnePage);
  }

  clickRedWine() {
    this.navCtrl.push(RedWinePage);
  }

  clickWhiteWine() {
    this.navCtrl.push(WhiteWinePage);
  }

}
