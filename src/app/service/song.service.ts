import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Song} from '../interface/Song';
import {Observable} from 'rxjs';

// const API_SONG = 'http://localhost:8080/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private readonly API_URL_CREATE_SONG = 'http://localhost:8080/song/create';
  private readonly API_SONG = 'http://localhost:8080/song';
  private readonly API_SONG_FIND = 'http://localhost:8080/findByName';
  private readonly API_LATEST_SONG = 'http://localhost:8080/latest-song';
  constructor(private httpClient: HttpClient) {
  }

  addSong(song: Song): Observable<Song> {
    return this.httpClient.post<Song>(this.API_URL_CREATE_SONG, song);
  }

  updateSong(song: Song): Observable<Song> {
    return this.httpClient.put<Song>(`${this.API_SONG}/${song.id}`, song);
  }

  getSongById(id: number): Observable<Song> {
    return this.httpClient.get<any>(`${this.API_SONG}/${id}`);
  }
  getSongByName(name: string): Observable<Song[]> {
    return this.httpClient.get<Song[]>(`${this.API_SONG_FIND}/${name}`);
  }
  deleteSong(id: number): Observable<Song> {
    return this.httpClient.delete<Song>(this.API_SONG + `/${id}`);
  }
  getAllSongsLatest(): Observable<Song[]> {
    return this.httpClient.get<Song[]>(this.API_LATEST_SONG);
  }
  // detailSong(id: string): Observable<Song> {
  //   return this.httpClient.get<Song>(this.API_SONG + `/${id}`);
  // }
  getAllSongs(): Observable<Song[]> {
    return this.httpClient.get<Song[]>(this.API_SONG);
  }
}
