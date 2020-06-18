import { Component, OnInit } from '@angular/core';
import {Song} from '../../interface/Song';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SongService} from '../../service/song.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-song',
  templateUrl: './update-song.component.html',
  styleUrls: ['./update-song.component.css']
})
export class UpdateSongComponent implements OnInit {

  song: Song[] = [];
  success: string;
  fail: string;
  songForm: FormGroup;

  constructor(private songService: SongService,
              private storage: AngularFireStorage,
              private route: ActivatedRoute,
              private routes: Router) {}

  ngOnInit(): void {
    this.songForm = new FormGroup({
        name: new FormControl('',
          [Validators.required,
            Validators.minLength(1)]),
        lyrics: new FormControl('',
          [Validators.required,
            Validators.minLength(10)]),
        singer: new FormControl('',
          [Validators.required,
            Validators.minLength(1)]),
        author: new FormControl('',
          [Validators.required,
            Validators.minLength(1)]),
      }
    );

    const id = +this.route.snapshot.paramMap.get('id');
    this.songService.getSongById(id)
      .subscribe(result => {
        this.song = result;
        this.songForm.patchValue(this.song);
        this.success = 'Edit song successfully !';
      }, error => {
        this.fail = 'Edit song fail';
      });
  }
  updateSong(){
    if (this.songForm.valid) {
      const {value} = this.songForm;
      const data = {
        ...this.song,
        ...value
      };
      this.songService.updateSong(data)
        .subscribe(result => {
          this.routes.navigate(['']);
        }, error => {
          console.log(error);
        });
    }
  }
}
