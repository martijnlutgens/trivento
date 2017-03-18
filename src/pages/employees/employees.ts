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

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public data: Data) {
    menuCtrl.enable(true);
    this.employees = [];
    this.filterName = "";
    this.filterJobRole = "";
    this.data.getEmployees().then(result => {
      this.employees = result;     
    });
  }

  employeeTapped(event, employee) {
    this.navCtrl.push(EmployeeDetailsPage, {
      employee: employee
    });
  }
  
  filterEmployees(){
    this.employees = this.data.filterEmployees(this.filterName, this.filterJobRole);
  }
}
