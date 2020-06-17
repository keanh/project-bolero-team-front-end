import { Component, OnInit } from '@angular/core';
import {Song} from '../../interface/Song';
import {FormControl, FormGroup} from '@angular/forms';
import {SongService} from '../../service/song.service';

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

  constructor(private songService: SongService) { }

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
  onSubmit(){
      const {value} = this.songForm;
      this.songService.addSong(value)
        .subscribe(result =>
        { console.log('Add supplier successfully !');
          this.songList.push(result);
          this.songForm.reset({
            name: '', image: '', lyrics: '', fileMp3: '', singer: '', author: '',
          });
        }, error => {
          console.log('Add post successfully !');
        });
    }
}
