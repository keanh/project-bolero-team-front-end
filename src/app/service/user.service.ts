import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interface/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL_REGISTER = 'http://localhost:8080/register';
  private readonly API_URL_UPDATE_PASSWORD = 'http://localhost:8080/user/updatePassword/{id}';
  private readonly API_URL_GET_USER = 'http://localhost:8080/user/{id}';


  constructor( private httpClient: HttpClient) {
  }
  createUser(user: User){
    return this.httpClient.post<User>(this.API_URL_REGISTER, user);
  }
  updatePassword(user: User){
    return this.httpClient.put<User>(this.API_URL_UPDATE_PASSWORD, user);
  }
  getUserById(id: number){
    return this.httpClient.get<any>(this.API_URL_GET_USER);
  }
}



