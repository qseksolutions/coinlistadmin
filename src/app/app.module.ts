import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule } from 'angular2-toaster';
import { CKEditorModule } from 'ng2-ckeditor';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CoinComponent } from './coin/coin.component';
import { UpdateComponent } from './update/update.component';
import { SupportComponent } from './support/support.component';
import { MessageComponent } from './message/message.component';
import { SeoComponent } from './seo/seo.component';
import { AdvertiseComponent } from './advertise/advertise.component';


@NgModule({
  imports:      [
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'coin',
        component: CoinComponent,
        pathMatch: 'full'
      },
      {
        path: 'support',
        component: SupportComponent,
        pathMatch: 'full'
      },
      {
        path: 'update/:id',
        component: UpdateComponent,
        pathMatch: 'full'
      },
      {
        path: 'message',
        component: MessageComponent,
        pathMatch: 'full'
      },
      {
        path: 'seo',
        component: SeoComponent,
        pathMatch: 'full'
      },
      {
        path: 'advertise',
        component: AdvertiseComponent,
        pathMatch: 'full'
      },
    ]),
    BrowserModule,
    CommonModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ToasterModule,
    CKEditorModule,
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CoinComponent,
    UpdateComponent,
    SupportComponent,
    MessageComponent,
    SeoComponent,
    AdvertiseComponent,
  ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
