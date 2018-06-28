import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { GalleriesComponent } from './pages/galleries/galleries.component';
import { PricesComponent } from './pages/prices/prices.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import {DataService} from './services/data.service';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    GalleriesComponent,
    PricesComponent,
    BlogComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
