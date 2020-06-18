import { Component, OnInit } from '@angular/core';
import {Song} from '../../interface/Song';
import {FormControl, FormGroup} from '@angular/forms';
import {SongService} from '../../service/song.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {environment} from '../../../environments/environment';
import {finalize} from 'rxjs/operators';
import {Image} from '../../interface/Image';
import {ImageServiceService} from '../../service/image-service.service';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {

  songList: Song[] = [];
  success: string;
  fail: string;
  songForm: FormGroup;
  selectedImages: any[] = [];

  constructor(private songService: SongService,
              private storage: AngularFireStorage,
              private imageService: ImageServiceService) {}
  ngOnInit(): void {
    this.songForm = new FormGroup({
      name: new FormControl(),
      image: new FormControl(),
      lyrics: new FormControl(),
      fileMp3: new FormControl(),
      singer: new FormControl(),
      author: new FormControl(),
      }
    );
  }
  createSong(){
      const {value} = this.songForm;
      this.songService.addSong(value)
        .subscribe(result =>
        { console.log('Add supplier successfully !');
          this.songList.push(result);
          this.songForm.reset({
            name: '',
            image: '',
            lyrics: '',
            fileMp3: '',
            singer: '',
            author: '',
          });
        }, error => {
          console.log('Add post successfully !');
        });
    }

  async createImage() {
    const song = await this.createSong();
    if (song != null) {
      if (this.selectedImages.length !== 0) {
        this.songForm.reset();
        for (const selectedImage of this.selectedImages) {
          const filePath = `${environment.firebaseConfig.storageBucket}/${selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
          const fileRef = this.storage.ref(filePath);
          this.storage.upload(filePath, selectedImage).snapshotChanges().pipe(
            finalize(() => {
              fileRef.getDownloadURL().subscribe(data => {
                const image: Image = {
                  url: data
                };
                this.imageService.createImage(image).subscribe(() => {
                }, () => {
                });
              });
            })
          ).subscribe();
        }
      }
    }
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImages = event.target.files;
    } else {
      this.selectedImages = [];
    }
  }
}
