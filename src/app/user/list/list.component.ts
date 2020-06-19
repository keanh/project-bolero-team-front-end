import { Component, OnInit } from '@angular/core';
import {SongService} from "../../service/song.service";
import {Song} from "../../interface/Song";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  songList: Song[] =[];
  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songService.getSongs().subscribe(next => {this.songList = next;
    console.log(this.songList)}, error => {
      console.log(error);
      this.songList = [];
    });
  }

}
