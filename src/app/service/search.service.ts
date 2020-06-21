import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  value = new BehaviorSubject('');
  constructor() { }
  changeValue(message: string) {
    this.value.next(message);
  }
}
