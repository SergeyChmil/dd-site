import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
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
    component: GalleriesComponent
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
