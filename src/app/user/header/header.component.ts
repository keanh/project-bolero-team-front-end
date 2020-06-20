import { Component, OnInit } from '@angular/core';
import {Song} from '../../interface/Song';
import {SongService} from '../../service/song.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  keyword: string;
  songList: Song[];
  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songService.getSongs().subscribe( data => {
      this.songList = data;
    } )
  }
  search(){
    if (this.keyword !== ''){
      this.songList = this.songList.filter( res => {
        return res.name.toLocaleLowerCase().match(this.keyword.toLocaleLowerCase());
      });
    }else if (this.keyword === ''){
      this.ngOnInit();
    }
  }
}
