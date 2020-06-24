import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Song} from '../../interface/Song';
import {SongService} from '../../service/song.service';
import {SearchService} from '../../service/search.service';

@Component({
  selector: 'app-latest-song',
  templateUrl: './latest-song.component.html',
  styleUrls: ['./latest-song.component.css']
})
export class LatestSongComponent implements OnInit, OnChanges {

  value: string;
  songList: Song[] = [];
  latestSong: Song[] = [];
  songListTem: Song[] = [];
  constructor(private songService: SongService, public searchService: SearchService) {
  }
   ngOnInit(): void {
    this.songService.getAllSongs().subscribe(next => {
      this.songList = next;
      this.songListTem = this.songList; }, error => (this.songList = []));
    // await this.getVale();
    this.getListSearch();
    this.songService.getAllSongsLatest().subscribe(next => {
      this.latestSong = next;
    }, error => (this.latestSong = []));
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
}
