import { Component, OnInit } from '@angular/core';
import Swal from '../../../assets/sweetalert2/sweetalert2.min.js';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AlbumService} from "../../service/album.service";
import {Album} from "../../interface/Album";
@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });

  albumForm: FormGroup;
  constructor(private albumServie: AlbumService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.albumForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      // user_id: this.fb.group({
      //   id: ['1', [Validators.required]],
      // }),
    });
  }

  async onSubmit(){
    const id = 1;
    const {value} = this.albumForm;
    const album: Album = {
      name: value.name,
      user_id: id,
    }
    this.albumServie.createAlbum(album).subscribe(() => {
    }, (e) => {
      console.log(e);
    });
    console.log(album);
    // await this.router.navigate(['/']);
    await this.createSuccess();
    this.albumForm.reset();
    // alert('create thành công');
  }

  createSuccess(){
    this.Toast.fire({
      icon: 'success',
      title: 'Tạo mới thành công'
    });
  }
}
