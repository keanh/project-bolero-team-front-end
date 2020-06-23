import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WelcomeAreaComponent} from './welcome-area/welcome-area.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CKEditorModule} from 'ckeditor4-angular';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import {LayoutComponent} from './layout/layout.component';
import {RegisterComponent} from './register/register.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'update-password',
        component: UpdatePasswordComponent
      },
      {
        path: 'user-details:/id',
        component: UserDetailsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    FooterComponent,
    LayoutComponent,
    WelcomeAreaComponent,
    NavbarComponent,
    HeaderComponent,
    RegisterComponent,
    UpdatePasswordComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule
  ]
})
export class UserModule { }
