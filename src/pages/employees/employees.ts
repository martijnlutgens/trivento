import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { EmployeeDetailsPage } from '../employee-details/employee-details';

import { Data } from '../../providers/data';

@Component({
  selector: 'page-employees',
  templateUrl: 'employees.html'
})
export class EmployeesPage {
  private filterName:string;
  private filterJobRole:string;
  private employees: any;
  private data:Data;

  constructor(public navCtrl: NavController, public navParams: NavParams, menuCtrl: MenuController, data: Data) {
    this.data = data;
    menuCtrl.enable(true);
    this.employees = [];
    this.filterName = "";
    this.filterJobRole = "";
    this.data.getEmployees().then(result => {
      console.log(JSON.stringify(result[0]));
      this.employees = result;
    });
  }
  employeeTapped(event, employee) {
    this.navCtrl.push(EmployeeDetailsPage, {
      employee: employee
    });
  }
}
