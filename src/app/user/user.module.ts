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
import {WelcomeAreaComponent} from './welcome-area/welcome-area.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeatureComponent } from './feature/feature.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // {
      //   path: '',
      // component: PlayMusicComponent
      // },
      {
        path: 'add',
        component: AddSongComponent
      },
      {
        path: '',
        component: StyleListComponent
      },
      {
        path: 'update',
        component: UpdateSongComponent
      },
    ]
  }
];

@NgModule({
  declarations: [FooterComponent,
    HeaderComponent,
    LayoutComponent,
    AddSongComponent,
    StyleListComponent,
    UpdateSongComponent, WelcomeAreaComponent, NavbarComponent, FeatureComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
