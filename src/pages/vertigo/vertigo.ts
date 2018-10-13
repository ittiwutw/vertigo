import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ALaCartPage } from '../a-la-cart/a-la-cart';
import { Course3Page } from '../course3/course3';
import { Course4Page } from '../course4/course4';
import { Course5Page } from '../course5/course5';
import { VegetarianPage } from '../vegetarian/vegetarian';


/**
 * Generated class for the VertigoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vertigo',
  templateUrl: 'vertigo.html',
})
export class VertigoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad VertigoPage');
  }

clickALaCart() {
  this.navCtrl.push(ALaCartPage);
}

clickCourse3() {
  this.navCtrl.push(Course3Page);
}

clickCourse4() {
  this.navCtrl.push(Course4Page);
}

clickCourse5() {
  this.navCtrl.push(Course5Page);
}

clickVegetarian() {
  this.navCtrl.push(VegetarianPage);
}

}
