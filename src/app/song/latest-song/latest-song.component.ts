import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Song} from '../../interface/Song';
import {SongService} from '../../service/song.service';
import {SearchService} from '../../service/search.service';
import {User} from "../../interface/User";
import {LikeService} from "../../service/like.service";
import {Like} from "../../interface/like";
import {coerceNumberProperty} from "@angular/cdk/coercion";

@Component({
  selector: 'app-latest-song',
  templateUrl: './latest-song.component.html',
  styleUrls: ['./latest-song.component.css']
})
export class LatestSongComponent implements OnInit, OnChanges {
  value: string;
  songList: Song[] = [];
  latestSong: Song[] = [];
  // likeList: Like[] = [];
  constructor(private songService: SongService,
              public searchService: SearchService,
              private likeService: LikeService) {
  }
   ngOnInit(): void {
    this.songService.getAllSongs().subscribe(next => {
      this.songList = next;
      }, error => (this.songList = []));
    this.getListSearch();
    this.songService.getAllSongsLatest().subscribe(next => {
      this.latestSong = next;
    }, error => (this.latestSong = []));
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

  onLike(id_user:number, id_song: number){
    console.log(id_user);
    let like = {
        user: id_user
    }
    console.log(like);
    like.user = this.convertToUser(id_user);
    this.songService.likeSong(like,id_song).subscribe(next => {
      this.getAllLastSong();
      this.getAllSong();
      console.log(id_song);
      console.log(next);
    }, (e) => {
      console.log(e);
    });

  }

  getAllLastSong(){
    this.songService.getAllSongsLatest().subscribe(next => {
      this.latestSong = next;
    }, error => (this.latestSong = []));
  }

  getAllSong(){
    this.songService.getAllSongs().subscribe(next => {
      this.songList = next;
    }, error => (this.songList = []));
  }

  convertToUser(id_user){
       let user: any= {
        id: id_user
      }
    return user;
  }

  public trackItem (index: number, item: Song) {
    return index;
  }
}
