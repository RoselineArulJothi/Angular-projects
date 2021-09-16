import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'arc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
users:any;
  constructor(private userservice: UsersService) { }

  ngOnInit(): void {
    this.users=this.userservice.getUsers().subscribe(data=>{
      this.users=data;
    },(err)=>{
      console.log("Unable to get the users "+err);
    });
  }

}
