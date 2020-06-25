import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import Swal from 'sweetalert2';
import {AngularFireStorage} from '@angular/fire/storage';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../interface/User';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  user: User;
  success: string;
  fail: string;
  profileForm: FormGroup;

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });

  constructor(private userService: UserService,
              private storage: AngularFireStorage,
              private route: ActivatedRoute,
              private routes: Router,
              private fb: FormBuilder) {}

  ngOnInit(): void {

    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.required]],

    });

    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(id)
      .subscribe(result => {
        this.user = result;
        this.profileForm.patchValue(this.user);
        this.success = 'Edit user successfully !';
      }, error => {
        this.fail = 'Edit user fail';
      });

  }
  updateUser(){
    if (this.profileForm.valid) {
      const {value} = this.profileForm;
      const data = {
        ...this.user,
        ...value
      };
      this.userService.updateUser(data)
        .subscribe(result => {
          this.routes.navigate(['list']);
          this.updateSuccess();
        }, error => {
          console.log(error);
        });
    }
  }
  updateSuccess(){
    this.Toast.fire({
      icon: 'success',
      title: 'Cập nhật thành công'
    });
  }

}
