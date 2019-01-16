import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dataStore:{
    users:User[];
  }
  private _users:BehaviorSubject<User[]>;
  constructor(private httpClient:HttpClient) {
    this.dataStore = {users:[]};
    this._users= new BehaviorSubject<User[]>([]);
  }

  getUsers():Observable<User[]>{
    return this._users.asObservable();
  }

  getUserById(id:number):User{
    return this.dataStore.users.find(user => user.id == id);
  }

  addUser(user:User):Promise<User>{
    return new Promise((resolve,reject) => {
      user.id = this.dataStore.users.length + 1;
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
