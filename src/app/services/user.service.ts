import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://reqres.in/api';


  constructor(private http: HttpClient) { }


  getUsers() {
    return this.http.get(`${this.url}/users?per_page=20&delay=3`)
      .pipe(
        map((resp: any) => resp['data'])
      );

  }

  getUserById(id: string) {
    return this.http.get(`${this.url}/users/${id}`)
      .pipe(
        map((resp: any) => resp['data'])
      )
  }

  deleteUserById(id: string) {
    return this.http.delete(`${this.url}/users/${id}`)
      .pipe(
        map((resp: any) => resp['data'])
      )
  }





  createUser(user: User): Observable<any> {
    return this.http.post(this.url, user);
  }
  deleteUser(id: string): Observable<any> {
    return this.http.delete(this.url + id)
  }

  updateUser(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }


  // este es un cambio para poder subir a git


}
