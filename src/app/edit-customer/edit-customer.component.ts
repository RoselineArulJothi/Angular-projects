import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  updatedUser:boolean=false;
  deletedUser:boolean=false;

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    
  }

  updateUser(){
    const putbody = {
      name:'Benny Hinn',
      id:'1',
    }
    this.userService.updateUser(putbody).subscribe(data=>{
      console.log(data);
      this.updatedUser=true;
    },(err)=>{
      console.log("Unable to update the user");
    });
  }

  deleteUser(){
    this.userService.deleteUser().subscribe(data=>{
      console.log("User deleted successfully");
      this.deletedUser=true;
    },(err)=>{
      console.log("Unable to delete the user",+err);
    });
  }

}
