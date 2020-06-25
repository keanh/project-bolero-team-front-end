import { Component, OnInit } from '@angular/core';
import {SongService} from '../../service/song.service';
import {Song} from '../../interface/Song';
import {SearchService} from '../../service/search.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from '../../../assets/sweetalert2/sweetalert2.min.js';
import {AlbumService} from "../../service/album.service";
import {Album} from "../../interface/Album";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  value = '';
  songList: Song[] = [];
  albumList: Album[] = [];

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });
  constructor(private songService: SongService,
              private searchServe: SearchService,
              private router: Router,
              private route: ActivatedRoute,
              private albumService: AlbumService) { }

  ngOnInit(): void {
    this.songService.getAllSongs().subscribe( data => {
      this.songList = data;
    }, error => {
      console.log(error);
    });
    this.albumService.getAllAlbum().subscribe(data => {
      this.albumList = data;
    }, error => {
      console.log(error);
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
  delete(id: number) {
    this.songService.deleteSong(id).subscribe( () => {
      this.deleteSuccess();
      this.getAllSong();
      // this.router.getCurrentNavigation();
      // this.router.navigate(['/'], {relativeTo: this.route}).then(r => console.log(r));
    }, error => {
      console.log('delete failed');
    });
  }
  getAllSong(){
    this.songService.getAllSongs().subscribe( data => {
      this.songList = data;
    }, error => {
      console.log(error);
    });
  }

  deleteSuccess(){
    this.Toast.fire({
      icon: 'success',
      title: 'Xóa thành công'
    });
  }
}
