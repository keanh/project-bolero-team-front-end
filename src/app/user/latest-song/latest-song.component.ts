import { Component, OnInit } from '@angular/core';
import {Song} from '../../interface/Song';
import {SongService} from '../../service/song.service';

@Component({
  selector: 'app-latest-song',
  templateUrl: './latest-song.component.html',
  styleUrls: ['./latest-song.component.css']
})
export class LatestSongComponent implements OnInit {

  songList: Song[] = [];
  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songService.getSongs().subscribe(next => (this.songList = next), error => (this.songList = []));
  }

}
