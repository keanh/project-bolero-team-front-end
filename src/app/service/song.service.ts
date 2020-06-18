import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Song} from '../interface/Song';
import {Observable} from 'rxjs';

// const API_SONG = 'http://localhost:8080/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private readonly API_URL_SONG_LIST = 'http://localhost:8080/song/create';
  private readonly API_SONG = 'http://localhost:8080/song';
  constructor(private httpClient: HttpClient) {
  }

  addSong(song: Song): Observable<Song> {
    return this.httpClient.post<Song>(this.API_URL_SONG_LIST, song);
  }

  updateSong(song: Song): Observable<Song> {
    return this.httpClient.put<Song>(`${this.API_SONG}/${song.id}`, song);
  }

  getSongById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.API_SONG}/${id}`);
  }

  deleteSong(id: number): Observable<Song> {
    return this.httpClient.delete<Song>(this.API_SONG + `/${id}`);
  }
}
