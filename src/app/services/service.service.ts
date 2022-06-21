import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }


  getUserData() {
    return this.http.get<Users[]>('http://localhost:3000/users');
  }

  addUser(user) {
    return this.http.post('http://localhost:3000/users', user);
  }

  updateUser(id, user) {
    return this.http.put('http://localhost:3000/users/' +  id, user);
  }

  deleteUser(id) {
    return this.http.delete('http://localhost:3000/users/' + id);
  }

}
