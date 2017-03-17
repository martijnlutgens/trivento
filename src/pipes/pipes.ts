import { Pipe } from '@angular/core';

@Pipe({
	name: 'filterEmployees',
	pure: false
})
export class FilterEmployees {
	transform(value, fullName?:string, jobRole?:string) {
		return value.filter(employee => {
			let retVal = true;
			let employeeFullName = employee.first_name + employee.last_name;
			if(fullName){
				if(employeeFullName.toLowerCase().indexOf(fullName.toLowerCase()) == -1){				
					retVal = false;
				}
			}
			if(jobRole){
				if(employee.job_role.toLowerCase().indexOf(jobRole.toLowerCase()) == -1 ){
					retVal = false;
				} else if(fullName && !retVal){
					retVal = false;
				} else {
					retVal = true;
				}
			}
			return retVal;
		});
	}
}