import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public id: number;
  public name: string;
  public task: string;
  public deadline: any;
  public rows: Array<{id: number, name: string, task: string, deadline: any}> = [];

  constructor(public empSer:EmployeeService) { }

  ngOnInit(): void {
  }
  storeUser(empRef:any){
    console.log(empRef);
    this.empSer.storeEmployee(empRef);
  }
  buttonClicked(){
    this.rows.push({id: this.id, name: this.name, task: this.task, deadline: this.deadline});
  }
}
  
/* import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public empSer:EmployeeService) { }

  ngOnInit(): void {
  }
  storeUser(empRef:any){
    console.log(empRef);
    this.empSer.storeEmployee(empRef);
  }
}  */