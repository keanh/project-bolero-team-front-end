import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Song} from '../interface/Song';
import {Observable} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class SongService {
  private readonly API_SONG_CREATE = 'http://localhost:8080/song/create';
  constructor(private httpClient: HttpClient) { }

  addSong(song: Song): Observable<Song> {
    return this.httpClient.post<Song>(this.API_SONG_CREATE, song);
  }

}
