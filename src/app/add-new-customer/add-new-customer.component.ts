import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-add-new-customer',
  templateUrl: './add-new-customer.component.html',
  styleUrls: ['./add-new-customer.component.css']
})
export class AddNewCustomerComponent implements OnInit {
  userAdded:boolean=false;
  addCustomerForm=new FormGroup({});
  'firstname':String;
  'terms':String;
  'customerType':boolean;
  'description':String;
 

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.addCustomerForm=new FormGroup({
      'firstname':new FormControl(),
      'terms':new FormControl(),
      'customerType':new FormControl(),
      'description':new FormControl(),
    });
  }

  addCustomer(addCustomerForm: NgForm){

    const postbody = {
      'name': addCustomerForm.value.firstname,
      'terms': addCustomerForm.value.terms,
      'customerType': addCustomerForm.value.customerType,
      'description':addCustomerForm.value.description,
    }    

    this.userService.addUser(postbody).subscribe(data=>{
      console.log(data);
      this.userAdded=true;
    },(err)=>{
      console.log("Unable to add the User" + err);
    });
    
  }

}
