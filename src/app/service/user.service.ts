import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interface/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private readonly API_URL_REGISTER = 'http://localhost:8080/user/register';
  private userUrl = 'http://localhost:8080/api/test/user';
  // private pmUrl = 'http://localhost:8080/api/test/pm';
  // private adminUrl = 'http://localhost:8080/api/test/admin';
  constructor( private http: HttpClient) {
  }
  // addUser(user: User){
  //   return this.http.post<User>(this.API_URL_REGISTER, user);
  // }
  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }
  //
  // getPMBoard(): Observable<string> {
  //   return this.http.get(this.pmUrl, { responseType: 'text' });
  // }
  //
  // getAdminBoard(): Observable<string> {
  //   return this.http.get(this.adminUrl, { responseType: 'text' });
  // }
}



