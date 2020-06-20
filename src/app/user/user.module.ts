import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule, Routes} from '@angular/router';
import { AddSongComponent } from './add-song/add-song.component';
import {StyleListComponent} from './style-list/style-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdateSongComponent } from './update-song/update-song.component';
import {WelcomeAreaComponent} from './welcome-area/welcome-area.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeatureComponent } from './feature/feature.component';
import { HeaderComponent } from './header/header.component';
import { LatestSongComponent } from './latest-song/latest-song.component';
import { CKEditorModule} from 'ckeditor4-angular';
import { ListenBarComponent } from './listen-bar/listen-bar.component';
import {ListComponent} from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: LatestSongComponent
      },
      {
        path: 'add',
        component: AddSongComponent
      },
      {
        path: '',
        component: WelcomeAreaComponent
      },
      {
        path: 'update/:id',
        component: UpdateSongComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
    ]
  }
];

@NgModule({
  declarations: [FooterComponent,
    LayoutComponent,
    AddSongComponent,
    StyleListComponent,
    UpdateSongComponent,
    WelcomeAreaComponent,
    NavbarComponent,
    FeatureComponent,
    HeaderComponent,
    LatestSongComponent,
    ListenBarComponent,
    ListComponent
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
