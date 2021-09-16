import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


  interface User {
  name:String;
  email:String;
  phonenumber:number;
}

@Injectable({
  providedIn: 'root'
})


export class UsersService {
  
  
  constructor(private httpclient:HttpClient) { }

  deleteUser() {
    const cus_id=1;
  return this.httpclient.delete('https://jsonplaceholder.typicode.com/users/'+cus_id);  
  }

  addUser(postbody:any) {  
    
    const headers1=new HttpHeaders({
      'content-type':'application/json',
      'authenticationToken':'1234565',
    });
      
    const params1=new HttpParams().set('pageSize','10').set('pageNum','100');
    
    return this.httpclient.post('https://jsonplaceholder.typicode.com/users',postbody,{headers:headers1,params:params1});    
  }

  updateUser(postbody:any) {  
    
    const headers1=new HttpHeaders({
      'content-type':'application/json',
      'authenticationToken':'987654',
    });
      
    const params1=new HttpParams().set('pageSize','11').set('pageNum','101');
    
    return this.httpclient.put('https://jsonplaceholder.typicode.com/users/1',postbody,{headers:headers1,params:params1});    
  }

  getUsers(): Observable<User>{
  const headers2=new HttpHeaders({
  'content-type':'application/json',
  'authenticationToken':'1234565',
});
  
const params2=new HttpParams().set('pageSize','10').set('pageNum','100');

    return this.httpclient.get<User>('https://jsonplaceholder.typicode.com/users',{headers:headers2 , params:params2});

    /*const users = [
      {userId : 11, userName:'AAA'},
      {userId : 12, userName:'BBB'},
      {userId : 13, userName:'CCC'},
    ];
    return users;*/
  }

}
