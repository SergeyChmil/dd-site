import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbDropdown, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {HomeComponent} from './pages/home/home.component';
import {ContactsComponent} from './pages/contacts/contacts.component';
import {GalleriesComponent} from './pages/galleries/galleries.component';
import {PricesComponent} from './pages/prices/prices.component';
import {BlogComponent} from './pages/blog/blog.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';

import {DataService} from './services/data.service';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {GalleryComponent} from './pages/galleries/gallery/gallery.component';
import {GalleryListComponent} from './pages/galleries/gallery-list/gallery-list.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminComponent } from './pages/admin/admin.component';
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';
import {UploadService} from './services/upload.service';
import { CheckIsLoggedPipe } from './pipes/check-is-logged.pipe';
import { CreateGalleryComponent } from './pages/admin/forms/create-gallery/create-gallery.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LinkifyPipe } from './pipes/linkify.pipe';
import {CommonService} from './services/common.service';
import { AdminFormComponent } from './pages/admin/forms/admin-form/admin-form.component';
import { UploadGalleryComponent } from './shared/upload-gallery/upload-gallery.component';
import { AlertSelfClosingComponent } from './shared/alert-self-closing/alert-self-closing.component';
import { CreateBlogPostComponent } from './pages/admin/forms/create-blog-post/create-blog-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    GalleriesComponent,
    PricesComponent,
    BlogComponent,
    PageNotFoundComponent,
    GalleryComponent,
    GalleryListComponent,
    AdminLoginComponent,
    AdminComponent,
    CheckIsLoggedPipe,
    CreateGalleryComponent,
    LinkifyPipe,
    AdminFormComponent,
    UploadGalleryComponent,
    AlertSelfClosingComponent,
    CreateBlogPostComponent,
  ],
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UploadService,
    DataService,
    CommonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
