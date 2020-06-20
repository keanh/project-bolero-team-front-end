import { Component, OnInit } from '@angular/core';
import {Song} from '../../interface/Song';
import {SongService} from '../../service/song.service';
import {SearchService} from '../../service/search.service';

@Component({
  selector: 'app-latest-song',
  templateUrl: './latest-song.component.html',
  styleUrls: ['./latest-song.component.css']
})
export class LatestSongComponent implements OnInit {

  value: string;
  songList: Song[] = [];
  constructor(private songService: SongService, public searchService: SearchService) {
  }

  ngOnInit(): void {
    this.songService.getSongs().subscribe(next => (this.songList = next), error => (this.songList = []));
    this.searchService.value.subscribe( data => {
      this.value = data;
    });
  }

}
