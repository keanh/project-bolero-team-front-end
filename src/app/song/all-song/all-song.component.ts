import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Song} from '../../interface/Song';
import {User} from '../../interface/User';
import {SongService} from '../../service/song.service';
import {SearchService} from '../../service/search.service';
import {TokenStorageService} from '../../auth/token-storage.service';
import {UserService} from '../../service/user.service';
import {LikeService} from '../../service/like.service';

@Component({
  selector: 'app-all-song',
  templateUrl: './all-song.component.html',
  styleUrls: ['./all-song.component.css']
})
export class AllSongComponent implements OnInit, OnChanges {

  value: string;
  songList: Song[] = [];
  info: any;
  user: User;
  constructor(private songService: SongService, public searchService: SearchService,
              private tokenService: TokenStorageService,
              private userService: UserService,
              private likeService: LikeService
  ) {
  }
  ngOnInit(): void {
    this.songService.getAllSongs().subscribe(next => {
      this.songList = next;
    }, error => (this.songList = []));
    this.getListSearch();
    // this.songService.getAllSongsLatest().subscribe(next => {
    // }, error => (this = []));
    // this.getUserInfor();
    // this.likeService.getLikes().subscribe(next => {
    //   this.likeList = next;
    // }, error => (this.likeList = []));
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
  // onLike( idUser: number, idSong: number) {
  //   console.log(idUser);
  //   const like = {
  //     user: idUser
  //   };
  //   console.log(like);
  //   like.user = this.convertToUser(idUser);
  //   this.songService.likeSong(like, idSong).subscribe(next => {
  //     this.getAllLastSong();
  //     this.getAllSong();
  //     console.log(idSong);
  //     console.log(next);
  //   }, (e) => {
  //     console.log(e);
  //   });
  // }
}
