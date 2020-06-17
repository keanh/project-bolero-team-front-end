import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule, Routes} from '@angular/router';
import { PlayMusicComponent } from './play-music/play-music.component';
import { AddSongComponent } from './add-song/add-song.component';

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
      }
    ]
  }
];

@NgModule({
  declarations: [FooterComponent, HeaderComponent, LayoutComponent, PlayMusicComponent, AddSongComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
