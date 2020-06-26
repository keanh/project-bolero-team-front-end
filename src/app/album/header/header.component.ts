import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../service/search.service';
import {Song} from '../../interface/Song';
import {SongService} from '../../service/song.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  value: string;
  songList: Song[] = [];
  constructor(public searchService: SearchService, private songService: SongService) { }

  ngOnInit(): void {
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
