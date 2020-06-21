import { Component, OnInit } from '@angular/core';
import {SongService} from "../../service/song.service";
import {Song} from "../../interface/Song";
import {SearchService} from '../../service/search.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  value = '';
  songList: Song[] = [];
  constructor(private songService: SongService,
              private searchServe: SearchService,
              private router: Router) { }

  ngOnInit(): void {
    this.songService.getSongs().subscribe(data => {
      this.songList = data;
    }, error => {
      console.log(error);
    });
  }

  deletePost(id){
    this.songService.deleteSong(id).subscribe(() => {
      this.router.navigate(['/list']);
    });
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
