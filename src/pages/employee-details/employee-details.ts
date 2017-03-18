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

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: Data) {
    this.employee = navParams.get("employee");
    //make use of copy to be able to revert changes
    this.employeeCopy = this.data.cloneObject(this.employee);
    this.mode = "browse";
  }

  edit() {
    this.mode = "edit";
  }

  save() {
    this.mode = 'browse';
    //copy properties and save
    for (var key in this.employeeCopy) {
      this.employee[key] = this.employeeCopy[key];
    }
    this.data.setEmployee(this.employee);
  }

  cancel() {
    this.mode = 'browse';
    //revert copy
    this.employeeCopy = this.data.cloneObject(this.employee);
  }
}
