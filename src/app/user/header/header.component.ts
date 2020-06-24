import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../service/search.service';
import {Song} from '../../interface/Song';
import {SongService} from '../../service/song.service';
import {TokenStorageService} from '../../auth/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  value: string;
  songList: Song[] = [];
  accessToken: string;
  public info: any;
  constructor(public searchService: SearchService, private songService: SongService, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    console.log(this.info);
    this.accessToken = this.token.getToken();
  }
  search(){
    if (this.value !== ''){
      this.songService.getSongByName(this.value).subscribe( data => {
        this.songList = data;
        this.searchService.changeValue(this.value, this.songList);
        // console.log(this.songList);
      });
    }else {
      this.songService.getAllSongs().subscribe( data => {
        this.songList = data;
        this.searchService.changeValue(this.value, this.songList);
      });
    }
  }
}
