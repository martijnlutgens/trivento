import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LoginPage } from '../pages/login/login';
import { EmployeesPage } from '../pages/employees/employees';
//import { AboutPage } from '../pages/about/about';

import { Data } from '../providers/data';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{ title: string, component: any }>;

  storage = new Storage;
  data: Data;

  constructor(public platform: Platform, data: Data) {
    this.data = data;
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      //{ title: 'Personeel', component: EmployeesPage },
      //{ title: 'Over', component: AboutPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.login();
    });
  }

  login() {
    this.storage.get("username").then(username => {
      this.storage.get("password").then(password => {
        this.data.login(username, password).then(resultObject => {
          console.log("resultObject: " + resultObject["success"])
          if (resultObject["success"]) {
            console.log("success");
            this.rootPage = EmployeesPage;
          } else {
            this.rootPage = LoginPage;
          }
        })
      });
    });
  }

  clearData() {
    this.storage.remove("employees").then(result => {
      console.log("clearData: " + result)
      this.nav.setRoot(EmployeesPage);
    });
  }

  logout() {
    return new Promise(resolve => {
      this.storage.remove("username").then(result => {
        console.log("storage remove username: " + result);
        this.storage.remove("password").then((result) => {
          console.log("storage remove password: " + result);
          this.nav.setRoot(LoginPage);
        });
      });
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
