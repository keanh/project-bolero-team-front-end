import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Style} from '../interface/Style';

const API_STYLE = 'http://localhost:8080/api/styles';
@Injectable({
  providedIn: 'root'
})
export class StyleService {
  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Style[]> {
    return this.httpClient.get<Style[]>(API_STYLE);
  }

}
