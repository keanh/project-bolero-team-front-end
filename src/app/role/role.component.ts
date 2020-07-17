import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {StyleService} from "../service/style.service";
import {Style} from "../interface/Style";
import {RoleService} from "../service/role.service";
import {Role} from "../interface/role";

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roleForm: FormGroup;
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });
  constructor(private fb: FormBuilder,
              private roleService: RoleService) {

  }

  ngOnInit(): void {
    this.roleForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
    })
  }

  onSubmit(){
    const {value} = this.roleForm;
    const role: Role = {
      name: value.name
    }
    this.roleService.createRole(role).subscribe(() => {
      this.createSuccess();
      this.roleForm.reset();
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
