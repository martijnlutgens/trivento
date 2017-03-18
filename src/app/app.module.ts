import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { EmployeesPage } from '../pages/employees/employees';
import { EmployeeDetailsPage } from '../pages/employee-details/employee-details';

import { Data } from '../providers/data';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    EmployeesPage,
    EmployeeDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      platforms: {
        ios: {
          backButtonText: 'Terug'
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    EmployeesPage,
    EmployeeDetailsPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, Data]
})
export class AppModule { }
