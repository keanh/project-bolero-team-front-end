import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Song} from '../interface/Song';
import {Observable} from 'rxjs';


const API_SONG = 'http://localhost:8080/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpClient: HttpClient) { }

  addSong(song: Song): Observable<Song> {
    return this.httpClient.post<Song>(API_SONG + '/create', song);
  }

}
