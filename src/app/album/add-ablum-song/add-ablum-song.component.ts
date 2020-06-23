import { Component, OnInit } from '@angular/core';
import {Song} from "../../interface/Song";
import {Album} from "../../interface/Album";
import {SongService} from "../../service/song.service";
import {SearchService} from "../../service/search.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AlbumService} from "../../service/album.service";
import Swal from '../../../assets/sweetalert2/sweetalert2.min.js';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-ablum-song',
  templateUrl: './add-ablum-song.component.html',
  styleUrls: ['./add-ablum-song.component.css']
})
export class AddAblumSongComponent implements OnInit {
  value = '';
  songList: Song[] = [];
  albumList: Album[] = [];
  idSong: any[] =[];
  albumForm: FormGroup;

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });

  constructor(private songService: SongService,
              private searchServe: SearchService,
              private router: Router,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private albumService: AlbumService) { }

  ngOnInit(): void {
    this.songService.getAllSongs().subscribe( data => {
    this.songList = data;
  }, error => {
    console.log(error);
  });
    this.albumForm = this.fb.group({
      id: ['', [Validators.required]],
    })

    this.albumService.getAllAlbum().subscribe(data => {
      this.albumList = data;
    }, error => {
      console.log(error);
    });
  }

  async addSongToAlbum(){
    const {value} = this.albumForm;
    const album = {
      id: value.id,
      songList: []
    }
    album.songList= this.convertToSong(this.idSong);
    await this.albumService.createAlbum(album).subscribe(next => {
      console.log(album);
      console.log(next)
    }, (e) => {
      console.log(e);
    });
    await this.router.navigate(['/']);
    this.addSongToAlbumSuccess();
  }

  addSongToAlbumSuccess(){
    this.Toast.fire({
      icon: 'success',
      title: 'Thêm bài hát vào album thành công'
    });
  }

  changeSelection(id: number){
    console.log(id);
    if (this.idSong.includes(id)){
     for (let i=0;i<this.idSong.length;i++){
       if (this.idSong[i] === id){
         this.idSong.splice(i,1);
       }
     }
      console.log(this.idSong);
    }else {
      this.idSong.push(id);
      console.log(this.idSong);
    }
  }

  convertToSong(array){
    for(let i = 0; i < array.length; i++){
      array[i] = {
        id: array[i]
      }
    }
    return array;
  }
}
