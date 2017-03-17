import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { EmployeesPage } from '../employees/employees';

import { Data } from '../../providers/data';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  private username: string;
  private password: string;
  private errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, menuCtrl: MenuController, public data:Data) {
    menuCtrl.enable(false);
  }

  onLogin() {
    this.data.login(this.username, this.password).then(loginResult => {
      console.log("resultObject: " + loginResult["success"])
      if (loginResult["success"]) {
        console.log("success")
        this.navCtrl.setRoot(EmployeesPage);
      } else {
        this.errorMessage = loginResult["errorMessage"];
      }
    })
  }
}
