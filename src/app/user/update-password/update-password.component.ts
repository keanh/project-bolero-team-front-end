import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SongService} from '../../service/song.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {ActivatedRoute, Router} from '@angular/router';
import {StyleService} from '../../service/style.service';
import {User} from '../../interface/User';
import Swal from 'sweetalert2';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  user: User;
  success: string;
  fail: string;
  oldPassword: string;
  newPassword: string;
  updatePasswordForm: FormGroup;

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private routes: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.userService.updatePassword(this.oldPassword, this.newPassword).subscribe(() => {
      alert('success');
      console.log('success');
      }, error => {
      alert('fails');
      console.log(error);
    });
  }
}
