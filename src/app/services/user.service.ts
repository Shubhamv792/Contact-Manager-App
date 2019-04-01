import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Contact } from '../models/contact';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dataStore:{
    users:User[];
  }
  private _users:BehaviorSubject<User>;
  
  constructor(private httpClient:HttpClient) {
    this.dataStore = {users:[]};
    this._users= new BehaviorSubject<User>(new User());
  }

  getContacts():Observable<Contact[]>{
    return this._users['contacts'].asObservable();
  }

  getUserById(id:number):User{
    return this.dataStore.users.find(user => user._id == id);
  }

  addUser(user:User):Promise<User>{
    return new Promise((resolve,reject) => {
      user._id = this.dataStore.users.length + 1;
      this.dataStore.users.push(user);
      this._users.next(Object.assign({},this.dataStore).users);
      resolve(user);
    });
  }

  loadAll(){
    const usersURL = 'https://angular-material-api.azurewebsites.net/users';
    return this.httpClient.get<User[]>(usersURL).subscribe(data=>{
        this.dataStore.users = data;
        this._users.next(Object.assign({},this.dataStore).users);
    },error =>{
      console.log(error.message);
    });
  }
}
