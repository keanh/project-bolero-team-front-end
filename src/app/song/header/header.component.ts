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
  isSignedUp = false;
  isSignUpFailed = false;
  constructor(public searchService: SearchService, private songService: SongService,
              private token: TokenStorageService) { }

  ngOnInit(): void {
    if (this.token.getToken()) {
      this.isSignedUp = true;
      this.isSignUpFailed = false;
    }else {
      this.isSignedUp = false;
      this.isSignUpFailed = true;
    }
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
  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
