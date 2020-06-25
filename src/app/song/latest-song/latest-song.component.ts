import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Song} from '../../interface/Song';
import {SongService} from '../../service/song.service';
import {SearchService} from '../../service/search.service';
import {TokenStorageService} from '../../auth/token-storage.service';
import {UserService} from '../../service/user.service';
import {User} from '../../interface/User';

@Component({
  selector: 'app-latest-song',
  templateUrl: './latest-song.component.html',
  styleUrls: ['./latest-song.component.css']
})
export class LatestSongComponent implements OnInit, OnChanges {

  value: string;
  songList: Song[] = [];
  latestSong: Song[] = [];
  info: any;
  user: User;
  constructor(private songService: SongService, public searchService: SearchService,
              private tokenService: TokenStorageService,
              private userService: UserService) {
  }
   ngOnInit(): void {
    this.songService.getAllSongs().subscribe(next => {
      this.songList = next;
      }, error => (this.songList = []));
    // await this.getVale();
    this.getListSearch();
    this.songService.getAllSongsLatest().subscribe(next => {
      this.latestSong = next;
    }, error => (this.latestSong = []));
    this.getUserInfor();
  }
  getListSearch(){
    this.searchService.list.subscribe( data => {
    this.songList = data;
    console.log(this.songList); }, error => {
      console.log(error);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
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
