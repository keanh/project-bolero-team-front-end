import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Role} from "../interface/role";

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private readonly API_CREATE_ROLE = 'https://musicpage.herokuapp.com/role';
  constructor(private httpClient: HttpClient) { }
  createRole(role: Role): Observable<Role>{
    return this.httpClient.post<Role>(this.API_CREATE_ROLE,role);
  }
}
