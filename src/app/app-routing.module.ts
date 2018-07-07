import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { GalleryComponent } from './pages/galleries/gallery/gallery.component';
import { GalleriesComponent } from './pages/galleries/galleries.component';
import { HomeComponent } from './pages/home/home.component';
import { PricesComponent } from './pages/prices/prices.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {GalleryListComponent} from './pages/galleries/gallery-list/gallery-list.component';
import {AdminLoginComponent} from './pages/admin-login/admin-login.component';
import {AdminComponent} from './pages/admin/admin.component';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'galleries',
    component: GalleriesComponent,
    children: [
      {
        path: 'wedding',
        component: GalleryListComponent,
        data : {type : 'wedding'}
      },
      {
        path: 'lovestory',
        component: GalleryListComponent,
        data : {type : 'lovestory'}
      },
      {
        path: 'portrait',
        component: GalleryListComponent,
        data : {type : 'portrait'}
      },
      {
        path: 'family',
        component: GalleryListComponent,
        data : {type : 'family'}
      },
      {
        path: 'pregnancy',
        component: GalleryListComponent,
        data : {type : 'pregnancy'}
      },
    ]
  },
  {
    path: 'prices',
    component: PricesComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'admin_login',
    component: AdminLoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
