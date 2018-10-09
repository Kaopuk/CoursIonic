import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import {TabsPage} from "../pages/settings/tabs/tabs";
import {OptionsPage} from "../pages/options/options";
import {AuthPage} from "../pages/auth/auth";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  tabsPage: any = TabsPage;
  optionsPage: any = OptionsPage;
  authPage: any = AuthPage;
  isAuth: boolean;
  @ViewChild('content') content: NavController;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    platform.ready().then(() => {

      let config = {
        apiKey: "AIzaSyB3_1Tq6rQ6ZC5nrVbvEZ4iLiLtZyZKav0",
        authDomain: "cours-ionic.firebaseapp.com",
        databaseURL: "https://cours-ionic.firebaseio.com",
        projectId: "cours-ionic",
        storageBucket: "cours-ionic.appspot.com",
        messagingSenderId: "519836165414"
      };
      firebase.initializeApp(config);

      firebase.auth().onAuthStateChanged(
        (user) =>{
          if(user) {
            this.isAuth = true;
            this.content.setRoot(TabsPage);
          } else {
            this.isAuth = false;
            this.content.setRoot(AuthPage, {mode: 'connect'});
          }
        }
      );

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data ? data : null);
    this.menuCtrl.close();
  }

  onDisconnect() {
    firebase.auth().signOut();
    this.menuCtrl.close();
  }
}

