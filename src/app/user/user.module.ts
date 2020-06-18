import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule, Routes} from '@angular/router';
import { PlayMusicComponent } from './play-music/play-music.component';
import { AddSongComponent } from './add-song/add-song.component';
import {StyleListComponent} from './style-list/style-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ListSongComponent } from './list-song/list-song.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
      component: PlayMusicComponent
      },
      {
        path: 'add',
        component: AddSongComponent
      },
      {
        path: 'style-list',
        component: StyleListComponent
      },
    ]
  }
];

@NgModule({
  declarations: [FooterComponent, HeaderComponent, LayoutComponent,
    PlayMusicComponent, AddSongComponent, StyleListComponent, NavbarComponent, ListSongComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class UserModule { }
