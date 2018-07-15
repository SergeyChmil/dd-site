import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

import {DataService} from './services/data.service';
import {AuthService} from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mainMenu$: Observable<any>;
  galleriesMenu$: Observable<any>;
  isLogged: Observable<any>;
  adminPath: string;

  constructor(private afdb: AngularFireDatabase, private ds: DataService, private as: AuthService) {
    this.isLogged = as.isLogged();
    this.adminPath = environment.admin.localPath;
  }

  ngOnInit() {
    this.mainMenu$ = this.ds.getMainMenuAPI();
    this.galleriesMenu$ = this.ds.getGalleriesAPI();
  }

// TODO: use vars, not plain strings
  checkIsDropDown(pUrl: string): boolean {
    return (pUrl === 'galleries');
  }

  getGalleryURL(galleryUrl): string {
    return `galleries/${galleryUrl}`;
  }

  logout() {
    this.as.logout();
  }

}
