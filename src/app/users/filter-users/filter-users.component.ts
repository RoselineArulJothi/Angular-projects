import { Component, EventEmitter, OnInit, Input, Output, OnDestroy, destroyPlatform } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-filter-users',
 templateUrl: './filter-users.component.html',
  //template:`<h2>Filter Users template Page</h2>`,
  styleUrls: ['./filter-users.component.css','custom_style.css']
})
export class FilterUsersComponent implements OnInit, OnDestroy {

  @Input() 
  channelName: String=''

   @Input()
  tax:Number=0;

  @Output()
  updatedList = new EventEmitter();
  users = {};

  constructor(private userservice:UsersService) {}

  ngOnInit(): void {
    this.users=this.userservice.getUsers();
  }

  ngOnDestroy(){
    console.log("Filter component's destroy method called");
  }

  updateUsers(){
    const userObj= { id:10, name:'ARC Tutorials' }
    this.updatedList.emit(userObj);
  }

}
