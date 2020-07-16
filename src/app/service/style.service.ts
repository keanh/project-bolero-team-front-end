import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Style} from '../interface/Style';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  private readonly API_URL_STYLE_LIST = 'https://musicpage.herokuapp.com/style';
  private readonly API_URL_CREATE_STYLE = 'https://musicpage.herokuapp.com/style/create';
  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Style[]> {
    return  this.httpClient.get<Style[]>(this.API_URL_STYLE_LIST);
  }

  createStyle(style: Style): Observable<Style>{
    return this.httpClient.post<Style>(this.API_URL_CREATE_STYLE,style);
  }
}
