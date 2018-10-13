import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SplashPage } from '../pages/splash/splash';
import { MoonBarPage } from '../pages/moon-bar/moon-bar';
import { BeveragePage } from '../pages/beverage/beverage';
import { PromotionPage } from '../pages/promotion/promotion';
import { SnackPage } from '../pages/snack/snack';
import { SkyHighPage } from '../pages/sky-high/sky-high';
import { SpiritPage } from '../pages/spirit/spirit';
import { CocktailPage } from '../pages/cocktail/cocktail';
import { MocktailPage } from '../pages/mocktail/mocktail';
import { WinePage } from '../pages/wine/wine';
import { ChampagnePage } from '../pages/champagne/champagne';
import { RedWinePage } from '../pages/red-wine/red-wine';
import { WhiteWinePage } from '../pages/white-wine/white-wine';
import { VertigoPage } from '../pages/vertigo/vertigo';
import { ALaCartPage } from '../pages/a-la-cart/a-la-cart';
import { SetMenuPage } from '../pages/set-menu/set-menu';
import { Course3Page } from '../pages/course3/course3';
import { Course4Page } from '../pages/course4/course4';
import { Course5Page } from '../pages/course5/course5';
import { VegetarianPage } from '../pages/vegetarian/vegetarian';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFirestoreModule } from "angularfire2/firestore";
import * as firebase from 'firebase';
//import { FIREBASE_CONFIG } from './firebase.credentials';

const config = {
  apiKey: "AIzaSyBdS7S0-sqOSD1IaeKojYNT1wYO3v0FK0U",
  authDomain: "vertigo-tablet-menu.firebaseapp.com",
  databaseURL: "https://vertigo-tablet-menu.firebaseio.com",
  projectId: "vertigo-tablet-menu",
  storageBucket: "vertigo-tablet-menu.appspot.com",
  messagingSenderId: "1019928738170"
};
firebase.initializeApp(config);
firebase.firestore().enablePersistence();

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    SplashPage,
    MoonBarPage,
    PromotionPage,
    SnackPage,
    SkyHighPage,
    BeveragePage,
    SpiritPage,
    CocktailPage,
    MocktailPage,
    WinePage,
    ChampagnePage,
    RedWinePage,
    WhiteWinePage,
    VertigoPage,
    ALaCartPage,
    SetMenuPage,
    Course3Page,
    Course4Page,
    Course5Page,
    VegetarianPage
  ],
  imports: [
    BrowserModule,
    //IonicModule.forRoot(MyApp),
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages:false
    }),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFirestoreModule.enablePersistence() //.enablePersistence() used for offline storage
    //AngularFireModule.initializeApp(FIREBASE_CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    SplashPage,
    MoonBarPage,
    PromotionPage,
    SnackPage,
    SkyHighPage,
    BeveragePage,
    SpiritPage,
    CocktailPage,
    MocktailPage,
    WinePage,
    ChampagnePage,
    RedWinePage,
    WhiteWinePage,
    VertigoPage,
    ALaCartPage,
    SetMenuPage,
    Course3Page,
    Course4Page,
    Course5Page,
    VegetarianPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
