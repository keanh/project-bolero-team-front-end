import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StyleService} from "../service/style.service";
import {Style} from "../interface/Style";
import Swal from "sweetalert2";


@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {
  styleForm: FormGroup;
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });
  constructor(private fb: FormBuilder,
              private styleService: StyleService) {

  }

  ngOnInit(): void {
    this.styleForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
    })
  }

  onSubmit(){
    const {value} = this.styleForm;
    const style: Style = {
      name: value.name
    }
    this.styleService.createStyle(style).subscribe(() => {
      this.createSuccess();
      this.styleForm.reset();
    }, (e) => {
      this.createFail();
      console.log(e);
    });
  }

  createSuccess(){
    this.Toast.fire({
      icon: 'success',
      title: ' create success '
    });
  }
  createFail(){
    this.Toast.fire({
      icon: 'error',
      title: 'create fail'
    });
  }
}
