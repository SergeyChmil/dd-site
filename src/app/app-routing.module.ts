import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { GalleryComponent } from './pages/galleries/gallery/gallery.component';
import { GalleriesComponent } from './pages/galleries/galleries.component';
import { HomeComponent } from './pages/home/home.component';
import { PricesComponent } from './pages/prices/prices.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

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
        component: GalleryComponent,
        data : {type : 'wedding'}
      },
      {
        path: 'lovestory',
        component: GalleryComponent,
        data : {type : 'lovestory'}
      },
      {
        path: 'portrait',
        component: GalleryComponent,
        data : {type : 'portrait'}
      },
      {
        path: 'family',
        component: GalleryComponent,
        data : {type : 'family'}
      },
      {
        path: 'pregnancy',
        component: GalleryComponent,
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
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
