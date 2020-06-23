import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../interface/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_URL_REGISTER = 'http://localhost:8080/register';
  private readonly API_URL_PROFILE = 'http://localhost:8080/user';
  private readonly API__PROFILE = 'http://localhost:8080/user/info';



  constructor(private httpClient: HttpClient) {
  }

  createUser(user: User) {
    return this.httpClient.post<User>(this.API_URL_REGISTER, user);
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.API__PROFILE}/${user.id}`, user);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<any>(`${this.API_URL_PROFILE}/${id}`);


  }
}
