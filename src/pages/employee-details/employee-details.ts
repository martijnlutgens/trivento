import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Data } from '../../providers/data';

@Component({
  selector: 'page-employee-details',
  templateUrl: 'employee-details.html'
})
export class EmployeeDetailsPage {
  private employee: any;
  private employeeCopy: any;
  private mode: string;
  private data;

  constructor(public navCtrl: NavController, public navParams: NavParams, data: Data) {
    this.data = data;
    this.navParams = navParams;
    this.employee = this.navParams.get("employee");
    this.employeeCopy = this.data.clone(this.employee);
    this.mode = "browse";
  }

  edit() {
    this.mode = "edit";
  }

  save() {
    this.mode = 'browse';
    for (var key in this.employeeCopy) {
      this.employee[key] = this.employeeCopy[key];
    }
    this.data.setEmployee(this.employee);
  }

  cancel() {
    this.mode = 'browse';
    this.employeeCopy = this.data.clone(this.employee);
  }
}
