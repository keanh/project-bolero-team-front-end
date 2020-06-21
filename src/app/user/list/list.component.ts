import { Component, OnInit } from '@angular/core';
import {SongService} from "../../service/song.service";
import {Song} from "../../interface/Song";
import {SearchService} from '../../service/search.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  value = '';
  songList: Song[] = [];
  constructor(private songService: SongService, private searchServe: SearchService) { }

  ngOnInit(): void {
    this.searchServe.value.subscribe( data => {
      this.value = data;
    });
    console.log(this.value);
  }
  searching(){
    // if (this.value !== ''){
    //   this.songList = this.songList.filter( res => {
    //     return res.name.toLocaleLowerCase().match(this.value.toLocaleLowerCase());
    //   });
    // }else if (this.value === ''){
    //   this.ngOnInit();
    // }
  }
}
