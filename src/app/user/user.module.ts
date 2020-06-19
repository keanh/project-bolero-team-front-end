import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule, Routes} from '@angular/router';
import { AddSongComponent } from './add-song/add-song.component';
import {StyleListComponent} from './style-list/style-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdateSongComponent } from './update-song/update-song.component';
import { SongDetailsComponent } from './song-details/song-details.component';
import {PlayMusicComponent} from './play-music/play-music.component';

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
      {
        path: 'update',
        component: UpdateSongComponent
      },
      {
        path: 'song-details/:id',
        component: SongDetailsComponent
      }
    ]
  }
];

@NgModule({
    declarations: [FooterComponent,
      HeaderComponent,
      LayoutComponent,
      PlayMusicComponent,
      AddSongComponent,
      StyleListComponent,
      UpdateSongComponent,
      SongDetailsComponent
      // NavbarComponent
      ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
