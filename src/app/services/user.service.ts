import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import { User } from '../interfaces/user.interface';
import 'rxjs/Rx'

@Injectable()
export class UserService {

  usersURL:string = "https://loanmanagement-bff84.firebaseio.com/users.json"
  userURL:string = "https://loanmanagement-bff84.firebaseio.com/users/"

  constructor(
    private http:Http
  ) { }

  newUser(user:User){
    let body = JSON.stringify(user);
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    return this.http.post(this.usersURL, body,{ headers:headers })
    .map( res=>{
      console.log(res.json());
      return res.json();
    })
  }

  updateUser( user:User, key$:string){

    let body = JSON.stringify(user);
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    let url = `${ this.userURL }/${ key$ }.json`;

    return this.http.put(url, body,{ headers:headers })
      .map( res=>{
        console.log(res.json());
        return res.json();
      })

  }

  getUser( key$: string ){

    let url = `${ this.userURL }/${ key$ }.json`;
    return this.http.get( url )
      .map( res=>res.json() );

  }

}
