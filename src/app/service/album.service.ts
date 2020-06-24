import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Album} from "../interface/Album";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private readonly API_URL_CREATE_ALBUM = 'http://localhost:8080/album/create';
  private readonly API_URL_ALBUM= 'http://localhost:8080/album';
  constructor(private httpClient: HttpClient) { }

  createAlbum(album :Album): Observable<Album>{
    return this.httpClient.post<Album>(this.API_URL_CREATE_ALBUM, album);
  }

  getAllAlbum(): Observable<Album[]>{
    return this.httpClient.get<Album[]>(this.API_URL_ALBUM);
  }
}
