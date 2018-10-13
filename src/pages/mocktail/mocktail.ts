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
  selector: 'page-mocktail',
  templateUrl: 'mocktail.html',
})
export class MocktailPage {
    mocktails: any;
    softDrinks: any;
    stillWaters: any;
    sparklingWaters: any;
    juices: any;
    hots: any;
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
    this.getDatas("mocktails").then((e)=>{
      this.mocktails = e;
    });
    this.getDatas("softDrinks").then((e)=>{
        this.softDrinks = e;
    });
    this.getDatas("stillWaters").then((e)=>{
        this.stillWaters = e;
    });
    this.getDatas("sparklingWaters").then((e)=>{
        this.sparklingWaters = e;
    });
    this.getDatas("juices").then((e)=>{
        this.juices = e;
    });
    this.getDatas("hots").then((e)=>{
        this.hots = e;
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
                    arr.push(obj);
                });

                if (arr.length > 0) {
                    resolve(arr);
                } else {
                    resolve(null);
                }

            })
            .catch((error: any) => {
                reject(error);
            });
    });
}

}

