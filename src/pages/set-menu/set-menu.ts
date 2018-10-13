import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Course3Page } from '../course3/course3';
import { Course4Page } from '../course4/course4';
import { Course5Page } from '../course5/course5';
import { VegetarianPage } from '../vegetarian/vegetarian';

/**
 * Generated class for the SetMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-menu',
  templateUrl: 'set-menu.html',
})
export class SetMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetMenuPage');
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
