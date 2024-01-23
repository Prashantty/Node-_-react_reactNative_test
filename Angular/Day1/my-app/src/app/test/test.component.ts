import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

   //course = [];
   course = [
    "MBA",
    "MCA",
    "BCA",
    "MA",
    "BTECH"
   ]
   courses=[
    {id:1, name:"CCA"},
    {id:2, name:"DCA"},
    {id:3, name:"BBA"},
    {id:4, name:"MCA"},
    {id:5, name:"PGDCA"},
    {id:6, name:"PGDA"}
  ]
  AddCourse()
  {
    this.courses.push({id:10, name:"DDDD"})
  }

  position :any
  Delete(courseid : number )
  {
    
    // this.position =  this.courses.indexOf(courseid);
    // this.courses.splice(index,1);
  }

}
