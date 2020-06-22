import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interface/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL_REGISTER = 'http://localhost:8080/register';
  constructor( private httpClient: HttpClient) {
  }
  createUser(user: User){
    return this.httpClient.post<User>(this.API_URL_REGISTER, user);
  }
}



