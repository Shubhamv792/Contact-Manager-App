import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Contact } from '../models/contact';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dataStore: {
    user: User;
  };
  private _user: BehaviorSubject<User>;

  constructor(private httpClient: HttpClient) {
    this.dataStore = {user: new User()};
    this._user = new BehaviorSubject<User>(new User());
  }

  getContacts(): Observable<User> {
    return this._user.asObservable();
  }

  getContactById(id: string): Contact {
    return this.dataStore.user.contacts.find(contact => contact._id === id);
  }

  addContact(contact: Contact): Promise<Contact> {
    return new Promise((resolve, reject) => {
      contact._id = this.dataStore.users.length + 1;
      this.dataStore.users.push(user);
      this._user.next(Object.assign({}, this.dataStore).users);
      resolve(user);
    });
  }

  loadAll() {
    const usersURL = 'https://angular-material-api.azurewebsites.net/users';
    return this.httpClient.get<User[]>(usersURL).subscribe(data => {
        this.dataStore.users = data;
        this._users.next(Object.assign({}, this.dataStore).users);
    }, error => {
      console.log(error.message);
    });
  }
}
