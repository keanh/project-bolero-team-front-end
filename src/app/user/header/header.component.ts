import { Component, OnInit } from '@angular/core';
import {Song} from '../../interface/Song';
import {SongService} from '../../service/song.service';
import {SearchService} from '../../service/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  value: string;
  constructor(public searchService: SearchService) { }

  ngOnInit(): void {
  }
  search(){
    this.searchService.changeValue(this.value);
    console.log(this.value);
  }
}
