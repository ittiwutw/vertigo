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
  selector: 'page-white-wine',
  templateUrl: 'white-wine.html',
})
export class WhiteWinePage {
    argentinas: any;
    australias: any;
    chiles: any;
    frances: any;
    germanys: any;
    italys: any;
    newZealands: any;
    spains: any;
    africas: any;
    USAs: any;
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
    this.getDatas("whitewine_argentinas").then((e)=>{
      this.argentinas = e;
    });
    this.getDatas("whitewine_australias").then((e)=>{
      this.australias = e;
    });
    this.getDatas("whitewine_chiles").then((e)=>{
        this.chiles = e;
    });
    this.getDatas("whitewine_frances").then((e)=>{
        this.frances = e;
    });
    this.getDatas("whitewine_germanys").then((e)=>{
      this.germanys = e;
    });
    this.getDatas("whitewine_italys").then((e)=>{
      this.italys = e;
    });
    this.getDatas("whitewine_newZealands").then((e)=>{
        this.newZealands = e;
    });
    this.getDatas("whitewine_spains").then((e)=>{
      this.spains = e;
    });
    this.getDatas("whitewine_africas").then((e)=>{
        this.africas = e;
    });
    this.getDatas("whitewine_USAs").then((e)=>{
        this.USAs = e;
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


