import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Song} from '../../interface/Song';
import {SongService} from '../../service/song.service';
import {SearchService} from '../../service/search.service';

@Component({
  selector: 'app-most-views',
  templateUrl: './most-views.component.html',
  styleUrls: ['./most-views.component.css']
})
export class MostViewsComponent implements OnInit, OnChanges {

  value: string;
  songList: Song[] = [];
  mostViewSong: Song[] = [];
  constructor(private songService: SongService, public searchService: SearchService) {
  }
  ngOnInit(): void {
    this.songService.getAllSongs().subscribe(next => {
      this.songList = next;}, error => (this.songList = []));
    // await this.getVale();
    this.getListSearch();
    this.songService.getMostViewSong().subscribe(next => {
      this.mostViewSong = next;
    }, error => (this.mostViewSong = []));
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
