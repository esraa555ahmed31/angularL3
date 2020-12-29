import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:Array<object>=[];
  name2: any;
  

  constructor(private userservice:UsersService) { }

  ngOnInit(): void {
   

    

  }

 
onSubmit(values) {
  // return this.name1;
  // console.log(values.value.name1);
  this.name2=values.value.name1;
  console.log(this.name2);
  this.userservice.setparram(this.name2);
  this.userservice.getList().subscribe(
      
    {
    next:(data)=> {
      console.log('success: ', data);
      this.data=data.items;
      console.log('data:',this.data);
    },
    error:(msg)=> {
      console.log('error: ', msg);
    }
  }
  );
}


}
