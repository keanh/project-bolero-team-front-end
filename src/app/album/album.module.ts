import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AddAlbumComponent} from "./add-album/add-album.component";
import {LayoutComponent} from "./layout/layout.component";
import {AddAblumSongComponent} from "./add-ablum-song/add-ablum-song.component";
import {FooterComponent} from "./footer/footer.component";
import {WelcomeAreaComponent} from "./welcome-area/welcome-area.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {HeaderComponent} from "./header/header.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CKEditorModule} from "ckeditor4-angular";


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'create',
        component: AddAlbumComponent
      },
      {
        path: 'create-song',
        component: AddAblumSongComponent
      },
      // {
      //   path: 'user-details:/id',
      //   component: UserDetailsComponent
      // }
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
    AddAblumSongComponent,
    AddAlbumComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule
  ]
})
export class AlbumModule { }
