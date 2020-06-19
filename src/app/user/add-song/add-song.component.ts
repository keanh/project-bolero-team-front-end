import { Component, OnInit } from '@angular/core';
import {Song} from '../../interface/Song';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SongService} from '../../service/song.service';
import {Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {Style} from '../../interface/Style';
import {StyleService} from '../../service/style.service';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {
  imageUrl: string;
  musicUrl: string;

  selectedMusic: any = null;
  selectedImage: any = null;

  songList: Song[] = [];
  styleList: Style[] = [];
  songForm: FormGroup;

  constructor(private songService: SongService,
              private styleService: StyleService,
              private fb: FormBuilder,
              private storage: AngularFireStorage) {}

  ngOnInit(): void {
    this.songForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lyrics: ['', [Validators.required, Validators.minLength(10)]],
      singer: ['', [Validators.required, Validators.minLength(5)]],
      author: ['', [Validators.required, Validators.minLength(5)]],
      image: ['', [Validators.required]],
      fileMp3: ['', [Validators.required]],
      style: this.fb.group({
          id: ['', [Validators.required]],
      }),
    });
    this.styleService.findAll().subscribe( next => (this.styleList = next), error => (this.styleList = []));
    console.log(this.styleList);
  }

  onRemove(event) {
    console.log(event);
    this.songList.splice(this.songList.indexOf(event), 1);
  }

   upload1() {
     const filePath = `databasezingmp3.appspot.com/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
     const fileRef = this.storage.ref(filePath);
     return this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
       finalize(() => {
         fileRef.getDownloadURL().subscribe(url => {
           this.imageUrl = url;
           console.log(this.imageUrl);
         });
       })
     ).subscribe(data => {
       console.log(data);
     }, err => {
       console.log(err);
     });
   }
    upload2(){
    const filePath2 = `databasezingmp3.appspot.com/${this.selectedMusic.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
    const fileRef2 = this.storage.ref(filePath2);
    return this.storage.upload(filePath2, this.selectedMusic).snapshotChanges().pipe(
       finalize(() => {
        fileRef2.getDownloadURL().subscribe(url => {
          this.musicUrl = url;
          console.log(this.musicUrl);
        });
      })
    );
  }

  onchangeImage(event){
    if (event.target.files[0] !== null){
      this.selectedImage = event.target.files[0];
      console.log(this.selectedImage);
    }
  }

  onchangeMusic(event){
    if (event.target.files[0] !== null){
      this.selectedMusic = event.target.files[0];
      console.log(this.selectedMusic);
    }
  }

  wait(ms) {
    return new Promise(r => setTimeout(r, ms));
  }

  async onSubmit() {
     const {value} = this.songForm;
     const upload = this.upload2();
     if (true) {
       // await this.wait(15000);
       const song: Song = {
         name: value.name,
         singer: value.singer,
         author: value.author,
         lyrics: value.lyrics,
         image: this.imageUrl,
         fileMp3: this.musicUrl,
         style: value.style,
       };
       this.songService.addSong(song).subscribe(() => {
         alert('create thành công');
       }, (e) => {
         console.log(e);
       });
       console.log(song);
       this.songForm.reset();
        } else {
          return;
     }
   }

}
