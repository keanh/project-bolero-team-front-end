import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../service/search.service';
import {Song} from '../../interface/Song';
import {SongService} from '../../service/song.service';
import {TokenStorageService} from '../../auth/token-storage.service';
import {User} from "../../interface/User";
import {UserService} from "../../service/user.service";

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
  user: User;
  constructor(public searchService: SearchService,
              private songService: SongService,
              private tokenService: TokenStorageService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.getUserInfor();
    console.log(this.info.username);
    if (this.info.username !== ''){
      this.getUserDetail();
    }
    this.info = {
      token: this.tokenService.getToken(),
      username: this.tokenService.getUsername(),
      authorities: this.tokenService.getAuthorities()
    };
    console.log(this.info);
    this.accessToken = this.tokenService.getToken();
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

  getUserInfor(){
    this.info = {
      token: this.tokenService.getToken(),
      username: this.tokenService.getUsername(),
      // authorities: this.token.getAuthorities()
    };
    // console.log(this.info);
    // this.accessToken = this.token.getToken();
  }
  getUserDetail(){
    this.userService.getUserByUserName(this.info.username).subscribe( data =>
    {
      this.user = data;
    }, error =>
      console.log(error));
  }
}
