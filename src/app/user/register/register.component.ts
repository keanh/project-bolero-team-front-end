import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {User} from '../../interface/User';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  phoneNumberPattern = '^((\\0-?)|0)?[0-9]{10}$';
  user: User[] = [];
  failMessage: string;

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });
  constructor(private formBuilder: FormBuilder,
              private userService: UserService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(this.phoneNumberPattern)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.valid) {
      const {value} = this.registerForm;
      this.userService.createUser(value)
        .subscribe(result => {
          this.user.push(result);
          this.createSuccess();
          this.registerForm.reset(this.onReset()
          );
        }, error => {
          this.failMessage = 'Add user fail !';
        });
    }
  }
  createSuccess(){
    this.Toast.fire({
      icon: 'success',
      title: 'Tạo mới thành công'
    });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
