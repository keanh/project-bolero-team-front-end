import {Component, OnInit, SimpleChanges} from '@angular/core';
import {Song} from '../../interface/Song';
import {User} from '../../interface/User';
import {SongService} from '../../service/song.service';
import {SearchService} from '../../service/search.service';
import {TokenStorageService} from '../../auth/token-storage.service';
import {UserService} from '../../service/user.service';
import {LikeService} from '../../service/like.service';
import {Album} from '../../interface/Album';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AlbumService} from '../../service/album.service';

@Component({
  selector: 'app-all-album',
  templateUrl: './all-album.component.html',
  styleUrls: ['./all-album.component.css']
})
export class AllAlbumComponent implements OnInit {
  value = '';
  songList: Song[] = [];
  albumList: Album[] = [];
  constructor(private songService: SongService,
              private searchServe: SearchService,
              private router: Router,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private albumService: AlbumService) { }
  ngOnInit(): void {
    this.albumService.getAllAlbum().subscribe(data => {
      this.albumList = data;
    }, error => {
      console.log(error);
    });
    this.songService.getAllSongs().subscribe( data => {
      this.songList = data;
    }, error => {
      console.log(error);
    });
  }
}
