import { Component, OnInit } from '@angular/core';
import {Song} from '../../interface/Song';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SongService} from '../../service/song.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {ActivatedRoute, Router} from '@angular/router';
import {Style} from "../../interface/Style";
import {StyleService} from "../../service/style.service";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-update-song',
  templateUrl: './update-song.component.html',
  styleUrls: ['./update-song.component.css']
})
export class UpdateSongComponent implements OnInit {

  imageUrl: string;
  musicUrl: string;

  selectedMusic: any = null;
  selectedImage: any = null;

  styleList: Style[] = [];
  song: Song[] = [];
  success: string;
  fail: string;
  songForm: FormGroup;

  constructor(private songService: SongService,
              private storage: AngularFireStorage,
              private route: ActivatedRoute,
              private routes: Router,
              private styleService: StyleService,
              private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.songForm = new FormGroup({
    //     name: new FormControl('',
    //       [Validators.required,
    //         Validators.minLength(1)]),
    //     lyrics: new FormControl('',
    //       [Validators.required,
    //         Validators.minLength(10)]),
    //     singer: new FormControl('',
    //       [Validators.required,
    //         Validators.minLength(1)]),
    //     author: new FormControl('',
    //       [Validators.required,
    //         Validators.minLength(1)]),
    //   }
    // )
    this.songForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      lyrics: ['', [Validators.required, Validators.minLength(10)]],
      singer: ['', [Validators.required, Validators.minLength(5)]],
      author: ['', [Validators.required, Validators.minLength(5)]],
      // image: ['', [Validators.required]],
      style: this.fb.group({
        id: ['',[Validators.required]],
      }),
    });
    this.styleService.findAll().subscribe( next => (this.styleList = next), error => (this.styleList = []));
    console.log(this.styleList);
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

  // upload(){
  //   const filePath = `databasezingmp3.appspot.com/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
  //   const fileRef = this.storage.ref(filePath);
  //   this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
  //     finalize(() => {
  //       fileRef.getDownloadURL().subscribe(url => {
  //         this.imageUrl = url;
  //         console.log(this.imageUrl)
  //       });
  //     })
  //   ).subscribe(data => {
  //     console.log(data)
  //   },err => {
  //     console.log(err)
  //     return false;
  //   });
  //
  //   const filePath2 = `databasezingmp3.appspot.com/${this.selectedMusic.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
  //   const fileRef2 = this.storage.ref(filePath2);
  //   this.storage.upload(filePath2, this.selectedMusic).snapshotChanges().pipe(
  //     finalize(() => {
  //       fileRef2.getDownloadURL().subscribe(url => {
  //         this.musicUrl = url;
  //         console.log(this.musicUrl);
  //       });
  //     })
  //   ).subscribe(data => {
  //     console.log(data)
  //   },err => {
  //     console.log(err)
  //     return false;
  //   });
  //
  //   return true;
  // }
  //
  // onchangeImage(event){
  //   if(event.target.files[0] !== null){
  //     this.selectedImage = event.target.files[0];
  //     console.log(this.selectedImage);
  //   }
  // }
  //
  // onchangeMusic(event){
  //   if(event.target.files[0] !== null){
  //     this.selectedMusic = event.target.files[0];
  //     console.log(this.selectedMusic);
  //   }
  // }

  // wait(ms) {
  //   return new Promise(r => setTimeout(r, ms))
  // }

  // async onSubmit() {
  //   const {value} = this.songForm;
  //   let check = this.upload();
  //   if (check) {
  //     await this.wait(2000);
  //     const song: Song = {
  //       name: value.name,
  //       singer: value.singer,
  //       author: value.author,
  //       lyrics: value.lyrics,
  //       image: this.imageUrl,
  //       fileMp3: this.musicUrl,
  //     }
  //     this.songService.addSong(song).subscribe(() => {
  //       console.log("update thành công")
  //     }, (e) => {
  //       console.log(e)
  //     });
  //     console.log(song);
  //     this.songForm.reset();
  //   } else {
  //     return;
  //   }
  // }
}
