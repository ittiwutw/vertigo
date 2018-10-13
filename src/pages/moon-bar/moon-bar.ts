import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { SnackPage } from '../snack/snack';

/**
 * Generated class for the MoonBarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moon-bar',
  templateUrl: 'moon-bar.html',
})
export class MoonBarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoonBarPage');
  }

  

  clickSnack() {
    this.navCtrl.push(SnackPage);
  }

}
