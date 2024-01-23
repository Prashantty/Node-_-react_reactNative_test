import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

employees = [

  {Id:1, name:"Prashant",dep:"sales",salary:100000,gender:"male", doj:"09/02/2001"},
  {Id:2, name:"Ashvi",dep:"HR",salary:100000,gender:"female", doj:"09/02/2001"},
  {Id:3, name:"Prabhat",dep:"Account",salary:100000,gender:"male", doj:"09/02/2001"},
  {Id:4, name:"Pranav",dep:"Account",salary:100000,gender:"male", doj:"09/02/2001"},
  {Id:5, name:"Aman",dep:"HR",salary:100000,gender:"male", doj:"09/02/2001"},
  {Id:7, name:"Niles ",dep:"HR",salary:100000,gender:"male", doj:"09/02/2001"},
  {Id:8, name:"Nisha",dep:"HR",salary:100000,gender:"female", doj:"09/02/2001"},

  
]
// name : string ="Sales";

SearchText(value :any)
{
  console.log("inside the searchText function");
  console.log(value);
}
// calledfromchild(value :  string)
// {
//   console.log(value);
//   console.log("Called from child");
// }

}
