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
  selector: 'page-spirit',
  templateUrl: 'spirit.html',
})
export class SpiritPage {
    spirit_AMERICAN: any;
    spirit_BLENDED: any;
    spirit_CRAFTED: any;
    spirit_GIN: any;
    spirit_IRISH: any;
    spirit_LIQUOR: any;
    spirit_LOCAL: any;
    spirit_MALT: any;
    spirit_RUM: any;
    spirit_TEQUILA: any;
    spirit_aperitif: any;
    spirit_import: any;
    spirit_vodka: any;
    spirit_COGNAC: any;
    private db: any;
    model: any = {};

    constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
        this.db = firebase.firestore();
        this.loadData();

        //this.items = db.list('menu').valueChanges();
        //console.log(this.items);
  }

  ionViewDidLoad() {
      this.view.showBackButton(false);
  }

  loadData(){
    this.getDatas("spirit_AMERICAN").then((e)=>{
      this.spirit_AMERICAN = e;
    });
    this.getDatas("spirit_BLENDED").then((e)=>{
        this.spirit_BLENDED = e;
    });
    this.getDatas("spirit_CRAFTED").then((e)=>{
        this.spirit_CRAFTED = e;
    });
    this.getDatas("spirit_GIN").then((e)=>{
        this.spirit_GIN = e;
    });
    this.getDatas("spirit_IRISH").then((e)=>{
        this.spirit_IRISH = e;
    });
    this.getDatas("spirit_LIQUOR").then((e)=>{
        this.spirit_LIQUOR = e;
    });
    this.getDatas("spirit_LOCAL").then((e)=>{
        this.spirit_LOCAL = e;
    });
    this.getDatas("spirit_MALT").then((e)=>{
        this.spirit_MALT = e;
    });
    this.getDatas("spirit_RUM").then((e)=>{
        this.spirit_RUM = e;
    });
    this.getDatas("spirit_TEQUILA").then((e)=>{
        this.spirit_TEQUILA = e;
    });
    this.getDatas("spirit_aperitif").then((e)=>{
        this.spirit_aperitif = e;
    });
    this.getDatas("spirit_import").then((e)=>{
        this.spirit_import = e;
    });
    this.getDatas("spirit_vodka").then((e)=>{
        this.spirit_vodka = e;
    });
    this.getDatas("spirit_COGNAC").then((e)=>{
        this.spirit_COGNAC = e;
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
                    //console.log(obj)
                    arr.push(obj);
                });

                if (arr.length > 0) {
                    //console.log("Document data:", arr);
                    resolve(arr);
                } else {
                    //console.log("No such document!");
                    resolve(null);
                }


            })
            .catch((error: any) => {
                reject(error);
            });
    });
}

}


