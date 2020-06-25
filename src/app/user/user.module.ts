import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WelcomeAreaComponent} from './welcome-area/welcome-area.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CKEditorModule} from 'ckeditor4-angular';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {UpdateProfileComponent} from './update-profile/update-profile.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
      path: 'detail/:id',
      component: UserDetailsComponent
      },
      {
        path: 'update-profile/:id',
        component: UpdateProfileComponent
      },
      {
        path: 'update-password',
        component: UpdatePasswordComponent
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
    UpdatePasswordComponent,
    UserDetailsComponent,
    UpdateProfileComponent
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
