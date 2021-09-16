import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-cutomers',
  templateUrl: './cutomers.component.html',
  styleUrls: ['./cutomers.component.css']
})
export class CutomersComponent implements OnInit {
users:any;
  constructor(private userservice:UsersService) { }

  ngOnInit(): void {
   this.users=this.userservice.getUsers().subscribe(data=> { 
    this.users = data;
   }, (err)=>{
     console.log("Unable to get the data from URL",err);
     }
   );
  }

}
