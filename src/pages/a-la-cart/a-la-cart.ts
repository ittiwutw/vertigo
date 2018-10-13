import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as firebase from 'firebase';
import 'firebase/firestore';

/**
 * Generated class for the PromotionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-a-la-cart',
  templateUrl: 'a-la-cart.html',
})
export class ALaCartPage {
  APPETIZERS: any;
  GREENS: any;
  SOUPERS: any;
  FISHERMANS: any;
  KITCHENS: any;
  PORKS: any;
  BUTCHERS: any;
  SIDES: any;
  TWOS: any;
  VEGETARIANS: any;
  ENDS: any;
  DRESSINGS: any;
  BUTCHERS_SAUCES: any;
    private db: any;
    model: any = {};

    constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
        this.db = firebase.firestore();
        this.loadData();

  }

  ionViewDidLoad() {
      this.view.showBackButton(false);
  }

  loadData(){
    this.getDatas("APPETIZERS").then((e)=>{
      this.APPETIZERS = e;
    });
    this.getDatas("GREENS").then((e)=>{
      this.GREENS = e;
    });
    this.getDatas("SOUPERS").then((e)=>{
        this.SOUPERS = e;
    });
    this.getDatas("FISHERMANS").then((e)=>{
        this.FISHERMANS = e;
    });
    this.getDatas("KITCHENS").then((e)=>{
      this.KITCHENS = e;
    });
    this.getDatas("PORKS").then((e)=>{
        this.PORKS = e;
    });
    this.getDatas("BUTCHERS").then((e)=>{
        this.BUTCHERS = e;
    });
    this.getDatas("SIDES").then((e)=>{
      this.SIDES = e;
    });
    this.getDatas("TWOS").then((e)=>{
        this.TWOS = e;
    });
    this.getDatas("VEGETARIANS").then((e)=>{
        this.VEGETARIANS = e;
    });
    this.getDatas("ENDS").then((e)=>{
      this.ENDS = e;
    });
    this.getDatas("DRESSING").then((e)=>{
        this.DRESSINGS = e;
    });
    this.getDatas("BUTCHERS_SAUCES").then((e)=>{
        this.BUTCHERS_SAUCES = e;
    });
  }

  getDatas(collection: string): Promise<any> {
    return new Promise((resolve, reject) => {
        this.db.collection(collection).orderBy("index")
            .get()
            .then((querySnapshot) => {
                let arr = [];
                querySnapshot.forEach(function (doc) {
                    var obj = JSON.parse(JSON.stringify(doc.data()));
                    obj.$key = doc.id
                    console.log(obj)
                    arr.push(obj);
                });

                if (arr.length > 0) {
                    console.log("Document data:", arr);
                    resolve(arr);
                } else {
                    console.log("No such document!");
                    resolve(null);
                }


            })
            .catch((error: any) => {
                reject(error);
            });
    });
}

}


