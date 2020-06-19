import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SongService} from '../../service/song.service';
import {Song} from '../../interface/Song';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent implements OnInit {
  song: Song;
  constructor(
    private route: ActivatedRoute,
    private songService: SongService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.songService.getSongById(id).subscribe(
      next => (this.song = next),
      error => {
        console.log(error);
        this.song = null;
      }
    );
  }
}
