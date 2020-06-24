import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {LatestSongComponent} from './latest-song/latest-song.component';
import {AddSongComponent} from './add-song/add-song.component';
import {WelcomeAreaComponent} from './welcome-area/welcome-area.component';
import {UpdateSongComponent} from './update-song/update-song.component';
import {ListComponent} from './list/list.component';
import {SongDetailsComponent} from './song-details/song-details.component';
import {FooterComponent} from './footer/footer.component';
import {StyleListComponent} from './style-list/style-list.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FeatureComponent} from './feature/feature.component';
import {HeaderComponent} from './header/header.component';
import {ListenBarComponent} from './listen-bar/listen-bar.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CKEditorModule} from 'ckeditor4-angular';
import {LoginComponent} from '../login/login.component';
import {UserGuard} from '../user.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: LatestSongComponent
      },
      // {
      //   path: 'signin',
      //   component: LoginComponent
      // },
      {
        path: 'add',
        canActivate: [UserGuard],
        component: AddSongComponent
      },
      {
        path: 'update/:id',
        canActivate: [UserGuard],
        component: UpdateSongComponent
      },
      {
        path: 'list',
        canActivate: [UserGuard],
        component: ListComponent
      },
      {
        path: 'details/:id',
        component: SongDetailsComponent
      }
    ]
  }
  ];

@NgModule({
  declarations: [
    FooterComponent,
    StyleListComponent,
    NavbarComponent,
    FeatureComponent,
    HeaderComponent,
    ListenBarComponent,
    AddSongComponent,
    LatestSongComponent,
    LayoutComponent,
    ListComponent,
    SongDetailsComponent,
    UpdateSongComponent,
    WelcomeAreaComponent
  ],
  exports: [
    WelcomeAreaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule
  ]
})
export class SongModule { }
