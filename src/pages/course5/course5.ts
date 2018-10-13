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
  selector: 'page-course5',
  templateUrl: 'course5.html',
})
export class Course5Page {
    course5s: any;
    course5_ors: any;
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
    this.getDatas("course5").then((e)=>{
      this.course5s = e;
    });
    this.getDatas("course5_or").then((e)=>{
      this.course5_ors = e;
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



